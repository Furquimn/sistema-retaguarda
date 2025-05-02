import { useState } from "react";
import { TabelaGenerica, Coluna } from "../components/TabelaGenerica";

type Conta = {
  id: number;
  tipo: "Pagar" | "Receber";
  descricao: string;
  valor: number;
  vencimento: string;
  status: "Pendente" | "Pago";
};

const hoje = new Date().toISOString().split("T")[0];

const dadosIniciais: Conta[] = [
  { id: 1, tipo: "Pagar", descricao: "Aluguel", valor: 800, vencimento: "2025-04-29", status: "Pendente" },
  { id: 2, tipo: "Receber", descricao: "Venda serviço", valor: 500, vencimento: "2025-05-04", status: "Pago" },
  { id: 3, tipo: "Pagar", descricao: "Luz", valor: 320.45, vencimento: "2025-04-30", status: "Pendente" },
  { id: 4, tipo: "Receber", descricao: "Cliente X", valor: 1200, vencimento: "2025-05-06", status: "Pendente" },
];

const Contas = () => {
  const [contas, setContas] = useState<Conta[]>(dadosIniciais);
  const [filtros, setFiltros] = useState({ tipo: "", status: "", vencida: false });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [novaConta, setNovaConta] = useState<Partial<Conta>>({
    tipo: "Pagar",
    descricao: "",
    valor: 0,
    vencimento: "",
    status: "Pendente",
  });

  const marcarComoPago = (id: number) => {
    setContas((prev) =>
      prev.map((conta) =>
        conta.id === id ? { ...conta, status: "Pago" } : conta
      )
    );
  };

  const contasFiltradas = contas.filter((c) => {
    const tipoOk = !filtros.tipo || c.tipo === filtros.tipo;
    const statusOk = !filtros.status || c.status === filtros.status;
    const vencidaOk = !filtros.vencida || (c.status === "Pendente" && c.vencimento < hoje);
    return tipoOk && statusOk && vencidaOk;
  });

  const colunas: Coluna<Conta>[] = [
    { chave: "tipo", titulo: "TIPO", ordenavel: true },
    { chave: "descricao", titulo: "DESCRIÇÃO", ordenavel: true },
    {
      chave: "valor",
      titulo: "VALOR",
      ordenavel: true,
      render: (conta) => `R$ ${conta.valor.toFixed(2)}`,
    },
    {
      chave: "vencimento",
      titulo: "VENCIMENTO",
      ordenavel: true,
      render: (conta) => new Date(conta.vencimento).toLocaleDateString("pt-BR"),
    },
    {
      chave: "status",
      titulo: "STATUS",
      ordenavel: true,
      render: (conta) => {
        const vencida = conta.status === "Pendente" && conta.vencimento < hoje;
        return conta.status === "Pago" ? (
          <span className="text-green-600">✔️ Pago</span>
        ) : (
          <>
            <span className="text-yellow-700">Pendente</span>
            {vencida && (
              <span className="ml-2 px-2 py-0.5 bg-red-600 text-white rounded text-xs">
                VENCIDA
              </span>
            )}
          </>
        );
      },
    },
    {
      chave: "id",
      titulo: "AÇÃO",
      render: (conta) =>
        conta.status === "Pendente" ? (
          <button
            onClick={() => marcarComoPago(conta.id)}
            className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded hover:bg-green-200"
          >
            Marcar como pago
          </button>
        ) : null,
    },
  ];

  return (
    <div className="p-6 mt-10 max-w-4xl mx-auto space-y-4 rounded-xl ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2 mb-10">
          📋 Contas a Pagar / Receber
        </h1>
      </div>

      {mostrarFormulario && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!novaConta.tipo || !novaConta.descricao || !novaConta.valor || !novaConta.vencimento)
              return;

            setContas((prev) => [
              ...prev,
              {
                id: prev.length + 1,
                tipo: novaConta.tipo as "Pagar" | "Receber",
                descricao: novaConta.descricao!,
                valor: Number(novaConta.valor),
                vencimento: novaConta.vencimento!,
                status: novaConta.status as "Pendente" | "Pago",
              },
            ]);
            setNovaConta({
              tipo: "Pagar",
              descricao: "",
              valor: 0,
              vencimento: "",
              status: "Pendente",
            });
            setMostrarFormulario(false);
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 border rounded"
        >
          <select
            value={novaConta.tipo}
            onChange={(e) => setNovaConta({ ...novaConta, tipo: e.target.value as "Pagar" | "Receber" })}
            className="border p-2 rounded"
          >
            <option value="Pagar">Pagar</option>
            <option value="Receber">Receber</option>
          </select>

          <input
            type="text"
            placeholder="Descrição"
            value={novaConta.descricao}
            onChange={(e) => setNovaConta({ ...novaConta, descricao: e.target.value })}
            className="border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Valor"
            value={novaConta.valor}
            onChange={(e) => setNovaConta({ ...novaConta, valor: parseFloat(e.target.value) })}
            className="border p-2 rounded"
          />

          <input
            type="date"
            value={novaConta.vencimento}
            onChange={(e) => setNovaConta({ ...novaConta, vencimento: e.target.value })}
            className="border p-2 rounded"
          />

          <select
            value={novaConta.status}
            onChange={(e) => setNovaConta({ ...novaConta, status: e.target.value as "Pendente" | "Pago" })}
            className="border p-2 rounded"
          >
            <option value="Pendente">Pendente</option>
            <option value="Pago">Pago</option>
          </select>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Salvar
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end mb-15">
        <select
          value={filtros.tipo}
          onChange={(e) => setFiltros({ ...filtros, tipo: e.target.value })}
          className="border rounded p-2"
        >
          <option value="">Todos os tipos</option>
          <option value="Pagar">Pagar</option>
          <option value="Receber">Receber</option>
        </select>

        <select
          value={filtros.status}
          onChange={(e) => setFiltros({ ...filtros, status: e.target.value })}
          className="border rounded p-2"
        >
          <option value="">Todos os status</option>
          <option value="Pendente">Pendente</option>
          <option value="Pago">Pago</option>
        </select>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={filtros.vencida}
            onChange={(e) => setFiltros({ ...filtros, vencida: e.target.checked })}
          />
          Mostrar vencidas
        </label>

        <button
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          className="border bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600 w-full"
        >
          {mostrarFormulario ? "Cancelar" : "Nova Conta"}
        </button>
      </div>

      <TabelaGenerica
        dados={contasFiltradas}
        colunas={colunas}
        porPagina={15}
        rowClass={(conta) => {
          const vencida = conta.status === "Pendente" && conta.vencimento < hoje;
          if (vencida) return "bg-red-100 border-l-4 border-red-500";
          return conta.tipo === "Pagar"
            ? "bg-red-50 text-red-700"
            : "bg-green-50 text-green-700";
        }}
      />
    </div>
  );
};

export default Contas;
