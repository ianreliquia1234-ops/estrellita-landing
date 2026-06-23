'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { scrollToPlanos } from '@/lib/scroll-to'

interface ProofImage {
  id: number
  src: string
}

const proofs: ProofImage[] = [
  { id: 1, src: '/images/prova1.png' },
  { id: 2, src: '/images/prova2.png' },
  { id: 3, src: '/images/prova3.png' },
  { id: 4, src: '/images/prova4.png' },
  { id: 5, src: '/images/prova5.png' },
  { id: 6, src: '/images/prova6.png' },
  { id: 7, src: '/images/prova7.png' },
  { id: 8, src: '/images/prova8.png' },
]

export function ProofCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % proofs.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + proofs.length) % proofs.length)
    setAutoPlay(false)
  }

  // Autoplay logic
  useEffect(() => {
    if (!autoPlay) {
      return
    }

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % proofs.length)
    }, 6000)

    return () => clearTimeout(timer)
  }, [autoPlay, currentIndex])

  return (
    <section className="bg-white sec" aria-labelledby="proof-heading">
      <div className="inner-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="proof-heading"
            className="font-display font-extrabold mb-3"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: '#222222' }}
          >
            VEJA O QUE ESTÃO DIZENDO SOBRE O MATERIAL
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#5C4A3A' }}>
            Mães e professoras que buscavam um jeito mais leve, musical e prático de apresentar espanhol para as crianças.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="relative h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center"
              >
                <div className="w-full max-w-sm mx-auto relative h-96">
                  <Image
                    src={proofs[currentIndex].src}
                    alt={`Prova social ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                    loading="lazy"
                    quality={65}
                    priority={false}
                    unoptimized={false}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/3 -translate-x-12 md:-translate-x-16 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: '#FF6B35', color: 'white' }}
            aria-label="Anterior"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/3 translate-x-12 md:translate-x-16 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: '#FF6B35', color: 'white' }}
            aria-label="Próxima"
          >
            →
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {proofs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'w-8' : 'w-2'
              }`}
              style={{
                background: idx === currentIndex ? '#FF6B35' : '#E8E5DE'
              }}
              aria-label={`Ir para prova ${idx + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Button
            fullWidth
            className="max-w-sm"
            onClick={scrollToPlanos}
          >
            QUERO GARANTIR AS 50 CANÇÕES
          </Button>
        </div>
      </div>
    </section>
  )
}
