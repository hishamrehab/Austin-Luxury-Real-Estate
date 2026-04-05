import { motion, useReducedMotion } from 'motion/react'

const LISTINGS_HERO_IMAGE =
  'https://readdy.ai/api/search-image?query=stunning%20aerial%20view%20of%20luxury%20homes%20in%20austin%20texas%20hill%20country%20with%20beautiful%20architecture%20and%20lush%20green%20landscapes%20featuring%20upscale%20residential%20neighborhood%20with%20elegant%20estates%20and%20tree%20lined%20streets%20against%20clear%20sky%20with%20warm%20golden%20hour%20lighting&width=1920&height=800&seq=301&orientation=landscape'

/** Extends to the top of the viewport so the fixed header sits over the image (not the page bg). */
export function ListingsHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative">
      <div className="relative h-[min(45vh,560px)] min-h-[280px] w-full overflow-hidden md:h-[45vh]">
        {reduceMotion ? (
          <img
            alt="Austin luxury homes"
            className="h-full w-full object-cover object-center"
            src={LISTINGS_HERO_IMAGE}
          />
        ) : (
          <motion.img
            alt="Austin luxury homes"
            className="h-full w-full object-cover object-center"
            src={LISTINGS_HERO_IMAGE}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-6 pt-20 pb-8">
          <div className="text-center">
            {reduceMotion ? (
              <HeroCopy />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <HeroCopy />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroCopy() {
  return (
    <>
      <h1 className="mb-4 font-serif text-5xl font-semibold text-white drop-shadow-sm md:text-6xl">
        Luxury Listings
      </h1>
      <p className="mx-auto max-w-2xl text-xl text-white/90 drop-shadow-sm">
        Discover Austin&apos;s most exceptional properties in the city&apos;s most prestigious neighborhoods
      </p>
    </>
  )
}
