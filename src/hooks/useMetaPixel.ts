import { useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'

declare global {
  interface Window {
    fbq?: {
      (command: string, name: string, data?: Record<string, any>): void
      q?: any[]
      l?: number
    }
  }
}

const generateEventId = () => uuidv4()

const getFBP = () => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('_fbp')
}

export function useMetaPixel() {
  // Nota: Meta Pixel é carregado globalmente em layout.tsx com strategy="beforeInteractive"
  // Este hook apenas fornece a função trackEvent para disparar eventos customizados
  // Não duplica inicialização do Pixel

  const trackEvent = useCallback(
    async (eventName: string, eventData?: Record<string, any>) => {
      if (typeof window === 'undefined' || !window.fbq) return

      const eventId = generateEventId()
      const fbp = getFBP()

      // Dispara evento no Pixel globalmente
      window.fbq('track', eventName, {
        ...eventData,
        eventId,
      })

      // Envia para Conversions API (server-side validation)
      try {
        await fetch('/api/meta-event', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event_name: eventName,
            event_id: eventId,
            event_time: Math.floor(Date.now() / 1000),
            event_source_url: window.location.href,
            client_user_agent: navigator.userAgent,
            fbp,
            ...(eventData || {}),
          }),
        })
      } catch (error) {
        console.warn('Meta Conversions API error:', error)
      }
    },
    []
  )

  return { trackEvent, generateEventId }
}
