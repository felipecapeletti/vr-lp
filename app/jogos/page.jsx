"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("@/components/ModelViewer"), { ssr: false });

export default function Games() {
  const games = [
    {
      id: 1,
      image: "/games/game1.png",
      capa: "/games/capa-dodge.png",
      name: "Dodge",
      description:"Entre em uma arena futurista onde velocidade, reflexos e estratégia são tudo! Em VR DodgeBall, você enfrentará jogadores de elite em partidas alucinantes com bolas de energia, escudos holográficos e ambientes cheios de obstáculos dinâmicos. Desvie, rebata e ataque com estilo enquanto sobe no ranking mundial da liga VR.",
      price: "R$ 199,99",
    },
    {
      id: 2,
      image: "/games/game2.png",
      capa: "/games/capa-gorn.png",
      name: "Battle Arena",
      description: "Torne-se um gladiador implacável na era da realidade virtual. VR BattleArena transporta você para arenas colossais inspiradas na Roma Antiga, onde guerreiros de diferentes eras e culturas lutam pela glória. Empunhe espadas, lanças e escudos, execute combos brutais e conquiste o respeito da multidão. O sangue e a honra são reais — a dor, virtual.",
      price: "R$ 249,99",
    },
    {
      id: 3,
      image: "/games/game3.png",
      capa: "/games/capa-card.png",
      name: "Card Game",
      description: "Mergulhe em um mundo onde cartas são portais para criaturas mágicas e feitiços devastadores! Em VR CardGame, cada partida é uma batalha estratégica em arenas flutuantes, com hologramas vivos e efeitos de tirar o fôlego. Construa seu baralho, convoque monstros lendários e derrote adversários em duelos cheios de ação e tática.",
      price: "R$ 149,99",
    },
  ];

  const [selectedgame, setSelectedgame] = useState(null);

  return (
    <main className="bg-[#0f0f1a] text-white min-h-[90vh] px-10 py-20 border-t border-purple-400">
      <h2 className="text-4xl font-bold text-center mb-12">Nossos Jogos</h2>
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-around items-center">
          {games.map((game) => (
            <div
              key={game.id}
              className="w-[80%] md:w-[30%] h-fit bg-gray-900 border border-purple-400 rounded-lg overflow-hidden shadow-md shadow-purple-400 cursor-pointer hover:scale-105 duration-500"
              onClick={() => setSelectedgame(game)}
            >
              <img src={game.image} alt={game.name} className="w-full h-fit object-contain card-bg" />
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center my-12">Jogabilidade Imersiva</h2>

      {/* Modal */}
      {selectedgame && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="w-[60vw] h-fit relative bg-gray-900 border border-purple-400 rounded-lg shadow-md shadow-purple-400 animate-technoIn">
            <div className="w-full flex flex-row justify-end p-2">
              <button
                onClick={() => setSelectedgame(null)}
                className="text-white bg-purple-600 hover:bg-purple-800 px-3 py-1 rounded-lg cursor-pointer transition duration-300"
              >
                Fechar
              </button>
            </div>
            <div className="w-full h-full flex flex-col md:flex-row items-start justify-center p-4">
              <section className="w-full md:w-1/2 h-full flex flex-col items-center justify-start">
                <img
                  className="w-1/2 h-fit rounded-lg"  
                  src={selectedgame.capa} alt={selectedgame.name}
                />
                <h3 className="text-4xl font-bold text-center text-purple-400 my-4">
                  {selectedgame.price}
                </h3>
              </section>
              <section className="w-full md:w-1/2 h-full flex flex-col items-start justify-center">
                <h3 className="text-2xl font-bold text-center my-4">
                  {selectedgame.name}
                </h3>
                <p className="w-full md:w-3/4 text-lg text-gray-300 text-justify">
                  {selectedgame.description}
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}