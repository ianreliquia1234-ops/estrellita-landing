'use client'

import { useMetaPixel } from '@/hooks/useMetaPixel'
import { Button, ButtonProps } from './Button'
import { ReactNode } from 'react'

interface MetaButtonProps extends ButtonProps {
  children: ReactNode
  metaEvent?: string // 'InitiateCheckout' | 'Purchase' | 'Lead', etc
  metaEventData?: Record<string, any>
  onClickAfterTracking?: () => void
}

/**
 * Button com rastreamento automático do Meta Pixel
 *
 * Exemplo:
 * <MetaButton
 *   metaEvent="InitiateCheckout"
 *   metaEventData={{ value: 27.90, currency: 'BRL' }}
 * >
 *   Comprar Agora
 * </MetaButton>
 */
export function MetaButton({
  children,
  metaEvent,
  metaEventData,
  onClickAfterTracking,
  ...buttonProps
}: MetaButtonProps) {
  const { trackEvent } = useMetaPixel()

  const handleClick = async () => {
    if (metaEvent) {
      await trackEvent(metaEvent, metaEventData)
    }
    onClickAfterTracking?.()
  }

  return (
    <Button {...buttonProps} onClick={handleClick}>
      {children}
    </Button>
  )
}
