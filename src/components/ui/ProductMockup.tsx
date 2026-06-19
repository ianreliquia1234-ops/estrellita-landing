import { cn } from '@/lib/utils'

interface ProductMockupProps {
  className?: string
  wide?: boolean
}

export function ProductMockup({ className, wide }: ProductMockupProps) {
  return (
    <div
      className={cn(
        'relative mx-auto w-full rounded-2xl bg-white shadow-hard border border-brand-border/50',
        'flex flex-col items-center justify-center gap-4 p-8',
        wide ? 'aspect-[16/7] max-w-[520px]' : 'aspect-[3/4] max-w-[420px]',
        className,
      )}
      aria-label="Imagem do produto — substitua quando disponível"
      role="img"
    >
      <span className="absolute top-4 left-5 text-3xl opacity-10 animate-float-note">♪</span>
      <span className="absolute top-8 right-6 text-2xl opacity-10 animate-float-note [animation-delay:2s]">♫</span>
      <span className="absolute bottom-8 left-6 text-2xl opacity-10 animate-float-note [animation-delay:4s]">♬</span>
      <span className="absolute bottom-4 right-5 text-xl opacity-10 animate-float-note [animation-delay:1s]">♩</span>

      <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-4xl">
        🎵
      </div>
      <div className="text-center">
        <p className="font-display font-bold text-brand-ink text-lg leading-tight">
          50 Canções Infantis em Espanhol
        </p>
        <p className="text-brand-ink-lt text-sm mt-1">PDF Completo · Pronto para Imprimir</p>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-brand-ink-lt/40 tracking-wider uppercase border border-brand-border px-3 py-1 rounded-full whitespace-nowrap">
        Coloque a imagem aqui
      </div>
    </div>
  )
}
