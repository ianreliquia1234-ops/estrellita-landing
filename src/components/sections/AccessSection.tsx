'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { scrollToPlanos } from '@/lib/scroll-to'

const steps = [
  {
    icon: '🛒',
    title: 'Conclua sua compra',
    body: 'Após a confirmação do pagamento, seu pedido é liberado automaticamente.',
    checks: ['Pagamento 100% seguro', 'PIX, cartão ou boleto', 'Você recebe as instruções no e-mail'],
  },
  {
    icon: '📧',
    title: 'Receba tudo no e-mail e WhatsApp',
    body: 'O acesso é enviado direto para você, com tudo organizado para baixar sem complicação.',
    checks: ['Acesso imediato', 'Link enviado por e-mail', 'Materiais organizados por categoria'],
  },
  {
    icon: '📥',
    title: 'Baixe os arquivos',
    body: 'Você pode salvar o PDF no celular, tablet ou computador e usar quando quiser.',
    checks: ['Material em PDF', 'Arquivos prontos para imprimir', 'Acesso vitalício'],
  },
  {
    icon: '🖨️',
    title: 'Imprima e comece a usar',
    body: 'É só escolher a canção, imprimir a página e acompanhar com a criança.',
    checks: ['Use em casa ou na aula', 'Não precisa saber espanhol', 'Ideal para aprender cantando'],
  },
]

export function AccessSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="bg-trust-grad sec"
      aria-labelledby="access-heading"
    >
      <div className="inner">
        <div className="text-center mb-12">
          <h2
            id="access-heading"
            className="font-display font-black text-display-md mb-1"
            style={{ color: '#2B2118' }}
          >
            COMO VOCÊ RECEBE O MATERIAL
          </h2>
          <p className="font-display font-bold text-sm" style={{ color: '#9C8070' }}>
            (PASSO A PASSO)
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map(({ icon, title, body, checks }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-display font-bold text-base mb-2 leading-snug" style={{ color: '#2B2118' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#5C4A3A' }}>{body}</p>
              <ul className="space-y-1.5">
                {checks.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm" style={{ color: '#2B2118' }}>
                    <span className="check-icon shrink-0 mt-0.5">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="xl"
            fullWidth={false}
            onClick={scrollToPlanos}
          >
            QUERO RECEBER MEU ACESSO AGORA
          </Button>
        </div>
      </div>
    </section>
  )
}
