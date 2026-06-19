// /api/meta-event
// 🔒 API Route segura para disparar eventos via Meta Conversions API
// O token NUNCA é exposto ao navegador

import { NextRequest, NextResponse } from 'next/server'

interface MetaEventPayload {
  event_name: string
  event_id: string
  event_time: number
  event_source_url: string
  client_user_agent: string
  fbp?: string
  fbc?: string
  value?: number
  currency?: string
  [key: string]: any
}

export async function POST(request: NextRequest) {
  try {
    // 1. Valida a origem da requisição (apenas do próprio domínio)
    const origin = request.headers.get('origin')
    const host = request.headers.get('host')

    if (!origin?.includes(host || 'localhost')) {
      return NextResponse.json(
        { error: 'Unauthorized origin' },
        { status: 403 }
      )
    }

    // 2. Lê o payload enviado pelo frontend
    const payload: MetaEventPayload = await request.json()

    // 3. Valida campos obrigatórios
    if (!payload.event_name || !payload.event_id) {
      return NextResponse.json(
        { error: 'Missing required fields: event_name, event_id' },
        { status: 400 }
      )
    }

    // 4. Recupera credenciais do servidor (.env.local)
    const pixelId = process.env.META_PIXEL_ID
    const accessToken = process.env.META_ACCESS_TOKEN

    if (!pixelId || !accessToken) {
      console.error('Meta credentials missing in .env.local')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // 5. Constrói o payload para a Conversions API
    // ⚠️ Apenas dados permitidos e seguros
    const conversionApiPayload = {
      data: [
        {
          event_name: payload.event_name,
          event_time: payload.event_time,
          event_id: payload.event_id, // Deduplicação com browser Pixel
          event_source_url: payload.event_source_url,
          action_source: 'website',
          client_user_agent: payload.client_user_agent,
          fbp: payload.fbp, // Facebook Pixel ID do usuário
          fbc: payload.fbc, // Facebook Click ID, se disponível
          // Para eventos de compra
          ...(payload.value && {
            custom_data: {
              value: payload.value,
              currency: payload.currency || 'BRL',
            },
          }),
        },
      ],
      access_token: accessToken,
    }

    // 6. Envia para a Meta Conversions API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(conversionApiPayload),
      }
    )

    const result = await response.json()

    // 7. Valida resposta
    if (!response.ok) {
      console.error('Meta API error:', result)
      return NextResponse.json(
        { error: 'Failed to track event' },
        { status: response.status }
      )
    }

    return NextResponse.json(
      { success: true, event_id: payload.event_id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Meta event API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
