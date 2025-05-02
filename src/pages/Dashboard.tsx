import Avisos from "../components/Avisos";
import Table from "../components/Tabela";
import { TotalVendas } from "../components/TotalVendas";
import GraficoVendas from "../components/GraficoVendas";

const Dashboard = () => {
  const fechamento = new Date();

  return (
    <div className="h-full w-full p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Dashboard Principal</h1>
      <p className="text-gray-600 mb-6">
        Fechamento: {fechamento.toLocaleDateString("pt-BR")}
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6">
        {/* Total de Vendas */}
        <div className=" flex items-center justify-center rounded-xl bg-white p-4 shadow-md">
          <TotalVendas />
        </div>

        {/* Tabela por Forma de Pagamento */}
        <div className="rounded-xl bg-white p-4 shadow-md">
          <Table />
        </div>

        {/* Avisos / Alertas */}
        <div className="rounded-xl bg-white p-4 shadow-md">
          <Avisos />
        </div>

        {/* Gráfico de Vendas */}
        <div className="rounded-xl bg-white p-4 shadow-md">
          <GraficoVendas />
        </div>


      </section>
    </div>
  );
};

export default Dashboard;
