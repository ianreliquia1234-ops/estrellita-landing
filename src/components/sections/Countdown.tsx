'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TimeLeft { m: number; s: number }

function pad(n: number) { return String(n).padStart(2, '0') }

function FlipDigit({ value }: { value: string }) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={value}
        initial={{ y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 14, opacity: 0 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  )
}

function DigitPair({ value, label }: { value: number; label: string }) {
  const str = pad(value)
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex gap-1">
        {[str[0], str[1]].map((d, i) => (
          <div
            key={i}
            className="relative w-9 h-12 sm:w-11 sm:h-14 rounded-lg overflow-hidden font-display font-black text-2xl sm:text-3xl text-white"
            style={{ background: 'rgba(0,0,0,0.25)' }}
          >
            <FlipDigit value={d} />
            <span className="absolute inset-x-0 top-1/2 h-px bg-black/20 z-10" />
          </div>
        ))}
      </div>
      <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/70">{label}</span>
    </div>
  )
}

export function Countdown() {
  const [time, setTime] = useState<TimeLeft>({ m: 10, s: 0 })
  const endRef = useRef<number>(0)

  useEffect(() => {
    const KEY = 'cancoes_end_v2'
    const MINS = 10
    const stored = sessionStorage.getItem(KEY)
    let end = stored ? parseInt(stored) : 0

    if (!end || Date.now() > end) {
      end = Date.now() + MINS * 60_000
      sessionStorage.setItem(KEY, String(end))
    }
    endRef.current = end

    const tick = () => {
      const ms = Math.max(0, endRef.current - Date.now())
      setTime({
        m: Math.floor((ms % 3_600_000) / 60_000),
        s: Math.floor((ms % 60_000) / 1_000),
      })
    }

    tick()
    const id = setInterval(tick, 1_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="py-3 px-4"
      style={{ background: '#FF6B35' }}
    >
      <div className="inner flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-white/90 text-center sm:text-left leading-snug max-w-xs sm:max-w-none">
          ⏰ Aproveite a condição especial para começar no espanhol brincando
        </p>
        <div className="flex items-end gap-2">
          <DigitPair value={time.m} label="Min" />
          <span className="text-2xl font-black text-white/40 mb-4">:</span>
          <DigitPair value={time.s} label="Seg" />
        </div>
      </div>
    </div>
  )
}
