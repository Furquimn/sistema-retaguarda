import { useState } from "react";

const FechamentoCaixa = () => {
  const [saldoInicial, setSaldoInicial] = useState("");
  const [dinheiro, setDinheiro] = useState("");
  const [cartao, setCartao] = useState("");
  const [pix, setPix] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);

  // Valor simulado de vendas do dia
  const totalVendas = 1200.0;

  const fecharCaixa = () => {
    const camposPreenchidos = [saldoInicial, dinheiro, cartao, pix].every((v) => v !== "");

    if (!camposPreenchidos) {
      setMensagem("⚠️ Preencha todos os campos obrigatórios.");
      setErro(true);
      return;
    }

    const saldo = parseFloat(saldoInicial);
    const recebido = parseFloat(dinheiro) + parseFloat(cartao) + parseFloat(pix);
    const esperado = saldo + totalVendas;
    const diferenca = recebido - esperado;

    if (Math.abs(diferenca) < 0.01) {
      setMensagem("✅ Fechamento OK. Valores conferem.");
      setErro(false);
    } else {
      setMensagem(`❌ Diferença encontrada: R$ ${diferenca.toFixed(2)}`);
      setErro(true);
    }
  };

  return (
    <div className="p-6 mt-25 max-w-2xl mx-auto space-y-4 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-10">💼 Fechamento de Caixa</h1>

      <div className="space-y-3">
        {/* Saldo Inicial */}
        <div>
          <label className="block text-sm font-medium">Saldo Inicial (R$)</label>
          <input
            type="number"
            value={saldoInicial}
            onChange={(e) => setSaldoInicial(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Total de Vendas (automático, bloqueado) */}
        <div>
          <label className="block text-sm font-medium">Total de Vendas do Dia</label>
          <p className="bg-gray-100 rounded p-2 text-gray-800 font-medium">
            R$ {totalVendas.toFixed(2)}
          </p>
        </div>

        {/* Entradas reais */}
        <div>
          <label className="block text-sm font-medium">Dinheiro (R$)</label>
          <input
            type="number"
            value={dinheiro}
            onChange={(e) => setDinheiro(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Cartão (R$)</label>
          <input
            type="number"
            value={cartao}
            onChange={(e) => setCartao(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Pix (R$)</label>
          <input
            type="number"
            value={pix}
            onChange={(e) => setPix(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Observações */}
        <div>
          <label className="block text-sm font-medium">Observações</label>
          <textarea
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
            className="w-full border rounded p-2"
            rows={3}
            placeholder="Ex: sangria, troco extra, erro no lançamento..."
          />
        </div>
      </div>

      {/* Botão */}
      <button
        onClick={fecharCaixa}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
      >
        Fechar Caixa
      </button>

      {/* Mensagem final */}
      {mensagem && (
        <div
          className={`p-3 rounded mt-4 font-medium ${
            erro ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
          }`}
        >
          {mensagem}
        </div>
      )}


    </div>
    
  );
};

export default FechamentoCaixa;
