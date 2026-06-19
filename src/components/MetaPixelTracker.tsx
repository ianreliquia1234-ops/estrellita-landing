'use client'

import { useMetaPixel } from '@/hooks/useMetaPixel'
import { useEffect } from 'react'

/**
 * Componente que dispara eventos do Meta Pixel em momentos-chave
 * Adicione este componente na página onde quer rastrear eventos
 */

interface MetaPixelTrackerProps {
  eventName?: string // Para rastrear eventos customizados
  eventData?: Record<string, any>
}

export function MetaPixelTracker({
  eventName,
  eventData,
}: MetaPixelTrackerProps) {
  const { trackEvent } = useMetaPixel()

  useEffect(() => {
    if (eventName) {
      trackEvent(eventName, eventData)
    }
  }, [eventName, eventData, trackEvent])

  return null
}

/**
 * Hook helper para disparar eventos em cliques de botão
 *
 * Exemplo de uso em um Button:
 * const { trackEventOnClick } = useMetaPixelClick('InitiateCheckout')
 * <Button onClick={trackEventOnClick}>Comprar Agora</Button>
 */
export function useMetaPixelClick(eventName: string, eventData?: Record<string, any>) {
  const { trackEvent } = useMetaPixel()

  const trackEventOnClick = async () => {
    await trackEvent(eventName, eventData)
  }

  return { trackEventOnClick }
}
