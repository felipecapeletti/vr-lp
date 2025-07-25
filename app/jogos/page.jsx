"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("@/components/ModelViewer"), { ssr: false });

export default function Games() {
  const games = [
    {
      id: 1,
      image: "/game1.png",
      model: "/game1.glb",
    },
    {
      id: 2,
      image: "/game2.png",
      model: "/game2.glb",
    },
    {
      id: 3,
      image: "/game3.png",
      model: "/game3.glb",
    },
  ];

  const [selectedgame, setSelectedgame] = useState(null);

  return (
    <main className="bg-[#0f0f1a] text-white min-h-[90vh] px-10 py-20 border-t border-purple-400">
      <h2 className="text-4xl font-bold text-center mb-12">Nossos Produtos</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-gray-900 border border-purple-400 rounded-lg overflow-hidden shadow-md shadow-purple-400 cursor-pointer hover:scale-105 duration-500"
            onClick={() => setSelectedgame(game)}
          >
            <img src={game.image} alt={game.name} className="w-full h-64 object-contain card-bg" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedgame && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-purple-400 rounded-lg shadow-md shadow-purple-400 w-[60vw] h-[90vh] relative">
            <div className="w-full flex flex-row justify-end p-2">
              <button
                onClick={() => setSelectedgame(null)}
                className="text-white bg-purple-600 hover:bg-purple-800 px-3 py-1 rounded-lg cursor-pointer transition duration-300"
              >
                Fechar
              </button>
            </div>
            <div className="px-4 pb-4 h-full flex flex-col justify-center">
              <div className="w-full h-full bg-black rounded-lg overflow-hidden card-bg">
                <ModelViewer src={selectedgame.model} />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}