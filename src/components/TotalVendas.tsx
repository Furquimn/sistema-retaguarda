const TotalVendas = () => {
    return (
      <div className="text-center">
        <div className="flex justify-center items-center mb-4">
          <div className="bg-green-700 text-orange-600 rounded-full w-10 h-10 flex items-center justify-center text-xl">
            <img src="public/icon/vendas.svg" alt="Total Vendas" className="w-6 h-6" />
          </div>
        </div>
        <p className="text-md text-gray-500 font-medium">Vendas Totais</p>
        <h2 className="text-4xl font-bold text-gray-800">R$ 12.000</h2>
      </div>
    );
  };
  
  export { TotalVendas };
  