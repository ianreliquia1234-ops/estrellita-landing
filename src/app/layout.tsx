import type { Metadata } from 'next'
import Script from 'next/script'
import { Poppins, Inter, Archivo_Black } from 'next/font/google'
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
        {/* Meta Pixel - Setup function (must be before fbevents.js loads) */}
        <Script
          id="meta-pixel-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');`,
          }}
        />

        {/* Meta Pixel - Initialize and track PageView */}
        <Script
          id="meta-pixel-track"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
fbq('track', 'PageView');`,
          }}
        />

        {/* Meta Pixel - NoScript fallback */}
        <noscript dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1" />`,
        }} />

        {/* UTMify - loads after Pixel is initialized */}
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
        {children}
      </body>
    </html>
  )
}
