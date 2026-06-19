import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-inter)',   'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          orange:      '#E8620D',
          'orange-lt': '#F07838',
          'orange-pale':'#FEF0E7',
          gold:        '#C9A227',
          'gold-pale': '#FDF8EB',
          navy:        '#0F0E1A',
          'navy-mid':  '#1C1A2E',
          'navy-lt':   '#2D2B45',
          cream:       '#FAF7F2',
          'cream-mid': '#F0EAE0',
          ink:         '#1A1827',
          'ink-mid':   '#4A4760',
          'ink-lt':    '#7C7994',
          border:      '#E8E5DE',
          green:       '#0EA56B',
          'green-dk':  '#0B8A59',
        },
      },
      fontSize: {
        'display-xl': ['clamp(3rem,8vw,5.5rem)',  { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem,6vw,4rem)', { lineHeight: '1.1',  letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem,4vw,3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.25rem,3vw,2rem)', { lineHeight: '1.2',  letterSpacing: '-0.015em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft':   '0 2px 20px rgba(0,0,0,0.06)',
        'medium': '0 4px 32px rgba(0,0,0,0.10)',
        'hard':   '0 8px 48px rgba(0,0,0,0.15)',
        'cta':    '0 8px 32px rgba(14,165,107,0.35)',
        'cta-lg': '0 12px 48px rgba(14,165,107,0.45)',
      },
      animation: {
        'float-note':  'floatNote 8s ease-in-out infinite',
        'pulse-cta':   'pulseCta 2.4s ease-in-out infinite',
        'ticker':      'ticker 28s linear infinite',
      },
      keyframes: {
        floatNote: {
          '0%,100%': { transform: 'translateY(0) rotate(-6deg)' },
          '50%':     { transform: 'translateY(-16px) rotate(6deg)' },
        },
        pulseCta: {
          '0%,100%': { boxShadow: '0 8px 32px rgba(14,165,107,0.35)' },
          '50%':     { boxShadow: '0 8px 48px rgba(14,165,107,0.55)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
