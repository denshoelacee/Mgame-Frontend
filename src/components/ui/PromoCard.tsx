export function PromoCard({
  className = '',
  staticSrc,

}: {
  className?: string
  staticSrc: string

}) {
  return (
    <article
      className={`relative overflow-hidden rounded-[8px] bg-black ${className}`}
    >
      <img
        src={staticSrc}
        alt=""
        className={`h-full w-full object-cover `}
      />
    </article>
  )
}