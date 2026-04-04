export function StarRating() {
  return (
    <div className="mb-6 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-xl text-sage-500 dark:text-sage-400" aria-hidden>
          ★
        </span>
      ))}
    </div>
  )
}
