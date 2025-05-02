import { useState } from "react";
import { TabelaGenerica, Coluna } from "../components/TabelaGenerica";

type RegistroConciliacao = {
  id: number;
  data: string;
  formaPagamento: string;
  valorEsperado: number;
  valorRecebido: number;
};

const Conciliacao = () => {
  const [dataFiltro, setDataFiltro] = useState("");

  const registros: RegistroConciliacao[] = [
    { id: 1, data: "2025-05-02", formaPagamento: "PIX", valorEsperado: 367.98, valorRecebido: 362.98 },
    { id: 2, data: "2025-05-01", formaPagamento: "Dinheiro", valorEsperado: 273.76, valorRecebido: 263.76 },
    { id: 3, data: "2025-05-05", formaPagamento: "PIX", valorEsperado: 102.6, valorRecebido: 102.6 },
    { id: 4, data: "2025-05-01", formaPagamento: "PIX", valorEsperado: 416.9, valorRecebido: 411.9 },
    { id: 5, data: "2025-05-05", formaPagamento: "PIX", valorEsperado: 482.78, valorRecebido: 482.78 },
    { id: 6, data: "2025-05-02", formaPagamento: "Dinheiro", valorEsperado: 454.07, valorRecebido: 454.07 },
    { id: 7, data: "2025-05-05", formaPagamento: "Dinheiro", valorEsperado: 234.66, valorRecebido: 229.66 },
    { id: 8, data: "2025-05-02", formaPagamento: "Dinheiro", valorEsperado: 397.83, valorRecebido: 397.83 },
    { id: 9, data: "2025-05-03", formaPagamento: "Cartão", valorEsperado: 174.17, valorRecebido: 174.17 },
    { id: 10, data: "2025-05-03", formaPagamento: "PIX", valorEsperado: 169.07, valorRecebido: 169.07 },
    { id: 11, data: "2025-05-04", formaPagamento: "Cartão", valorEsperado: 385.22, valorRecebido: 375.22 },
    { id: 12, data: "2025-05-04", formaPagamento: "Dinheiro", valorEsperado: 138.21, valorRecebido: 138.21 },
    { id: 13, data: "2025-05-03", formaPagamento: "Cartão", valorEsperado: 162.85, valorRecebido: 162.85 },
    { id: 14, data: "2025-05-04", formaPagamento: "PIX", valorEsperado: 474.38, valorRecebido: 464.38 },
    { id: 15, data: "2025-05-01", formaPagamento: "Dinheiro", valorEsperado: 204.19, valorRecebido: 209.19 },
    { id: 16, data: "2025-05-02", formaPagamento: "Cartão", valorEsperado: 459.97, valorRecebido: 464.97 },
    { id: 17, data: "2025-05-01", formaPagamento: "Cartão", valorEsperado: 267.02, valorRecebido: 257.02 },
    { id: 18, data: "2025-05-04", formaPagamento: "PIX", valorEsperado: 301.92, valorRecebido: 296.92 },
    { id: 19, data: "2025-05-04", formaPagamento: "PIX", valorEsperado: 157.89, valorRecebido: 167.89 },
    { id: 20, data: "2025-05-05", formaPagamento: "Cartão", valorEsperado: 372.16, valorRecebido: 377.16 },
  ];
  

  const dadosFiltrados = dataFiltro
    ? registros.filter((r) => r.data === dataFiltro)
    : registros;

  const colunas: Coluna<RegistroConciliacao>[] = [
    { chave: "data", titulo: "Data", ordenavel: true },
    { chave: "formaPagamento", titulo: "Forma", ordenavel: true },
    {
      chave: "valorEsperado",
      titulo: "Esperado",
      render: (r) => `R$ ${r.valorEsperado.toFixed(2)}`,
    },
    {
      chave: "valorRecebido",
      titulo: "Recebido",
      render: (r) => `R$ ${r.valorRecebido.toFixed(2)}`,
    },
    {
      chave: "id", // usamos 'id' só como chave de coluna
      titulo: "Diferença",
      render: (r) => {
        const dif = r.valorRecebido - r.valorEsperado;
        return (
          <span className={Math.abs(dif) > 0.01 ? "text-red-600 font-semibold" : "text-green-600"}>
            R$ {dif.toFixed(2)}
          </span>
        );
      },
    },
    {
      chave: "id",
      titulo: "Status",
      render: (r) => {
        const dif = r.valorRecebido - r.valorEsperado;
        return (
          <span className={Math.abs(dif) > 0.01 ? "text-red-600" : "text-green-600"}>
            {Math.abs(dif) > 0.01 ? "❌" : "✔️"}
          </span>
        );
      },
    },
  ];

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto mt-5">
      <h1 className="text-2xl font-bold text-gray-800">🔍 Conciliação</h1>

      {/* Filtro de data */}
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium text-gray-700">Filtrar por data:</label>
        <input
          type="date"
          value={dataFiltro}
          onChange={(e) => setDataFiltro(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>

      {/* Tabela genérica reaproveitada */}
      <TabelaGenerica
        dados={dadosFiltrados}
        colunas={colunas}
        porPagina={15}
      />
    </div>
  );
};

export default Conciliacao;
