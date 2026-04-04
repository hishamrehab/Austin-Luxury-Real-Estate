import { ContactConsultationSection } from '@/pages/contact/components/ContactConsultationSection'
import { ContactFinalCtaSection } from '@/pages/contact/components/ContactFinalCtaSection'
import { ContactHero } from '@/pages/contact/components/ContactHero'
import { ContactMapSection } from '@/pages/contact/components/ContactMapSection'
import { ContactOfficesSection } from '@/pages/contact/components/ContactOfficesSection'
import { ContactReachSection } from '@/pages/contact/components/ContactReachSection'

export function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactConsultationSection />
      <ContactOfficesSection />
      <ContactMapSection />
      <ContactReachSection />
      <ContactFinalCtaSection />
    </>
  )
}
