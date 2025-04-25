import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Vendas from './pages/Vendas';
import Contas from './pages/Contas';
import FechamentoCaixa from './pages/FechamentoCaixa';
import FluxoCaixa from './pages/FluxoCaixa';
import Conciliacao from './pages/Conciliacao';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route
            path="/"
            element={
              <PrivateRoute>
                <WithSidebar>
                  <Dashboard />
                </WithSidebar>
              </PrivateRoute>
            }
          />
          <Route
            path="/vendas"
            element={
              <PrivateRoute>
                <WithSidebar>
                  <Vendas />
                </WithSidebar>
              </PrivateRoute>
            }
          />
          <Route
            path="/contas"
            element={
              <PrivateRoute>
                <WithSidebar>
                  <Contas />
                </WithSidebar>
              </PrivateRoute>
            }
          />
          <Route
            path="/fechamentocaixa"
            element={
              <PrivateRoute>
                <WithSidebar>
                  <FechamentoCaixa />
                </WithSidebar>
              </PrivateRoute>
            }
          />
          <Route
            path="/fluxocaixa"
            element={
              <PrivateRoute>
                <WithSidebar>
                  <FluxoCaixa />
                </WithSidebar>
              </PrivateRoute>
            }
          />
          <Route
            path="/conciliacao"
            element={
              <PrivateRoute>
                <WithSidebar>
                  <Conciliacao />
                </WithSidebar>
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

//componente interno: Sidebar + conteúdo
const WithSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 bg-gray-200 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};


export default App;
