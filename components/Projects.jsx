export function Projects() {
  return (
    <section id="lancamentos" className="px-10 py-20 flex flex-col items-center gap-10">
      <h3 className="text-xl md:text-3xl font-bold mb-4">Nossos Últimos Lançamentos</h3>
      <div className="w-full flex flex-col items-center gap-10">
        <div className="w-full md:w-[80%] flex flex-col bg-slate-950 hover:bg-purple-950 duration-700 p-4 border border-purple-400 rounded-lg gap-4">
          <h2 className="flex justify-center">VR Dodgebal</h2>
          <div className="flex flex-col md:flex-row justify-around gap-4 items-center">
            <img src="/dodgeball.gif" className="w-100 rounded-xl" alt="" />
            <p className="flex flex-col text-sm text-gray-300 gap-6">
              <span className="font-bold">Um jogo de realidade virtual competitivo em que o jogador participa de partidas de queimada em arenas futuristas.</span>
              <span>🟣 tracking de corpo e movimento para capturar a posição dos braços e mãos, permitindo lançar e desviar bolas em tempo real.</span>
              <span>🟣 física avançada para cálculo de trajetórias e velocidade, com feedback tátil no controle ao interceptar ou lançar a bola.</span>
              <span>🟣 suporte a partidas online sincronizadas via rede de baixa latência.</span>
            </p>

          </div>
        </div>
        <div className="w-full md:w-[80%] flex flex-col bg-slate-950 hover:bg-purple-950 duration-700 p-4 border border-purple-400 rounded-lg gap-4">
          <h2 className="flex justify-center">VR Battle Arena</h2>
          <div className="flex flex-col md:flex-row-reverse justify-around gap-4 items-center">
            <img src="/gorn.gif" className="w-100 rounded-xl" alt="" />
            <p className="flex flex-col text-sm text-gray-300 gap-6">
              <span className="font-bold">
                Um jogo de combate corpo a corpo em realidade virtual ambientado em um cenário medieval.
              </span>
              <span>
                🟣 simulação de colisões com mapeamento de ambiente e física ragdoll para inimigos.
              </span>
              <span>
                🟣 detecção precisa de golpes (corte, estocada, bloqueio) usando rastreamento de movimento 6DoF e shaders avançados para efeitos visuais.
              </span>
              <span>
                🟣 áudio espacial 3D e vibração nos controladores ao impactar armas ou escudos.
              </span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-[80%] flex flex-col bg-slate-950 hover:bg-purple-950 duration-700 p-4 border border-purple-400 rounded-lg gap-4">
          <h2 className="flex justify-center">VR Card Game</h2>
          <div className="flex flex-col md:flex-row justify-around gap-4 items-center">
            <img src="card.gif" className="w-100 rounded-xl" alt="" />
            <p className="flex flex-col text-sm text-gray-300 gap-6">
              <span className="font-bold">
                Um jogo de cartas interativo totalmente em realidade virtual, ambientado em uma taberna.
              </span>
              <span>
                🟣 manipulação de objetos em VR com física realista para cartas e fichas, permitindo pegá-las, arrastá-las e jogá-las na mesa.
              </span>
              <span>
                🟣 sistema de regras dinâmico implementado no servidor, permitindo modos competitivos ou cooperativos.
              </span>
              <span>
                🟣 avatares personalizados dos jogadores e chat por voz integrado para maior imersão.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}