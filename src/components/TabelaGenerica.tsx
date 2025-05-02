import { useState } from "react";

export interface Coluna<T> {
  chave: keyof T;
  titulo: string;
  ordenavel?: boolean;
  render?: (item: T) => React.ReactNode;
}

interface TabelaProps<T> {
  dados: T[];
  colunas: Coluna<T>[];
  porPagina?: number;
  rowClass?: (item: T) => string;
}

export function TabelaGenerica<T>({
  dados,
  colunas,
  porPagina = 15,
  rowClass,
}: TabelaProps<T>) {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [ordenacao, setOrdenacao] = useState<keyof T | null>(null);
  const [ascendente, setAscendente] = useState(true);

  const ordenar = (lista: T[]): T[] => {
    if (!ordenacao) return lista;
    return [...lista].sort((a, b) => {
      const valA = a[ordenacao];
      const valB = b[ordenacao];

      if (typeof valA === "number" && typeof valB === "number") {
        return ascendente ? valA - valB : valB - valA;
      }

      if (valA instanceof Date && valB instanceof Date) {
        return ascendente
          ? valA.getTime() - valB.getTime()
          : valB.getTime() - valA.getTime();
      }

      return ascendente
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
  };

  const dadosOrdenados = ordenar(dados);
  const totalPaginas = Math.ceil(dadosOrdenados.length / porPagina);
  const inicio = (paginaAtual - 1) * porPagina;
  const fim = inicio + porPagina;
  const pagina = dadosOrdenados.slice(inicio, fim);

  const handleOrdenar = (chave: keyof T) => {
    if (ordenacao === chave) {
      setAscendente(!ascendente);
    } else {
      setOrdenacao(chave);
      setAscendente(true);
    }
  };

  return (
    <div className="space-y-4 ">


      <div className="overflow-x-auto rounded-xl shadow bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase font-medium">
            <tr>
              {colunas.map((col) => (
                <th
                  key={String(col.chave)}
                  className={`px-4 py-2 ${col.ordenavel ? "cursor-pointer" : ""}`}
                  onClick={() => col.ordenavel && handleOrdenar(col.chave)}
                >
                  {col.titulo}
                  {col.ordenavel && (
                    <span className="ml-1">
                      {ordenacao === col.chave ? (ascendente ? "↑" : "↓") : "↓"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {pagina.map((item, idx) => (
              <tr
                key={idx}
                className={`border-t hover:bg-gray-50 ${rowClass ? rowClass(item) : ""
                  }`}
              >
                {colunas.map((col) => (
                  <td key={String(col.chave)} className="px-4 py-2">
                    {col.render ? col.render(item) : String(item[col.chave])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center gap-2 pt-2">
        <button
          className="px-3 py-1 bg-gray-200 rounded"
          onClick={() => setPaginaAtual((p) => Math.max(p - 1, 1))}
          disabled={paginaAtual === 1}
        >
          Anterior
        </button>
        <span className="px-3 py-1">
          Página {paginaAtual} de {totalPaginas}
        </span>
        <button
          className="px-3 py-1 bg-gray-200 rounded"
          onClick={() => setPaginaAtual((p) => Math.min(p + 1, totalPaginas))}
          disabled={paginaAtual === totalPaginas}
        >
          Próxima
        </button>
      </div>
    </div>
  );

}
