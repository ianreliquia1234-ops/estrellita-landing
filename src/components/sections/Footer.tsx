export function Footer() {
  return (
    <footer className="bg-[#080713] text-white/30 text-center py-8 px-4 text-xs leading-relaxed">
      <p className="mb-1">Copyright © 2026 | Todos os direitos reservados.</p>
      <p className="mb-1">
        Este site não é afiliado ao Facebook™, Instagram™, Google™ ou qualquer plataforma mencionada.
      </p>
      <p className="mb-4">
        Todos os direitos sobre a obra "50 Canções Infantis em Espanhol" são reservados ao produtor,
        nos termos da Lei nº 9.610/98 (Lei de Direitos Autorais).
      </p>
      <div className="flex justify-center gap-6">
        <a href="#" className="hover:text-white/60 transition-colors">Política de Privacidade</a>
        <a href="#" className="hover:text-white/60 transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-white/60 transition-colors">Contato</a>
      </div>
    </footer>
  )
}
