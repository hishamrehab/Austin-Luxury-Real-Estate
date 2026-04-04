import { Link } from 'react-router-dom'

import { FadeInSection } from '@/components/motion'
import { neighborhoodComparisonRows } from '@/pages/neighborhoods/neighborhoodsData'

function WalkScoreBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-16 overflow-hidden rounded-full bg-charcoal-100 dark:bg-charcoal-700">
        <div
          className="h-full rounded-full bg-sage-500"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-xs text-charcoal-500 dark:text-charcoal-400">{score}</span>
    </div>
  )
}

export function NeighborhoodsComparisonSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8 dark:bg-charcoal-950">
      <div className="mx-auto max-w-7xl">
        <FadeInSection className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium tracking-wider text-sage-600 uppercase dark:text-sage-400">
            At a Glance
          </p>
          <h2 className="mb-4 font-serif text-4xl font-semibold text-charcoal-950 dark:text-zinc-50">
            Neighborhood Comparison
          </h2>
          <p className="mx-auto max-w-xl text-base text-charcoal-500 dark:text-charcoal-400">
            Compare key metrics across Austin&apos;s most prestigious communities
          </p>
        </FadeInSection>

        <div className="overflow-x-auto rounded-2xl border border-charcoal-100 dark:border-charcoal-800">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-charcoal-50 dark:bg-charcoal-900">
                {[
                  'Neighborhood',
                  'Median Price',
                  'Price Range',
                  'Avg. Size',
                  'Lot Size',
                  'Schools',
                  'Walk Score',
                  'Listings',
                ].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-charcoal-500 uppercase dark:text-charcoal-400"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {neighborhoodComparisonRows.map((row) => (
                <tr
                  key={row.id}
                  className={
                    row.stripe
                      ? 'border-charcoal-100 border-t bg-charcoal-50/30 transition-colors hover:bg-sage-50/50 dark:border-charcoal-800 dark:bg-charcoal-900/50 dark:hover:bg-sage-950/20'
                      : 'border-charcoal-100 border-t bg-white transition-colors hover:bg-sage-50/50 dark:border-charcoal-800 dark:bg-charcoal-950 dark:hover:bg-sage-950/20'
                  }
                >
                  <td className="px-6 py-4">
                    <Link
                      to={`/neighborhoods/${row.id}`}
                      className="cursor-pointer font-serif font-semibold text-charcoal-950 transition-colors hover:text-sage-600 dark:text-zinc-50 dark:hover:text-sage-400"
                    >
                      {row.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-sage-600 dark:text-sage-400">
                    {row.median}
                  </td>
                  <td className="px-6 py-4 text-sm text-charcoal-600 dark:text-charcoal-300">
                    {row.range}
                  </td>
                  <td className="px-6 py-4 text-sm text-charcoal-600 dark:text-charcoal-300">
                    {row.avgSize}
                  </td>
                  <td className="px-6 py-4 text-sm text-charcoal-600 dark:text-charcoal-300">
                    {row.lot}
                  </td>
                  <td className="px-6 py-4 text-sm text-charcoal-600 dark:text-charcoal-300">
                    {row.schools}
                  </td>
                  <td className="px-6 py-4">
                    <WalkScoreBar score={row.walkScore} />
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center justify-center rounded-full bg-sage-50 px-3 py-1 text-xs font-semibold text-sage-700 dark:bg-sage-950/50 dark:text-sage-300">
                      {row.listings}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
