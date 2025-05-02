type Aviso = {
  id: number;
  tipo: 'alerta' | 'pendente';
  mensagem: string;
  onClick?: () => void;
};

const dataAtual = new Date();

const avisos: Aviso[] = [
  { id: 1, tipo: 'alerta', mensagem: 'Diferença entre vendas e recebimentos no caixa' },
  { id: 2, tipo: 'pendente', mensagem: `Fechamento do dia ${dataAtual.toLocaleDateString("pt-BR")} está pendente` },
];

const Avisos = () => {
  return (
    <div className="space-y-3">
      {avisos.map((aviso) => (
        <div
          key={aviso.id}
          onClick={aviso.onClick}
          className={`cursor-pointer rounded-lg border-l-4 p-4 shadow transition hover:scale-[1.02]
            ${
              aviso.tipo === 'alerta'
                ? 'border-red-500 bg-red-50 text-red-800'
                : 'border-yellow-500 bg-yellow-50 text-yellow-800'
            }`}
        >
          <div className="flex items-center gap-2 font-medium">
            {aviso.tipo === 'alerta' && <span className="text-lg">🚨</span>}
            {aviso.tipo === 'pendente' && <span className="text-lg">🕓</span>}
            <p>{aviso.mensagem}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Avisos;
