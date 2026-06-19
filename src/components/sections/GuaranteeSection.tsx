'use client'

import Image from 'next/image'

export function GuaranteeSection() {
  return (
    <section
      className="bg-trust-grad sec"
      aria-labelledby="guarantee-heading"
    >
      <div className="inner-md text-center">
        <div className="w-24 h-24 mx-auto mb-6 relative">
          <Image
            src="/images/garantia.png"
            alt="Garantia"
            fill
            className="object-contain"
          />
        </div>

        <p className="sec-label mb-3" style={{ color: '#22B8A0' }}>
          Risco Zero — Garantia Completa
        </p>

        <h2
          id="guarantee-heading"
          className="font-display font-black text-display-md mb-6"
          style={{ color: '#2B2118' }}
        >
          7 Dias de Garantia Total
        </h2>

        <p className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: '#5C4A3A' }}>
          Queremos que você tenha segurança total ao garantir o material. Acesse as canções,
          imprima, teste com seu filho e verifique se realmente funciona — sem nenhum risco.
        </p>
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5C4A3A' }}>
          Se dentro de 7 dias você achar que o material não ajudou no aprendizado do seu filho…{' '}
          <strong style={{ color: '#2B2118' }}>
            Basta enviar um e-mail e devolvemos 100% do seu dinheiro. Sem burocracia. Sem perguntas.
          </strong>
        </p>
      </div>
    </section>
  )
}
