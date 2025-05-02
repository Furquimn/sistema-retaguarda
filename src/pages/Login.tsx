import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';


const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type='password'
            placeholder='Senha'
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            type='submit'
            className="w-full py-2 px-4 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Entrar
          </button>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;
