'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const items = [
  'O PDF principal com 50 canções infantis em espanhol',
  'Páginas organizadas e prontas para imprimir em casa ou usar na aula',
  'Tradução em português em cada música, para você entender junto com a criança',
  'Vocabulário visual com as palavras mais importantes de cada canção',
  'Atividades simples para a criança cantar, observar e aprender brincando',
  'QR Code para ouvir a música e acompanhar a página ao mesmo tempo',
  'Acesso imediato para usar no celular, tablet ou computador'
]

export function ProofSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="bg-white sec"
      aria-labelledby="what-heading"
    >
      <div className="inner-md">
        <div className="text-center mb-8">
          <h3 className="font-display font-bold mb-4" style={{ color: '#FF6B35', fontSize: 'clamp(0.875rem, 3vw, 1.25rem)' }}>ACESSO IMEDIATO</h3>
          <h2
            id="what-heading"
            className="font-display font-extrabold mb-10"
            style={{ color: '#222222', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}
          >
            Tudo o que você{' '}
            <em className="not-italic" style={{ color: '#FF6B35' }}>vai receber</em>
          </h2>
        </div>

        {/* Mockup do produto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl mb-10 flex justify-center"
        >
          <Image
            src="/images/Tudo o que você vai receber.png"
            alt="Tudo o que você vai receber"
            width={600}
            height={400}
            className="object-contain rounded-lg"
          />
        </motion.div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-50 rounded-lg p-8 mb-6 border border-gray-200"
        >
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span style={{ color: '#22B8A0' }} className="flex-shrink-0 font-bold">✅</span>
                <span style={{ color: '#222222' }} className="text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm"
          style={{ color: '#5C4A3A' }}
        >
          Tudo liberado na hora — direto no seu WhatsApp e no seu e-mail.
        </motion.p>
      </div>
    </section>
  )
}
