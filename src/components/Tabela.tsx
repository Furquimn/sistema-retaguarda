const Table = () => {
    const data = [
      { tipo: 'Cartão de Crédito', valor: '2500,00' },
      { tipo: 'Cartão de Débito', valor: '1800,00' },
      { tipo: 'PIX', valor: '3200,00' },
    ];
  
    return (
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
          <thead className="bg-gray-100 text-left text-gray-700 uppercase font-medium">
            <tr>
              <th className="px-6 py-3">Tipo</th>
              <th className="px-6 py-3">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((forma, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">{forma.tipo}</td>
                <td className="px-6 py-4">{forma.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  