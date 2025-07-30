'use client'
import { useState } from "react";
import { List, X } from "react-bootstrap-icons";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col md:flex-row md:max-h-[10vh] justify-between items-center px-10 py-6 relative z-50">
      {/* Botão topo direito no mobile */}
      <div className="w-full md:w-[30%] flex justify-end order-1 md:order-3 mb-4 md:mb-0">
        <a
          className="w-full md:w-fit flex justify-center bg-purple-600 hover:bg-purple-900 text-purple-900 hover:text-white duration-700 px-4 py-2 rounded-lg"
          href="https://dimgrey-wren-943685.hostingersite.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir Portifólio
        </a>
      </div>

      {/* Logo */}
      <div className="w-full md:w-[30%] flex flex-row items-center justify-center md:justify-start order-2 md:order-1 mb-4 md:mb-0">
        <img className="w-20" src="/logo.png" alt="Logo" />
        <h1 className="text-white font-xl font-bold">VR-Labs</h1>
      </div>

      {/* Ícone do menu sanduíche no mobile */}
      <div className="md:hidden flex justify-center items-center w-full order-3">
        <button
          className="text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Nav Desktop */}
      <nav className="hidden md:flex w-full md:w-[30%] justify-center space-x-6 text-sm order-3 md:order-2">
        <a href="/#about" className="text-white hover:text-purple-400 hover:scale-105 duration-700">Sobre</a>
        <a href="/#servicos" className="text-white hover:text-purple-400 hover:scale-105 duration-700">Serviços</a>
        <a href="/#lancamentos" className="text-white hover:text-purple-400 hover:scale-105 duration-700">Lançamentos</a>
        <a href="/produtos" className="text-white hover:text-purple-400 hover:scale-105 duration-700">Produtos</a>
        <a href="/jogos" className="text-white hover:text-purple-400 hover:scale-105 duration-700">Jogos</a>
        <a href="/contato" className="text-white hover:text-purple-400 hover:scale-105 duration-700">Contato</a>
      </nav>

      {/* Nav Mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/70 h-[100vh] flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="/#about" onClick={() => setMenuOpen(false)} className="w-[60vw] flex items-center justify-center bg-black text-white hover:text-purple-400 border border-purple-400 rounded-full py-2 px-6">Sobre</a>
          <a href="/#servicos" onClick={() => setMenuOpen(false)} className="w-[60vw] flex items-center justify-center bg-black text-white hover:text-purple-400 border border-purple-400 rounded-full py-2 px-6">Serviços</a>
          <a href="/#lancamentos" onClick={() => setMenuOpen(false)} className="w-[60vw] flex items-center justify-center bg-black text-white hover:text-purple-400 border border-purple-400 rounded-full py-2 px-6">Lançamentos</a>
          <a href="/produtos" onClick={() => setMenuOpen(false)} className="w-[60vw] flex items-center justify-center bg-black text-white hover:text-purple-400 border border-purple-400 rounded-full py-2 px-6">Produtos</a>
          <a href="/jogos" onClick={() => setMenuOpen(false)} className="w-[60vw] flex items-center justify-center bg-black text-white hover:text-purple-400 border border-purple-400 rounded-full py-2 px-6">Jogos</a>
          <a href="/contato" onClick={() => setMenuOpen(false)} className="w-[60vw] flex items-center justify-center bg-black text-white hover:text-purple-400 border border-purple-400 rounded-full py-2 px-6">Contato</a>
        </div>
      )}
    </header>
  );
}