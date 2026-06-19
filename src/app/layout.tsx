import type { Metadata } from 'next'
import Script from 'next/script'
import { Poppins, Inter, Archivo_Black } from 'next/font/google'
import { MetaPixelInit } from '@/components/MetaPixelInit'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  variable: '--font-archivo-black',
  weight: ['400'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Estrellita — 50 Canções Infantis em Espanhol Prontas para Imprimir',
  description:
    'Seu filho aprende espanhol cantando — sem você precisar saber o idioma. 50 canções com tradução em português, vocabulário visual e QR code. PDF pronto para imprimir. Acesso imediato.',
  keywords: ['canções espanhol infantil', 'espanhol para crianças', 'material imprimível espanhol', 'aprender espanhol cantando', 'estrellita'],
  openGraph: {
    title: 'Estrellita — 50 Canções Infantis em Espanhol',
    description: 'Seu filho aprende espanhol cantando — sem você precisar saber o idioma.',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable} ${archivoBlack.variable}`}>
      <head>
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
          strategy="afterInteractive"
        />
      </head>
      <body>
        <MetaPixelInit />
        {children}
      </body>
    </html>
  )
}
