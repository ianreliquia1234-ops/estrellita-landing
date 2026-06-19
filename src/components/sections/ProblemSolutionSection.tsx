'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const items = [
  {
    problem: 'A criança perde o interesse quando o espanhol começa com atividades difíceis, cansativas ou sem graça.',
    solution: 'Começar com 50 canções infantis em espanhol, fáceis de acompanhar e pensadas para as primeiras práticas.',
  },
  {
    problem: 'Muitos materiais parecem complicados e não foram pensados para a rotina real de mães e professoras.',
    solution: 'Usar a tradução em português em cada página para a criança entender a letra sem ficar perdida.',
  },
  {
    problem: 'Mesmo querendo incentivar o espanhol, muita gente não sabe por onde começar nem como ensinar sem dominar o idioma.',
    solution: 'Reforçar o aprendizado com vocabulário ilustrado, imagens e significado das palavras mais importantes.',
  },
  {
    problem: 'Exercícios tradicionais podem travar a criança antes mesmo dela ganhar confiança para ouvir, cantar e repetir.',
    solution: 'Dar à criança a sensação de conseguir ouvir, cantar, entender e repetir palavras em espanhol desde o começo.',
  },
]

export function ProblemSolutionSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="sec" style={{ background: '#FFF8EB' }} aria-labelledby="ps-heading">
      <div className="inner-md">
        <h2
          id="ps-heading"
          className="font-display font-bold text-center mb-8"
          style={{ color: '#222222', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
        >
          Já pensou em ver a criança cantando em espanhol, entendendo a letra e repetindo as primeiras palavras sem medo de errar?
        </h2>

        {/* Imagem problema x solução */}
        <div className="mx-auto max-w-lg mb-10 flex justify-center">
          <Image
            src="/images/imagem problemaxsolucao.png"
            alt="Problema vs Solução"
            width={400}
            height={280}
            className="object-contain"
          />
        </div>

        {/* Duas colunas de texto simples */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Coluna Problema */}
          <div className="space-y-3">
            {items.map((item, i) => (
              <motion.div
                key={`problem-${i}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-3 text-base leading-snug"
              >
                <span className="text-base flex-shrink-0 font-bold" style={{ color: '#F05A3C' }}>❌</span>
                <p style={{ color: '#5C4A3A' }}>
                  {item.problem}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Coluna Solução */}
          <div className="space-y-3">
            {items.map((item, i) => (
              <motion.div
                key={`solution-${i}`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-3 text-base leading-snug"
              >
                <span className="text-base flex-shrink-0 font-bold" style={{ color: '#22B8A0' }}>✅</span>
                <p style={{ color: '#5C4A3A' }}>
                  {item.solution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
