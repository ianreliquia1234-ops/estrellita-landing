'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { pulseVariants, glowVariants } from '@/lib/animations'
import { useMetaPixel } from '@/hooks/useMetaPixel'

const basicFeatures = [
  '50 canções em espanhol',
  'Tradução em português',
  'PDF completo para imprimir',
  'Acesso imediato',
]

const fullFeatures = [
  '50 canções em espanhol',
  'Tradução em português',
  'Vocabulário visual ilustrado',
  'QR codes para ouvir as músicas',
  'Acesso imediato e vitalício',
]

const bonuses = [
  'Cartões de Vocabulário Visual para Recortar',
  'Guia Rápido para Usar as Canções',
  'Caderno de Atividades Extras',
  'Quadro de Progresso + Certificado Infantil',
]

export function PricingSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { trackEvent } = useMetaPixel()

  const handleCheckout = async (productId: string, value: number) => {
    await trackEvent('InitiateCheckout', {
      value,
      currency: 'BRL',
      content_name: productId === '7DsnOZ' ? 'Pacote Básico' : 'Pacote Completo',
      content_type: 'product',
    })
    // Pequeno delay para garantir que o evento foi disparado
    setTimeout(() => {
      window.location.href = `https://pay.lowify.com.br/checkout?product_id=${productId}`
    }, 100)
  }

  return (
    <section
      ref={ref}
      id="planos"
      className="bg-white sec"
      aria-labelledby="pricing-heading"
    >
      <div className="inner-md">
        {/* Mini banner de urgência */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-bold"
            style={{ background: '#FFF0E8', color: '#FF6B35' }}
          >
            ⏰ ÚLTIMA CHANCE — OFERTA TERMINA HOJE
          </div>
        </motion.div>

        {/* Header */}
        <div className="text-center mb-4">
          <h2
            id="pricing-heading"
            className="font-display font-extrabold mb-3"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: '#222222' }}
          >
            ESCOLHA A MELHOR FORMA DE COMEÇAR COM AS CANÇÕES EM ESPANHOL
          </h2>
        </div>

        {/* Subtítulo */}
        <div className="text-center mb-6">
          <p className="text-base leading-relaxed mx-auto" style={{ color: '#5C4A3A', maxWidth: '600px' }}>
            Você pode começar pelo básico ou aproveitar a opção mais completa, com materiais extras e melhor custo-benefício.
          </p>
        </div>

        {/* Prova social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium" style={{ color: '#FF6B35' }}>
            ↓ 92% das pessoas escolhem a opção mais completa ↓
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* PACOTE BÁSICO */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border p-8 flex flex-col"
            style={{ borderColor: '#E8E5DE', background: '#FFFEF7' }}
          >
            {/* Espaço para imagem */}
            <div className="w-full h-40 mb-6 rounded-lg flex items-center justify-center relative" style={{ borderColor: '#E8E5DE', borderWidth: '1px', background: '#FFFEF7' }}>
              <Image
                src="/images/PACOTE BÁSICO.png"
                alt="Pacote Básico"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="font-display font-bold text-xl mb-6" style={{ color: '#222222' }}>
              PACOTE BÁSICO
            </h3>

            {/* Features */}
            <ul className="space-y-3 mb-8 flex-grow">
              {basicFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: '#22B8A0' }}>✓</span>
                  <span className="text-sm" style={{ color: '#222222' }}>{f}</span>
                </li>
              ))}
            </ul>

            {/* Separador */}
            <div className="h-px mb-6" style={{ background: '#E8E5DE' }}></div>

            {/* Preço */}
            <div className="mb-6">
              <p className="font-display font-black text-4xl leading-none mb-2" style={{ color: '#222222' }}>
                R$ 10,00
              </p>
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => handleCheckout('7DsnOZ', 10.00)}
                className="w-full px-8 py-4 rounded-xl font-display font-black text-base transition-all duration-200 cursor-pointer border-2"
                style={{
                  borderColor: '#22B8A0',
                  color: '#22B8A0',
                  background: '#F5FFFE',
                  boxShadow: '0 2px 8px rgba(34, 184, 160, 0.12)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E8F5F1'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(34, 184, 160, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F5FFFE'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(34, 184, 160, 0.12)'
                }}
              >
                Quero Começar pelo Básico
              </button>
            </motion.div>

            {/* Super Oferta Card com Imagem e Animações */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 w-full relative"
            >
              {/* Setas animadas acima */}
              <div className="absolute -top-8 left-0 right-0 flex justify-between px-8 text-3xl font-bold pointer-events-none">
                <span className="arrow-bounce-down text-red-500">↓</span>
                <span className="arrow-bounce-down text-red-500" style={{ animationDelay: '0.3s' }}>↓</span>
              </div>

              {/* Card com pulse */}
              <div className="super-offer-pulse rounded-lg overflow-hidden">
                <Image
                  src="/images/card.webp"
                  alt="Ainda dá tempo de levar a melhor opção"
                  width={400}
                  height={120}
                  className="w-full h-auto object-contain"
                  priority={false}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* PACOTE COMPLETO — HERÓI */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-xl border-2 p-8 flex flex-col shadow-lg"
            style={{ borderColor: '#FF6B35', background: '#FFFEF7' }}
          >
            {/* Glow background animation */}
            <motion.div
              variants={glowVariants}
              animate="animate"
              className="absolute -inset-1 rounded-xl -z-10"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(34, 184, 160, 0.05) 100%)',
                filter: 'blur(8px)',
              }}
            />

            {/* Badge Mais Vendido */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white" style={{ background: '#FF6B35' }}>
                ⭐ MAIS VENDIDO
              </span>
            </div>

            {/* Espaço para imagem */}
            <div className="w-full h-48 mb-6 rounded-lg flex items-center justify-center mt-2 relative" style={{ borderColor: '#E8E5DE', borderWidth: '1px', background: '#FFFEF7' }}>
              <Image
                src="/images/PACOTE COMPLETO.png"
                alt="Pacote Completo"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="font-display font-bold text-xl mb-3" style={{ color: '#222222' }}>
              PACOTE COMPLETO
            </h3>

            {/* Destaque "4X mais" */}
            <div className="mb-6 px-3 py-2 rounded-lg text-sm font-bold" style={{ background: '#E8F5F1', color: '#22B8A0' }}>
              ⚡ 4X MAIS APRENDIZADO
            </div>

            {/* Benefícios principais */}
            <ul className="space-y-3 mb-6">
              {fullFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: '#22B8A0' }}>✓</span>
                  <span className="text-sm" style={{ color: '#222222' }}>{f}</span>
                </li>
              ))}
            </ul>

            {/* Bônus com destaque especial */}
            <div className="mb-6 pb-6" style={{ borderBottomColor: '#E8E5DE', borderBottomWidth: '1px' }}>
              <p className="text-xs font-bold mb-3" style={{ color: '#FF6B35' }}>+ 4 BÔNUS EXTRAS (GRÁTIS):</p>
              <ul className="space-y-2">
                {bonuses.map((bonus, i) => (
                  <li key={bonus} className="flex items-start gap-2 text-xs">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: '#FF6B35' }}>🎁</span>
                    <span>
                      <span className="font-bold" style={{ color: '#FF6B35' }}>Bônus #{i + 1}</span>
                      <span style={{ color: '#222222' }}> — {bonus}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Garantia */}
            <div className="mb-6 flex items-center gap-2 text-xs" style={{ color: '#22B8A0' }}>
              <span>✓</span>
              <span>Garantia de 7 dias</span>
            </div>

            {/* Separador */}
            <div className="h-px mb-6" style={{ background: '#E8E5DE' }}></div>

            {/* Preço */}
            <div className="mb-6">
              <p className="font-display font-black text-5xl leading-none mb-2" style={{ color: '#222222' }}>
                R$ 19,90
              </p>
            </div>

            {/* CTA Principal */}
            <motion.div variants={pulseVariants} animate="animate" className="mb-4">
              <Button
                fullWidth
                onClick={() => handleCheckout('z3bUGM', 19.90)}
              >
                🎵 Quero o Pacote Completo
              </Button>
            </motion.div>

            {/* Mini reforços de confiança */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="text-xs" style={{ color: '#22B8A0' }}>
                <div className="font-bold">🛡️</div>
                <div className="text-[10px]">Garantia</div>
              </div>
              <div className="text-xs" style={{ color: '#22B8A0' }}>
                <div className="font-bold">🔒</div>
                <div className="text-[10px]">Seguro</div>
              </div>
              <div className="text-xs" style={{ color: '#22B8A0' }}>
                <div className="font-bold">⚡</div>
                <div className="text-[10px]">Imediato</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Payment methods */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-10 text-xs font-medium"
          style={{ color: '#9C8070' }}
        >
          🔒 Pagamento 100% seguro • Pix • Cartão até 6x • Boleto
        </motion.p>
      </div>
    </section>
  )
}
