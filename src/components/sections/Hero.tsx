'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { fadeUpVariants, scaleInVariants, pulseVariants } from '@/lib/animations'
import { scrollToPlanos } from '@/lib/scroll-to'

export function Hero() {
  return (
    <section
      className="bg-hero overflow-hidden py-4 sm:py-6 px-4"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-3xl mx-auto">
        {/* Brand — Estrellita */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="flex items-center justify-center gap-2 mb-4 sm:mb-5"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl sm:text-3xl"
          >
            ✨
          </motion.span>
          <p
            className="font-display font-bold"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              color: '#F05A3C',
              letterSpacing: '0.05em',
            }}
          >
            Estrellita
          </p>
          <motion.span
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl sm:text-3xl"
          >
            ✨
          </motion.span>
        </motion.div>

        {/* Headline — Refinada e comercial */}
        <motion.h1
          id="hero-heading"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto text-center mb-6 sm:mb-7"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(1.125rem, 4vw, 2.5rem)',
            lineHeight: '1.2',
            letterSpacing: '-0.015em',
            fontWeight: 600,
            color: '#222222',
            maxWidth: '90vw',
          }}
        >
          50 Canções Infantis Para Crianças Aprenderem{' '}
          <motion.span
            style={{ color: '#F05A3C', fontWeight: 700 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            Espanhol
          </motion.span>
          {' '}De Forma{' '}
          <motion.span
            style={{ color: '#F05A3C', fontWeight: 800 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
          >
            Fácil
          </motion.span>
          {' '}e{' '}
          <motion.span
            style={{ color: '#F05A3C', fontWeight: 800 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1.1 }}
          >
            Divertida
          </motion.span>
        </motion.h1>

        {/* Mockup — Maior e dominante */}
        <motion.div
          variants={scaleInVariants}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mb-5 sm:mb-6 mx-auto"
          style={{ maxWidth: 'clamp(280px, 90vw, 480px)' }}
        >
          <div>
            <Image
              src="/images/mockup-50-cancoes-espanhol.png"
              alt="50 Canções Infantis em Espanhol"
              width={480}
              height={600}
              className="w-full h-auto object-contain drop-shadow-lg"
              priority
              quality={85}
              sizes="(max-width: 640px) 90vw, (max-width: 1200px) 70vw, 480px"
            />
          </div>
        </motion.div>

        {/* Bullets — Prova social compacta */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="space-y-1.5"
          style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}
        >
          {[
            '✅ Cânticos em espanhol com tradução em português',
            '✅ Atividades prontas para imprimir',
            '✅ Vocabulário visual para entender a letra',
            '✅ Ideal para mães e professoras',
          ].map((bullet, i) => (
            <p
              key={i}
              className="text-xs sm:text-sm text-center"
              style={{ color: '#222222', lineHeight: '1.4' }}
            >
              {bullet}
            </p>
          ))}
        </motion.div>

        {/* CTA — Próximo e direto */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="text-center"
        >
          <motion.div variants={pulseVariants} animate="animate">
            <Button
              size="xl"
              fullWidth={false}
              onClick={scrollToPlanos}
            >
              QUERO AS 50 CANÇÕES
            </Button>
          </motion.div>

          {/* Info linha — Compacta */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-2 text-xs font-medium"
            style={{ color: '#9C8070' }}
          >
            🔒 100% Seguro · 📧 Acesso Imediato · ✅ Garantia 7 dias
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
