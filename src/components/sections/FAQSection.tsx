'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Preciso saber espanhol para usar?',
    a: 'Não. O material foi pensado justamente para mães e professoras que querem apresentar o espanhol de forma simples, mesmo sem dominar o idioma.\n\nAs canções vêm com tradução em português, vocabulário visual e páginas organizadas para você acompanhar junto com a criança.',
  },
  {
    q: 'O material é físico ou digital?',
    a: 'O material é digital, em PDF. Você recebe o acesso após a compra e pode baixar no celular, tablet ou computador.\n\nDepois é só imprimir as páginas que quiser usar.',
  },
  {
    q: 'Recebo o acesso na hora?',
    a: 'Sim. Após a confirmação do pagamento, o acesso é enviado automaticamente para o seu e-mail e/ou WhatsApp.\n\nNo PIX e cartão, normalmente a liberação é rápida. No boleto, pode levar mais tempo por causa da compensação bancária.',
  },
  {
    q: 'Para qual idade é indicado?',
    a: 'É indicado principalmente para crianças em fase de alfabetização e primeiros contatos com o idioma, geralmente entre 3 e 10 anos.\n\nTambém pode ser usado em casa, reforço escolar, atividades lúdicas e sala de aula.',
  },
  {
    q: 'Posso imprimir quantas vezes quiser?',
    a: 'Sim. Depois de baixar o PDF, você pode imprimir as páginas para usar com sua criança, seus alunos ou em atividades pedagógicas.\n\nO ideal é guardar o arquivo no celular ou computador para imprimir sempre que precisar.',
  },
  {
    q: 'As músicas têm tradução em português?',
    a: 'Sim. As canções vêm com apoio em português para facilitar o entendimento.\n\nAssim você consegue acompanhar a letra, entender o sentido da música e usar o material mesmo sem falar espanhol.',
  },
  {
    q: 'Tem áudio ou QR Code para ouvir as músicas?',
    a: 'Sim. O material conta com apoio para ouvir as canções e acompanhar junto com a página impressa.\n\nA ideia é a criança ouvir, cantar, repetir e aprender de um jeito mais natural.',
  },
  {
    q: 'Existe garantia?',
    a: 'Sim. Você tem 7 dias de garantia.\n\nSe o material não for o que esperava, é só solicitar o reembolso dentro do prazo.',
  },
]

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2"
        style={{ outlineColor: '#FF6B35' }}
      >
        <span className="font-display font-bold text-sm sm:text-base" style={{ color: '#2B2118' }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-xl leading-none font-light"
          style={{ color: '#FF6B35' }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed" style={{ color: '#5C4A3A' }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-trust-grad sec" aria-labelledby="faq-heading">
      <div className="inner-md">
        <div className="text-center mb-10">
          <p className="sec-label mb-3" style={{ color: '#22B8A0' }}>Dúvidas Frequentes</p>
          <h2
            id="faq-heading"
            className="font-display font-black text-display-md"
            style={{ color: '#2B2118' }}
          >
            Perguntas Frequentes
          </h2>
        </div>

        <div>
          {faqs.map(({ q, a }, i) => (
            <FAQItem
              key={q}
              q={q}
              a={a}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
