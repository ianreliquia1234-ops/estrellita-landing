import { AnnouncementBar }   from '@/components/sections/AnnouncementBar'

import { Hero }              from '@/components/sections/Hero'
import { ProductGallery }    from '@/components/sections/ProductGallery'
import { SocialStrip }       from '@/components/sections/SocialStrip'
import { Countdown }         from '@/components/sections/Countdown'
import { MiniHowTo }           from '@/components/sections/MiniHowTo'
import { ProductGallery2 }     from '@/components/sections/ProductGallery2'
import { SimpleFormatSection }       from '@/components/sections/SimpleFormatSection'
import { ProblemSolutionSection }    from '@/components/sections/ProblemSolutionSection'
import { MechanismSection }          from '@/components/sections/MechanismSection'
import { BenefitsSection }   from '@/components/sections/BenefitsSection'
import { ProofSection }      from '@/components/sections/ProofSection'
import { BonusSection }      from '@/components/sections/BonusSection'
import { PricingSection }    from '@/components/sections/PricingSection'
import { ProofCarouselSection } from '@/components/sections/ProofCarouselSection'
import { GuaranteeSection }  from '@/components/sections/GuaranteeSection'
import { AccessSection }     from '@/components/sections/AccessSection'
import { FAQSection }        from '@/components/sections/FAQSection'
import { Footer }            from '@/components/sections/Footer'
import { StickyMobileCTA }   from '@/components/ui/StickyMobileCTA'

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Hero />
      <ProductGallery />
      <MiniHowTo />
      <ProductGallery2 />
      <SimpleFormatSection />
      <ProblemSolutionSection />
      <MechanismSection />
      <BenefitsSection />
      <ProofSection />
      <BonusSection />
      <PricingSection />
      <ProofCarouselSection />
      <GuaranteeSection />
      <AccessSection />
      <FAQSection />
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
