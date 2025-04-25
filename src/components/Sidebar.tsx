import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="h-screen w-[20%] bg-gray-800 text-white p-5">
      <h2 className="mb-6 text-xl font-bold">Menu</h2>
      <nav className="flex flex-col gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded transition-colors 
            ${isActive 
              ? 'bg-gray-700 text-white' 
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
        >
          <img src="/icon/dashboard.svg" alt="Dashboard" className="w-5 h-5" />
          Dashboard
        </NavLink>

        <NavLink
          to="/vendas"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded transition-colors 
            ${isActive
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
        >
          <img src="/icon/vendas.svg" alt="Vendas" className="w-5 h-5" />
          Vendas
        </NavLink>

        <NavLink
          to="/fechamentoCaixa"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded transition-colors 
          ${isActive
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
        >
          <img src="/icon/fechamentoCaixa.svg" alt="Fechamento de Caixa" className="w-5 h-5" />
          Fechamento de Caixa
        </NavLink>

        <NavLink
          to="/conciliacao"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded transition-colors 
          ${isActive
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
        >
          <img src="/icon/conciliacao.svg" alt="Conciliação" className="w-5 h-5" />
          Conciliação
        </NavLink>

        <NavLink
          to="/contas"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded transition-colors 
          ${isActive
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
        >
          <img src="/icon/contas.svg" alt="Contas" className="w-5 h-5" />
          Contas
        </NavLink>

        <NavLink
          to="/fluxoCaixa"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded transition-colors 
          ${isActive
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
        >
          <img src="/icon/fluxoCaixa.svg" alt="Fluxo de Caixa" className="w-5 h-5" />
          Fluxo de Caixa
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;
