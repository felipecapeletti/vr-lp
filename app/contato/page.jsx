"use client";
import { useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // estados dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setShowAlert(true);

      // limpar campos
      setNome("");
      setEmail("");
      setMensagem("");

      // ocultar alerta depois de 3 segundos
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }, 2000);
  };

  return (
    <main className="relative w-full min-h-[90vh] flex flex-col justify-center items-center bg-[#0f0f1a] text-white border-t border-purple-400">
      {/* ALERTA ESTILIZADO */}
      {showAlert && (
        <div className="absolute top-5 z-50">
          <div className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg">
            ✅ Contato enviado com sucesso!
          </div>
        </div>
      )}

      <section
        id="contato"
        className="w-fit px-10 py-20 bg-gray-900 border border-purple-400 shadow-md shadow-purple-400 rounded-lg"
      >
        <h3 className="text-3xl font-bold mb-6 text-center">Entre em Contato</h3>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <textarea
            placeholder="Sua mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-900 duration-700 px-6 py-3 rounded-lg w-full cursor-pointer flex justify-center"
            disabled={isSending}
          >
            {isSending ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Enviando...
              </span>
            ) : (
              "Enviar Mensagem"
            )}
          </button>
        </form>
      </section>
    </main>
  );
}