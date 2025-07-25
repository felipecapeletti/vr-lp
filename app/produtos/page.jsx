"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("@/components/ModelViewer"), { ssr: false });

export default function Products() {
  const products = [
    {
      id: 1,
      name: "VR Vision Pro X",
      description:
        "Um headset de realidade virtual de última geração, com rastreamento de movimento 6DoF e controles ergonômicos, ideal para jogos e aplicações profissionais.",
      image: "/product1.png",
      model: "/product1.glb",
    },
    {
      id: 2,
      name: "NeuroDive XR Helmet",
      description:
        "Capacete XR imersivo com bloqueio de interferências externas, projeção de 210° e sensores neurais integrados para experiências hiper-realistas.",
      image: "/product2.png",
      model: "/product2.glb",
    },
    {
      id: 3,
      name: "HoloEdge Elite",
      description:
        "Headset premium com resolução 8K, áudio espacial e mapeamento de ambiente avançado para experiências VR e XR profissionais.",
      image: "/product3.png",
      model: "/product3.glb",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main className="bg-[#0f0f1a] text-white min-h-[90vh] px-10 py-20 border-t border-purple-400">
      <h2 className="text-4xl font-bold text-center mb-12">Nossos Produtos</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 border border-purple-400 rounded-lg overflow-hidden shadow-md shadow-purple-400 cursor-pointer hover:scale-105 duration-500"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} className="w-full h-64 object-contain card-bg" />
            <div className="bg-slate-950 p-4 text-center">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-purple-400 rounded-lg shadow-md shadow-purple-400 max-w-3xl w-full relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-white bg-purple-600 hover:bg-purple-800 px-3 py-1 rounded-lg cursor-pointer transition duration-300"
            >
              Fechar
            </button>
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-4">{selectedProduct.name}</h3>
              <p className="text-gray-300 mb-6">{selectedProduct.description}</p>
              {/* Viewer 3D */}
              <div className="w-full h-[400px] bg-black rounded-lg overflow-hidden card-bg">
                <ModelViewer src={selectedProduct.model} />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}