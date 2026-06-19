'use client'

import { useMetaPixel } from '@/hooks/useMetaPixel'

/**
 * Componente que inicializa o Meta Pixel globalmente
 * Deve ser adicionado ao RootLayout para funcionar em todas as páginas
 */
export function MetaPixelInit() {
  useMetaPixel() // Inicializa o Pixel e rastreia PageView automaticamente
  return null
}
