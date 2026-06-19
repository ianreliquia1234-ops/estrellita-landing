import { useCallback, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

declare global {
  interface Window {
    fbq: (command: string, name: string, data?: Record<string, any>) => void
  }
}

// Gera um event_id único para deduplicação entre browser e servidor
const generateEventId = () => uuidv4()

// Salva o fbp (Pixel ID do usuário) no localStorage
const getFBP = () => {
  if (typeof window === 'undefined') return null

  const fbp = localStorage.getItem('_fbp')
  return fbp
}

export function useMetaPixel() {
  // Inicializa o Pixel quando o componente monta
  useEffect(() => {
    // Carrega o script do Meta Pixel
    const script = document.createElement('script')
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    script.async = true
    document.head.appendChild(script)

    // Inicializa o Pixel
    window.fbq = window.fbq || function() {
      (window.fbq.q = window.fbq.q || []).push(arguments)
    }
    window.fbq.l = new Date().getTime()

    // Inicializa com o Pixel ID (público, seguro)
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID
    if (pixelId) {
      window.fbq('init', pixelId)
      window.fbq('track', 'PageView')
    }

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  // Dispara evento no Pixel + envia para Conversions API
  const trackEvent = useCallback(
    async (eventName: string, eventData?: Record<string, any>) => {
      if (typeof window === 'undefined') return

      const eventId = generateEventId()
      const fbp = getFBP()

      // Dispara no browser
      window.fbq('track', eventName, {
        ...eventData,
        eventId, // Inclui event_id para deduplicação
      })

      // Envia para o servidor (Conversions API)
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
            fbp, // Facebook Pixel ID do usuário
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
