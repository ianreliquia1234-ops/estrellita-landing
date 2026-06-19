'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { staggerContainerVariants, staggerItemVariants } from '@/lib/animations'

const bonuses = [
  {
    n: '1',
    title: 'Guia Rápido para Usar as Canções',
    desc: 'Um passo a passo simples para você começar a usar o material sem complicação.',
    image: '/images/Guia Rápido para Usar as Canções.png',
    bullets: [
      'Como usar mesmo sem saber espanhol',
      'Ideias para casa, reforço e sala de aula',
      'Sequência simples: imprimir, ouvir e acompanhar'
    ],
    value: 'R$17'
  },
  {
    n: '2',
    title: 'Cartões de Vocabulário Visual para Recortar',
    desc: 'Cartõezinhos com palavras e imagens para revisar o vocabulário de forma leve e divertida.',
    image: '/images/Cartões de Vocabulário Visual para Recortar.png',
    bullets: [
      'Palavras do dia a dia com apoio visual',
      'Ótimo para memória e associação',
      'Perfeito para brincadeiras e revisão'
    ],
    value: 'R$19'
  },
  {
    n: '3',
    title: 'Caderno de Atividades Extras',
    desc: 'Atividades simples para a criança continuar aprendendo depois da música.',
    image: '/images/Caderno de Atividades Extras.png',
    bullets: [
      'Labirintos, ligar, colorir e caça-palavras',
      'Reforça vocabulário e atenção',
      'Pronto para imprimir e usar'
    ],
    value: 'R$27'
  },
  {
    n: '4',
    title: 'Quadro de Progresso + Certificado Infantil',
    desc: 'Um incentivo visual para acompanhar as músicas aprendidas e comemorar o progresso da criança.',
    image: '/images/Quadro de Progresso + Certificado Infantil.png',
    bullets: [
      'Quadro para marcar as canções aprendidas',
      'Certificado infantil para imprimir',
      'Ajuda a criança a se sentir motivada'
    ],
    value: 'R$12'
  }
]

export function BonusSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-white sec" aria-labelledby="bonus-heading">
      <div className="inner-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="bonus-heading"
            className="font-display font-extrabold mb-4"
            style={{ color: '#222222', fontSize: 'clamp(1.5rem, 4.5vw, 2.25rem)' }}
          >
            O PLANO COMPLETO ENTREGA AINDA MAIS
          </h2>
          <p className="text-base leading-relaxed mx-auto" style={{ color: '#5C4A3A', maxWidth: '600px' }}>
            Além das 50 canções, você também recebe 4 materiais extras para facilitar o uso em casa ou na sala de aula.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {bonuses.map((bonus) => (
            <motion.div
              key={bonus.n}
              variants={staggerItemVariants}
              className="border rounded-xl p-6 group hover:shadow-md transition-all duration-300"
              style={{ borderColor: '#E8E5DE', backgroundColor: '#FFFEF7' }}
            >
              {/* Selo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-xs font-black uppercase tracking-wide mb-4 inline-block px-3 py-1 rounded"
                style={{ background: '#FF6B35', color: '#fff' }}
              >
                Bônus {bonus.n}
              </motion.div>

              {/* Imagem do bônus */}
              <div className="w-full h-40 mb-4 rounded overflow-hidden relative">
                <Image
                  src={bonus.image}
                  alt={bonus.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Título */}
              <h3 className="font-display font-bold text-base mb-3 leading-snug" style={{ color: '#222222' }}>
                {bonus.title}
              </h3>

              {/* Descrição curta */}
              <p className="text-sm mb-4 leading-relaxed" style={{ color: '#5C4A3A' }}>
                {bonus.desc}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-6">
                {bonus.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs" style={{ color: '#5C4A3A' }}>
                    <span style={{ color: '#22B8A0' }} className="flex-shrink-0 font-bold">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Valor */}
              <div className="border-t pt-4" style={{ borderColor: '#E8E5DE' }}>
                <p className="text-xs text-center">
                  <span className="line-through" style={{ color: '#9C8070' }}>Valor: {bonus.value}</span>
                  {' '}
                  <motion.span
                    className="font-bold block"
                    style={{ color: '#22B8A0' }}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    → GRÁTIS
                  </motion.span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
