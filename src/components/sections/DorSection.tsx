'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { slideLeftVariants, slideRightVariants } from '@/lib/animations'
import { scrollToPlanos } from '@/lib/scroll-to'

const pairs = [
  {
    prob: 'Espanhol na escola mas em casa o filho não pratica nada e esquece tudo.',
    sol:  '50 músicas prontas para praticar em casa — sem você precisar saber espanhol.',
  },
  {
    prob: 'Você colocou música no YouTube mas ele ficou entediado em 2 minutos sem entender nada.',
    sol:  'Canções selecionadas para crianças, com a letra impressa para acompanhar do lado.',
  },
  {
    prob: 'O material da escola é seco demais — filho não quer nem abrir quando chega em casa.',
    sol:  'Material visual, colorido e bonito que a criança pede para usar de novo.',
  },
  {
    prob: 'Você não sabe espanhol e fica perdida quando a professora manda dever.',
    sol:  'Tradução linha a linha em português — você entende junto com seu filho.',
  },
]

export function DorSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="sec" aria-labelledby="dor-heading">
      <div className="inner">
        <div className="text-center mb-10">
          <p className="sec-label mb-3" style={{ color: '#FF6B35' }}>Você já passou por isso?</p>
          <h2
            id="dor-heading"
            className="font-display font-black text-display-md"
            style={{ color: '#2B2118' }}
          >
            Se você reconheceu uma dessas situações,{' '}
            <em className="not-italic" style={{ color: '#FF6B35' }}>este material é para você</em>
          </h2>
        </div>

        {/* Header row — desktop only */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mb-4 pb-2 border-b" style={{ borderColor: '#E8E5DE' }}>
          <p className="font-display font-bold text-sm uppercase tracking-wide" style={{ color: '#9C8070' }}>
            Sem Estrellita
          </p>
          <p className="font-display font-bold text-sm uppercase tracking-wide" style={{ color: '#22B8A0' }}>
            Com Estrellita
          </p>
        </div>

        <div className="space-y-0 divide-y" style={{ borderColor: '#E8E5DE' }}>
          {pairs.map(({ prob, sol }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid md:grid-cols-2 gap-3 md:gap-8 py-5"
            >
              {/* Problem */}
              <motion.div
                variants={slideLeftVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.1}
                className="flex items-start gap-3"
              >
                <motion.span
                  className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ background: '#FEE2D5', color: '#CC3B00' }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                >
                  ✕
                </motion.span>
                <p className="text-sm leading-relaxed" style={{ color: '#5C4A3A' }}>{prob}</p>
              </motion.div>

              {/* Solution */}
              <motion.div
                variants={slideRightVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i * 0.1}
                className="flex items-start gap-3"
              >
                <motion.span
                  className="check-icon shrink-0 mt-0.5"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                >
                  ✓
                </motion.span>
                <p className="text-sm leading-relaxed font-medium" style={{ color: '#2B2118' }}>{sol}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-10 text-center">
          <button
            onClick={scrollToPlanos}
            className="inline-block font-display font-black text-base px-10 py-4 rounded-xl text-white"
            style={{ background: '#22B8A0', cursor: 'pointer', border: 'none' }}
          >
            Quero começar com as canções →
          </button>
        </div>
      </div>
    </section>
  )
}
