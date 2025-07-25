export function About() {
  return (
    <section id="about" className="px-10 py-20 flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <img src="/banner02.jpg" alt="banner02" className="border border-purple-400 rounded-xl" />
      </div>
      <div className="flex flex-col items-center md:items-start md:w-1/2">
        <h3 className="text-xl md:text-3xl font-bold mb-4">Somos pioneiros em AR e VR.</h3>
        <p className="text-gray-300 mb-4">Na VR-Labs, criamos experiências imersivas que unem tecnologia e diversão, levando você para além do imaginável.</p>
        <ul className="w-full md:w-fit space-y-2">
          <li>✔️ Jogos imersivos e interativos</li>
          <li>✔️ Equipe criativa e apaixonada</li>
          <li>✔️ Inovação constante no universo digital</li>
        </ul>
      </div>
    </section>
  );
}