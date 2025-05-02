import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

const data = [
  { dia: 'Seg', vendas: 1200 },
  { dia: 'Ter', vendas: 1900 },
  { dia: 'Qua', vendas: 800 },
  { dia: 'Qui', vendas: 1500 },
  { dia: 'Sex', vendas: 1700 },
  { dia: 'Sáb', vendas: 2100 },
  { dia: 'Dom', vendas: 900 },
];

const GraficoVendas = () => {
  return (
    <div className="w-full h-72 bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">📊 Vendas dos últimos 7 dias</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="vendas" fill="#4f46e5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoVendas;
