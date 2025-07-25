export function ContactForm() {
  return (
    <section id="contato" className="px-10 py-20 bg-gray-900 border-y border-purple-400">
      <h3 className="text-3xl font-bold mb-6 text-center">Entre em Contato</h3>
      <form className="max-w-2xl mx-auto space-y-4">
        <input type="text" placeholder="Seu nome" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none" />
        <input type="email" placeholder="Seu e-mail" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none" />
        <textarea placeholder="Sua mensagem" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"></textarea>
        <button className="bg-purple-600 hover:bg-purple-900 duration-700 px-6 py-3 rounded-lg w-full cursor-pointer">Enviar Mensagem</button>
      </form>
    </section>
  );
}