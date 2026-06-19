'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
const steps = [
  { n: '01', icon: '🖨️', title: 'Imprima',          body: 'PDF colorido e bonito. Pronto em segundos na sua impressora doméstica.' },
  { n: '02', icon: '📱', title: 'Coloque a música',  body: 'QR code em cada canção. Toque no celular enquanto a letra está na mão.' },
  { n: '03', icon: '🎵', title: 'Cante junto',       body: 'Você tem a tradução em português. Sem precisar saber espanhol.' },
  { n: '04', icon: '🌟', title: 'Resultado real',    body: 'Em semanas, ele repete as músicas sozinho — em espanhol.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function MechanismSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="bg-brand-navy sec"
    >
      <ProductGallery3 />
    </section>
  )
}

function ProductGallery3() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<{ pause(): void; resume(): void; kill(): void } | null>(null)

  const pages = [
    { title: 'Los Pollitos Dicen',         imageSrc: '/images/los-pollitos.webp' },
    { title: 'Cumpleaños Feliz',           imageSrc: '/images/cumpleanos-feliz.webp' },
    { title: 'Arroz con Leche',            imageSrc: '/images/arroz-con-leche.webp' },
    { title: 'La Bamba',                   imageSrc: '/images/la-bamba.webp' },
    { title: 'El Patio de Mi Casa',        imageSrc: '/images/el-patio.webp' },
    { title: 'Pin Pon',                    imageSrc: '/images/pin-pon.webp' },
    { title: 'Cabeza, Hombros',            imageSrc: '/images/cabeza-hombros.webp' },
    { title: 'Las Mañanitas',              imageSrc: '/images/las-manianitas.webp' },
  ]

  useEffect(() => {
    const track = trackRef.current
    const section = sectionRef.current
    if (!track || !section) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const pause  = () => tweenRef.current?.pause()
    const resume = () => tweenRef.current?.resume()

    const init = async () => {
      const { gsap } = await import('gsap')
      const fullW = track.scrollWidth / 2
      tweenRef.current = gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -fullW,
          duration: 5,
          ease: 'none',
          repeat: -1
        }
      )
    }

    section.addEventListener('mouseenter', pause)
    section.addEventListener('mouseleave', resume)
    init()

    return () => {
      tweenRef.current?.kill()
      section.removeEventListener('mouseenter', pause)
      section.removeEventListener('mouseleave', resume)
    }
  }, [])

  const CARD_W = 280
  const GAP = 20

  return (
    <div
      ref={sectionRef}
      className="mb-12 overflow-hidden"
      style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}
    >
      <div
        ref={trackRef}
        className="flex will-change-transform"
        style={{ width: 'max-content', gap: GAP }}
      >
        {[...pages, ...pages].map((page, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-2xl overflow-hidden shadow-lg relative"
            style={{ width: CARD_W, height: 360 }}
          >
            <Image
              src={page.imageSrc}
              alt={page.title}
              fill
              className="object-cover object-top"
              sizes="220px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
