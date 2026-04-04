const LISTINGS_HERO_IMAGE =
  'https://readdy.ai/api/search-image?query=stunning%20aerial%20view%20of%20luxury%20homes%20in%20austin%20texas%20hill%20country%20with%20beautiful%20architecture%20and%20lush%20green%20landscapes%20featuring%20upscale%20residential%20neighborhood%20with%20elegant%20estates%20and%20tree%20lined%20streets%20against%20clear%20sky%20with%20warm%20golden%20hour%20lighting&width=1920&height=800&seq=301&orientation=landscape'

/** Extends to the top of the viewport so the fixed header sits over the image (not the page bg). */
export function ListingsHero() {
  return (
    <section className="relative">
      <div className="relative h-[min(45vh,560px)] min-h-[280px] w-full overflow-hidden md:h-[45vh]">
        <img
          alt="Austin luxury homes"
          className="h-full w-full object-cover object-center"
          src={LISTINGS_HERO_IMAGE}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center px-6 pt-20 pb-8">
          <div className="text-center">
            <h1 className="mb-4 font-serif text-5xl font-semibold text-white drop-shadow-sm md:text-6xl">
              Luxury Listings
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-white/90 drop-shadow-sm">
              Discover Austin&apos;s most exceptional properties in the city&apos;s most prestigious neighborhoods
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
