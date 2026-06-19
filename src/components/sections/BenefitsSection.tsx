'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  {
    title: 'Quer apresentar o espanhol de forma leve',
    desc: 'Ideal para mães e professoras que querem introduzir o espanhol com músicas simples, conhecidas e fáceis de acompanhar.'
  },
  {
    title: 'Procura canções fáceis de repetir',
    desc: 'As letras infantis deixam a prática mais natural, despertam interesse e aumentam a vontade de cantar de novo.'
  },
  {
    title: 'Deseja ver vocabulário aparecendo na prática',
    desc: 'A atividade foi pensada para crianças que ainda estão começando e precisam entender palavras dentro de letras reais.'
  },
  {
    title: 'Busca um material prático para casa ou aula',
    desc: 'Funciona como apoio para famílias, professoras e tutores que querem trabalhar escuta, leitura e vocabulário em espanhol.'
  }
]

export function BenefitsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="sec" aria-labelledby="benefits-heading">
      <div className="inner-md">
        <h3 className="text-center mb-8 font-display font-bold" style={{ color: '#FF6B35', fontSize: 'clamp(1.125rem, 4vw, 1.75rem)' }}>ESSE MATERIAL É IDEAL PARA VOCÊ QUE...</h3>

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3
                className="font-display font-bold text-lg mb-3 flex items-start gap-2"
                style={{ color: '#222222' }}
              >
                <span style={{ color: '#22B8A0' }} className="flex-shrink-0 mt-1">✓</span>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5C4A3A' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
