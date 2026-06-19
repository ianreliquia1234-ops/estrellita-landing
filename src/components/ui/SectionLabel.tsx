import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  variant?: 'orange' | 'gold' | 'white'
  className?: string
}

export function SectionLabel({ children, variant = 'orange', className }: SectionLabelProps) {
  const variants = {
    orange: 'text-brand-orange',
    gold:   'text-brand-gold',
    white:  'text-white/60',
  }

  return (
    <p
      className={cn(
        'font-display text-xs font-bold tracking-[0.12em] uppercase mb-3',
        variants[variant],
        className,
      )}
    >
      {children}
    </p>
  )
}
