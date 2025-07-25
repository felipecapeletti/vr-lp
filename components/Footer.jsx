export function Footer() {
  const anoAtual = new Date().getFullYear();
  return (
    <footer className="text-sm px-10 py-6 text-center text-gray-200 border-t border-gray-700">
      © {anoAtual} VR-Labs. Todos os direitos reservados.
    </footer>
  );
}