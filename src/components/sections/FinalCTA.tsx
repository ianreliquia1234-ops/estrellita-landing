'use client'

import { Button } from '@/components/ui/Button'
import { scrollToPlanos } from '@/lib/scroll-to'

export function FinalCTA() {
  return (
    <section
      className="relative bg-brand-navy overflow-hidden py-20 sm:py-28 px-4 text-center"
      aria-labelledby="final-cta-heading"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-brand-orange/10 blur-3xl" />
      </div>

      {/* floating notes */}
      <span aria-hidden className="absolute top-10 left-8 text-4xl text-brand-gold/15 select-none animate-float-note">♫</span>
      <span aria-hidden className="absolute bottom-10 right-10 text-3xl text-brand-gold/10 select-none animate-float-note [animation-delay:2s]">♪</span>

      <div className="relative inner-md">
        <p className="text-brand-gold font-display font-bold text-xs uppercase tracking-[0.14em] mb-4">
          Pronto para começar?
        </p>
        <h2
          id="final-cta-heading"
          className="font-display font-extrabold text-display-lg text-white mb-5 leading-tight"
        >
          Seu filho pode estar cantando em{' '}
          <em className="not-italic text-brand-gold">espanhol ainda hoje</em>
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Acesso imediato. Imprime hoje. Usa amanhã.
          Com garantia de 7 dias — sem nenhum risco para você.
        </p>
        <Button
          size="xl"
          onClick={scrollToPlanos}
        >
          🎵 Garantir Meu Acesso Agora
        </Button>
        <p className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-white/40 font-medium">
          <span>🔒 Pagamento 100% seguro</span>
          <span>·</span>
          <span>📧 Acesso imediato</span>
          <span>·</span>
          <span>✅ Garantia de 7 dias</span>
        </p>
      </div>
    </section>
  )
}
