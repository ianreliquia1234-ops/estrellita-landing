'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          <a
            href="#oferta"
            className="flex items-center justify-center w-full bg-brand-green text-white font-display font-bold text-base py-4 px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
          >
            🎵 Quero as Canções — Acesso Imediato
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
