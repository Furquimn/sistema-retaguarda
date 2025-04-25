export const TotalVendas = () => {
    return (
        <div className="p-4 bg-white shadow-lg max-w-xs rounded-2xl">
            <div className="flex items-center">
                <img src="/icon/vendas.svg" alt="Vendas" className="w-5 h-5 bg-amber-800 rounded-2xl" />
                <p className="ml-2 text-gray-700 text-lg">Sales</p>
                
            </div>
            <div className="flex flex-col justify-start">
                <p className="mt-4 mb-4 text-gray-800 text-4xl font-bold text-left">39,500</p>
                
            </div>
        </div>
    );
};