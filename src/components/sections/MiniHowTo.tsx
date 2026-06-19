'use client'

import { scrollToPlanos } from '@/lib/scroll-to'

export function MiniHowTo() {
  return (
    <section className="py-8 px-4 text-center">
      <div className="max-w-xs mx-auto">
        {/* Text */}
        <p className="text-base leading-relaxed mb-6" style={{ color: '#2B2118' }}>
          Tudo já vem organizado para você{' '}
          <strong>baixar, imprimir e usar no aprendizado do espanhol</strong>{' '}
          sem perder tempo montando tudo do zero.
        </p>

        {/* Steps pill */}
        <div className="flex flex-col items-center gap-2 mb-7">
          <div className="inline-flex items-center gap-5">
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl">📥</span>
              <span className="text-xs font-bold" style={{ color: '#2B2118' }}>Baixa</span>
            </div>
            <span className="text-base font-bold" style={{ color: '#9C8070' }}>→</span>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl">🖨️</span>
              <span className="text-xs font-bold" style={{ color: '#2B2118' }}>Imprime</span>
            </div>
          </div>

          <span className="text-lg font-bold leading-none" style={{ color: '#9C8070' }}>↓</span>

          <p className="font-bold text-sm" style={{ color: '#FF6B35' }}>
            🎵 Ouve e aprende!
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToPlanos}
          className="flex items-center justify-center w-full font-black text-white text-lg rounded-xl"
          style={{ background: '#18A957', minHeight: 56, borderRadius: 12, cursor: 'pointer', border: 'none' }}
        >
          👉 QUERO AS 50 CANÇÕES
        </button>
      </div>
    </section>
  )
}
