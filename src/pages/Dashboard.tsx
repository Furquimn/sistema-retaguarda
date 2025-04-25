import { TotalVendas } from "../components/TotalVendas";

const Dashboard = () => {
  // Exemplo com data fixa só pra testar
  const fechamento = new Date();

  return (
    <div className="h-full w-full p-5">
      <h1 className="text-2xl font-bold mb-4">Dashboard Principal</h1>

      <p className="text-gray-600">
        Fechamento: {fechamento.toLocaleDateString('pt-BR')}
      </p>




      <section className="mt-10 flex flex-row justify-evenly gap-10">

        <div className="flex-1 max-w-sm">
          <TotalVendas />
        </div>


        <div className="flex-1 max-w-2xl">
          <table className="min-w-full table-auto border border-gray-300 mt-6 ">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Total por forma de pagamento</th>
                <th className="px-4 py-2 text-left"></th>
                <th className="px-4 py-2 text-left"></th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              <tr className="border-b">
                <td className="px-4 py-2">Cartão de Crédito</td>
                <td className="px-4 py-2">R$ 2.500,00</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Cartão de Débito</td>
                <td className="px-4 py-2">R$ 1.750,00</td>
                <td className="px-4 py-2"></td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Dinheiro</td>
                <td className="px-4 py-2">R$ 1.750,00</td>
                <td className="px-4 py-2"></td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Pix</td>
                <td className="px-4 py-2">R$ 1.750,00</td>
                <td className="px-4 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>


      </section>
    </div>
  );
};

export default Dashboard;
