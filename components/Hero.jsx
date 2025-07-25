export function Hero() {
  return (
    <section  className="relative text-center border-y border-purple-600">
      <div className="absolute w-full h-full flex flex-col items-center pt-4">
        <h2 className="text-4xl md:text-6xl font-bold rounded-lg p-2">Experiências além do real</h2>
        <p className="text-gray-300 font-bold rounded-b-lg max-w-2xl mx-auto p-2">
          Nós criamos jogos e experiências em realidade aumentada e virtual que transformam seu mundo em diversão pura.
        </p>
      </div>
      <img 
        src="/banner01.gif" 
        alt="Animated Banner" 
        className="w-full rounded-lg"  
      />
    </section>
  );
}