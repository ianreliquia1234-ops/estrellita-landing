'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

export default function MicrosoftClarity() {
  useEffect(() => {
    Clarity.init('xvs15726r8')
  }, [])

  return null
}
