'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  size?: 'md' | 'lg' | 'xl'
  className?: string
  fullWidth?: boolean
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'lg',
  className,
  fullWidth,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-display font-black rounded-xl cursor-pointer select-none transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 tracking-wide'

  const variants = {
    primary: 'bg-[#18A957] text-white hover:bg-[#15914A] active:scale-[0.98] shadow-[0_4px_16px_rgba(24,169,87,0.30)] hover:shadow-[0_6px_20px_rgba(24,169,87,0.40)]',
    ghost:   'bg-transparent text-brand-ink-mid border-2 border-brand-border hover:border-brand-ink-mid hover:text-brand-ink active:scale-[0.98]',
  }

  const sizes = {
    md: 'px-6 py-3 text-sm min-h-[44px]',
    lg: 'px-8 py-[13px] text-base min-h-[50px]',
    xl: 'px-10 py-[15px] text-lg min-h-[54px]',
  }

  const cls = cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)

  // Se houver onClick, usar button; se houver href, usar link
  if (onClick) {
    return (
      <motion.button
        onClick={onClick}
        className={cls}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {children}
      </motion.button>
    )
  }

  return (
    <motion.a
      href={href || '#oferta'}
      className={cls}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.a>
  )
}
