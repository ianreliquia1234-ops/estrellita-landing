'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { scrollToPlanos } from '@/lib/scroll-to'

const items = [
  {
    image: '/images/50 canções em espanhol.jpg',
    title: '50 canções em espanhol',
    desc: 'Músicas infantis selecionadas para a criança cantar, repetir e se familiarizar com o espanhol sem pressão.',
  },
  {
    image: '/images/Tradução da letra.webp',
    title: 'Tradução em português',
    desc: 'A criança entende o que está cantando, e você consegue acompanhar mesmo sem falar espanhol.',
  },
  {
    image: '/images/Palavrinhas ilustradas.webp',
    title: 'Palavrinhas ilustradas',
    desc: 'Vocabulário com imagens para facilitar a memorização e deixar o aprendizado mais visual e divertido.',
  },
  {
    image: '/images/material-100-digital.webp',
    title: 'Material 100% digital',
    desc: 'Baixe na hora, imprima quando quiser e use em casa, na escola ou em atividades com música.',
  },
]

export function SimpleFormatSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="sec bg-white" aria-labelledby="format-heading">
      <div className="inner-md">
        <h2
          id="format-heading"
          className="font-display font-black text-display-md text-center mb-12"
          style={{ color: '#222222' }}
        >
          A FORMA MAIS SIMPLES DE APRESENTAR O{' '}
          <span style={{ color: '#F05A3C' }}>ESPANHOL</span> PARA A CRIANÇA
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border p-6 text-center"
              style={{ borderColor: '#E8E5DE', background: '#FFFEF7' }}
            >
              <div className="mb-4 flex justify-center h-24">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3
                className="font-display font-bold text-lg mb-3"
                style={{ color: '#F05A3C' }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5C4A3A' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="xl"
            fullWidth={false}
            onClick={scrollToPlanos}
          >
            QUERO O MATERIAL COMPLETO
          </Button>
        </div>
      </div>
    </section>
  )
}
