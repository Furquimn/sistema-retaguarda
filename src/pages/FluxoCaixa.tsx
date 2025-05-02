import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TabelaGenerica, Coluna } from "../components/TabelaGenerica";

type DiaCaixa = {
  data: string;
  entradas: number;
  saidas: number;
  saldoDia: number;
  saldoAcumulado: number;
};

const dadosSimulados: DiaCaixa[] = [
  { data: "01/05", entradas: 500, saidas: 300, saldoDia: 200, saldoAcumulado: 200 },
  { data: "02/05", entradas: 200, saidas: 250, saldoDia: -50, saldoAcumulado: 150 },
  { data: "03/05", entradas: 300, saidas: 100, saldoDia: 200, saldoAcumulado: 350 },
  { data: "04/05", entradas: 100, saidas: 150, saldoDia: -50, saldoAcumulado: 300 },
  { data: "05/05", entradas: 400, saidas: 100, saldoDia: 300, saldoAcumulado: 600 },
];

const FluxoCaixa = () => {
  const [periodo, setPeriodo] = useState("semana");

  const colunas: Coluna<DiaCaixa>[] = [
    { chave: "data", titulo: "Data", ordenavel: true },
    {
      chave: "entradas",
      titulo: "Entradas",
      ordenavel: true,
      render: (d) => `R$ ${d.entradas.toFixed(2)}`,
    },
    {
      chave: "saidas",
      titulo: "Saídas",
      ordenavel: true,
      render: (d) => `R$ ${d.saidas.toFixed(2)}`,
    },
    {
      chave: "saldoDia",
      titulo: "Saldo do Dia",
      ordenavel: true,
      render: (d) => (
        <span className={d.saldoDia >= 0 ? "text-green-600" : "text-red-600"}>
          {d.saldoDia >= 0 ? "+" : "-"}R$ {Math.abs(d.saldoDia).toFixed(2)}
        </span>
      ),
    },
    {
      chave: "saldoAcumulado",
      titulo: "Saldo Acumulado",
      ordenavel: true,
      render: (d) => (
        <strong className={d.saldoAcumulado >= 0 ? "text-green-700" : "text-red-700"}>
          R$ {d.saldoAcumulado.toFixed(2)}
        </strong>
      ),
    },
  ];

  const saldoFinal = dadosSimulados[dadosSimulados.length - 1].saldoAcumulado;

  return (
    <div className="p-6 space-y-6  mt-10 max-w-4xl mx-auto rounded-xl">
      <h1 className="text-2xl font-bold">💰 Fluxo de Caixa</h1>

      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-4">
  <div className="w-full md:w-1/3">
    <select
      value={periodo}
      onChange={(e) => setPeriodo(e.target.value)}
      className="border p-2 rounded w-full"
    >
      <option value="semana">Últimos 7 dias</option>
      <option value="mes">Mês atual</option>
    </select>
  </div>

  <div className="text-lg font-semibold text-right">
    Saldo Final:{" "}
    <span className={saldoFinal >= 0 ? "text-green-600" : "text-red-600"}>
      R$ {saldoFinal.toFixed(2)}
    </span>
  </div>
</div>


      {/* Gráfico */}
      <div className="bg-white rounded shadow p-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dadosSimulados}>
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="entradas" fill="#4ade80" name="Entradas" />
            <Bar dataKey="saidas" fill="#f87171" name="Saídas" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Tabela */}
      <TabelaGenerica
        dados={dadosSimulados}
        colunas={colunas}
        porPagina={10}
      />
    </div>
  );
};

export default FluxoCaixa;
