import { useEffect, useState } from "react";
import { TabelaGenerica, Coluna } from "../components/TabelaGenerica";

type Venda = {
  id: number;
  dataHora: string;
  operador: string;
  formaPagamento: string;
  valor: number;
  observacoes?: string | null;
};

const Vendas = () => {
  const [vendas, setVendas] = useState<Venda[]>([]);
  const [filtros, setFiltros] = useState({
    inicio: "",
    fim: "",
    formaPagamento: "",
    operador: "",
  });

  useEffect(() => {
    // Dados simulados
    setVendas([
      {
        id: 1,
        dataHora: "2025-05-01 14:20",
        operador: "João",
        formaPagamento: "Cartão de Crédito",
        valor: 250.0,
        observacoes: "",
      },
      {
        id: 2,
        dataHora: "2025-05-01 15:45",
        operador: "Maria",
        formaPagamento: "PIX",
        valor: 180.0,
        observacoes: "Pagamento parcial",
      },
      {
        id: 3,
        dataHora: "2025-05-01 17:10",
        operador: "Carlos",
        formaPagamento: "Dinheiro",
        valor: 95.5,
      },
      {
        id: 4,
        dataHora: "2025-05-02 09:00",
        operador: "João",
        formaPagamento: "PIX",
        valor: 320.0,
        observacoes: "Urgente",
      },
      {
        id: 5,
        dataHora: "2025-05-03 10:22",
        operador: "Ana",
        formaPagamento: "Dinheiro",
        valor: 145.8,
        observacoes: "",
      },
      {
        id: 6,
        dataHora: "2025-05-03 13:55",
        operador: "Pedro",
        formaPagamento: "PIX",
        valor: 298.4,
        observacoes: "Pagamento parcial",
      },
      {
        id: 7,
        dataHora: "2025-05-03 15:12",
        operador: "Carlos",
        formaPagamento: "Cartão de Crédito",
        valor: 405.7,
        observacoes: "",
      },
      {
        id: 8,
        dataHora: "2025-05-03 18:33",
        operador: "Maria",
        formaPagamento: "PIX",
        valor: 220.3,
        observacoes: null,
      },
      {
        id: 9,
        dataHora: "2025-05-03 21:14",
        operador: "João",
        formaPagamento: "Cartão de Crédito",
        valor: 312.0,
        observacoes: "Urgente",
      },
      {
        id: 10,
        dataHora: "2025-05-04 09:00",
        operador: "Pedro",
        formaPagamento: "Dinheiro",
        valor: 178.9,
        observacoes: "",
      },
      {
        id: 11,
        dataHora: "2025-05-04 11:24",
        operador: "Ana",
        formaPagamento: "PIX",
        valor: 492.6,
        observacoes: "Pagamento parcial",
      },
      {
        id: 12,
        dataHora: "2025-05-04 13:15",
        operador: "Carlos",
        formaPagamento: "Dinheiro",
        valor: 134.5,
        observacoes: null,
      },
      {
        id: 13,
        dataHora: "2025-05-04 15:45",
        operador: "Maria",
        formaPagamento: "Cartão de Crédito",
        valor: 285.9,
        observacoes: "",
      },
      {
        id: 14,
        dataHora: "2025-05-04 17:22",
        operador: "João",
        formaPagamento: "PIX",
        valor: 314.1,
        observacoes: "",
      },
      {
        id: 15,
        dataHora: "2025-05-04 19:39",
        operador: "Pedro",
        formaPagamento: "Dinheiro",
        valor: 187.6,
        observacoes: "Pagamento parcial",
      },
      {
        id: 16,
        dataHora: "2025-05-05 08:08",
        operador: "Ana",
        formaPagamento: "PIX",
        valor: 276.4,
        observacoes: "",
      },
      {
        id: 17,
        dataHora: "2025-05-05 10:42",
        operador: "Carlos",
        formaPagamento: "Cartão de Crédito",
        valor: 390.0,
        observacoes: "Urgente",
      },
      {
        id: 18,
        dataHora: "2025-05-05 12:33",
        operador: "Maria",
        formaPagamento: "PIX",
        valor: 210.7,
        observacoes: null,
      },
      {
        id: 19,
        dataHora: "2025-05-05 14:27",
        operador: "João",
        formaPagamento: "Dinheiro",
        valor: 157.2,
        observacoes: "",
      },
      {
        id: 20,
        dataHora: "2025-05-05 16:59",
        operador: "Pedro",
        formaPagamento: "PIX",
        valor: 490.8,
        observacoes: "Pagamento parcial",
      },
    ]);
  }, []);

  const aplicarFiltros = (): Venda[] => {
    return vendas.filter((venda) => {
      const data = new Date(venda.dataHora);
      const dentroPeriodo =
        (!filtros.inicio || new Date(filtros.inicio) <= data) &&
        (!filtros.fim || new Date(filtros.fim) >= data);
      const formaOk =
        !filtros.formaPagamento || venda.formaPagamento === filtros.formaPagamento;
      const operadorOk =
        !filtros.operador ||
        venda.operador.toLowerCase().includes(filtros.operador.toLowerCase());
      return dentroPeriodo && formaOk && operadorOk;
    });
  };

  const colunas: Coluna<Venda>[] = [
    {
      chave: "dataHora",
      titulo: "Data/Hora",
      ordenavel: true,
      render: (venda) =>
        `${new Date(venda.dataHora).toLocaleDateString("pt-BR")} ${venda.dataHora.slice(11)}`,
    },
    { chave: "operador", titulo: "Operador", ordenavel: true },
    { chave: "formaPagamento", titulo: "Forma", ordenavel: true },
    {
      chave: "valor",
      titulo: "Valor",
      ordenavel: true,
      render: (venda) => `R$ ${venda.valor.toFixed(2)}`,
    },
    {
      chave: "observacoes",
      titulo: "Obs.",
      render: (venda) => venda.observacoes || "-",
    },
  ];

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto mt-5">
      <h1 className="text-2xl font-bold text-gray-800">🧾 Consulta de Vendas</h1>

      {/* Filtros extras */}
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex flex-col">
          <label className="text-sm text-gray-700">De</label>
          <input
            type="date"
            value={filtros.inicio}
            onChange={(e) => setFiltros({ ...filtros, inicio: e.target.value })}
            className="border rounded p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">Até</label>
          <input
            type="date"
            value={filtros.fim}
            onChange={(e) => setFiltros({ ...filtros, fim: e.target.value })}
            className="border rounded p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">Forma</label>
          <select
            value={filtros.formaPagamento}
            onChange={(e) =>
              setFiltros({ ...filtros, formaPagamento: e.target.value })
            }
            className="border rounded p-2"
          >
            <option value="">Todas</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="PIX">PIX</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-700">Operador</label>
          <input
            type="text"
            value={filtros.operador}
            onChange={(e) => setFiltros({ ...filtros, operador: e.target.value })}
            className="border rounded p-2"
            placeholder="Nome ou ID"
          />
        </div>
      </div>

      {/* Tabela genérica com dados filtrados */}
      <TabelaGenerica dados={aplicarFiltros()} colunas={colunas} porPagina={15} />
    </div>
  );
};

export default Vendas;
