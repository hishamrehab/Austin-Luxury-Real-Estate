import { Link, useLocation, useParams } from 'react-router-dom'

const segmentTitles: Record<string, string> = {
  listings: 'Listings',
  sell: 'Sell',
  neighborhoods: 'Neighborhoods',
  agents: 'Agents',
  about: 'About',
  contact: 'Contact',
  buy: 'Buyer Services',
  blog: 'Market Insights',
  careers: 'Careers',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  'mls-disclaimer': 'MLS Disclaimer',
}

export function PlaceholderPage() {
  const location = useLocation()
  const { id } = useParams()
  const segments = location.pathname.split('/').filter(Boolean)
  const first = segments[0] ?? ''

  const title =
    first === 'listings' && id
      ? `Listing #${id}`
      : (segmentTitles[first] ?? 'Page')

  return (
    <div className="mx-auto max-w-3xl px-6 py-32 lg:px-8">
      <h1 className="mb-4 font-serif text-4xl font-semibold text-charcoal-950 dark:text-zinc-50">
        {title}
      </h1>
      <p className="mb-8 text-charcoal-600 dark:text-zinc-400">
        This section is coming soon. Return home to explore the full experience.
      </p>
      <Link
        to="/"
        className="inline-block rounded-full bg-sage-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sage-600 dark:bg-sage-600 dark:hover:bg-sage-500"
      >
        Back to Home
      </Link>
    </div>
  )
}
