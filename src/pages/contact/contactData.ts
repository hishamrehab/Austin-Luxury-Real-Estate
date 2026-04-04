export const CONTACT_MAIN_PHONE_DISPLAY = '(512) 555-0100'
export const CONTACT_MAIN_PHONE_TEL = '+15125550100'
export const CONTACT_MAIN_EMAIL = 'info@austinluxuryrealty.com'

export const CONTACT_HERO_IMAGE =
  'https://readdy.ai/api/search-image?query=stunning%20modern%20luxury%20real%20estate%20office%20interior%20with%20floor%20to%20ceiling%20windows%20overlooking%20Austin%20Texas%20skyline%20at%20golden%20hour%20with%20elegant%20contemporary%20furniture%20and%20warm%20ambient%20lighting%20featuring%20clean%20lines%20and%20sophisticated%20design&width=1920&height=1080&seq=contact001&orientation=landscape'

export const CONTACT_CONSULTATION_IMAGE =
  'https://readdy.ai/api/search-image?query=professional%20real%20estate%20consultation%20meeting%20in%20elegant%20modern%20office%20with%20two%20people%20discussing%20property%20documents%20at%20a%20sleek%20desk%20with%20warm%20natural%20lighting%20and%20sophisticated%20interior%20design&width=600&height=400&seq=contact002&orientation=landscape'

export const CONTACT_CTA_IMAGE =
  'https://readdy.ai/api/search-image?query=stunning%20aerial%20view%20of%20luxury%20homes%20in%20Austin%20Texas%20Hill%20Country%20at%20sunset%20with%20rolling%20hills%20and%20Lake%20Travis%20in%20the%20distance%20featuring%20warm%20golden%20hour%20lighting%20and%20dramatic%20sky%20with%20soft%20clouds&width=1920&height=800&seq=contact006&orientation=landscape'

export type OfficeLocation = {
  id: string
  name: string
  badge: 'Headquarters' | 'Branch Office'
  image: string
  addressLines: [string, string]
  phoneDisplay: string
  phoneTel: string
  email: string
  hours: { line1: string; line2: string }
  mapsQuery: string
}

export const officeLocations: OfficeLocation[] = [
  {
    id: 'downtown',
    name: 'Downtown Austin',
    badge: 'Headquarters',
    image:
      'https://readdy.ai/api/search-image?query=modern%20luxury%20real%20estate%20office%20building%20exterior%20in%20downtown%20Austin%20Texas%20with%20glass%20facade%20and%20contemporary%20architecture%20featuring%20clean%20lines%20and%20sophisticated%20design%20at%20golden%20hour%20with%20warm%20lighting&width=600&height=800&seq=contact003&orientation=portrait',
    addressLines: ['500 Congress Avenue, Suite 2400', 'Austin, TX 78701'],
    phoneDisplay: '(512) 555-0100',
    phoneTel: '+15125550100',
    email: 'downtown@austinluxuryrealty.com',
    hours: { line1: 'Mon-Fri: 9AM-6PM', line2: 'Sat-Sun: By Appointment' },
    mapsQuery: '500 Congress Avenue, Suite 2400, Austin, TX 78701',
  },
  {
    id: 'westlake',
    name: 'Westlake Hills',
    badge: 'Branch Office',
    image:
      'https://readdy.ai/api/search-image?query=elegant%20boutique%20real%20estate%20office%20in%20upscale%20Westlake%20Hills%20neighborhood%20with%20limestone%20exterior%20and%20lush%20landscaping%20featuring%20Texas%20Hill%20Country%20architecture%20style%20with%20warm%20natural%20lighting&width=600&height=800&seq=contact004&orientation=portrait',
    addressLines: ['3825 Lake Austin Blvd, Suite 100', 'Austin, TX 78746'],
    phoneDisplay: '(512) 555-0200',
    phoneTel: '+15125550200',
    email: 'westlake@austinluxuryrealty.com',
    hours: { line1: 'Mon-Fri: 9AM-6PM', line2: 'Sat: 10AM-4PM' },
    mapsQuery: '3825 Lake Austin Blvd, Suite 100, Austin, TX 78746',
  },
  {
    id: 'lakeway',
    name: 'Lakeway',
    badge: 'Branch Office',
    image:
      'https://readdy.ai/api/search-image?query=waterfront%20real%20estate%20office%20building%20near%20Lake%20Travis%20Texas%20with%20modern%20design%20and%20scenic%20lake%20views%20featuring%20contemporary%20architecture%20with%20natural%20stone%20accents%20and%20warm%20ambient%20lighting&width=600&height=800&seq=contact005&orientation=portrait',
    addressLines: ['1941 Lohmans Crossing, Suite 200', 'Lakeway, TX 78734'],
    phoneDisplay: '(512) 555-0300',
    phoneTel: '+15125550300',
    email: 'lakeway@austinluxuryrealty.com',
    hours: { line1: 'Mon-Fri: 9AM-6PM', line2: 'Sat: 10AM-4PM' },
    mapsQuery: '1941 Lohmans Crossing, Suite 200, Lakeway, TX 78734',
  },
]

/** Google Maps embed for downtown headquarters */
export const CONTACT_MAP_EMBED_SRC =
  'https://www.google.com/maps?q=500+Congress+Avenue+Suite+2400+Austin+TX+78701&output=embed'
