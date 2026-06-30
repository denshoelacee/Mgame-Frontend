export function PromoCard({
  className = '',
  staticSrc,
  size

}: {
  className?: string
  staticSrc: string
  size: "big" | "small";

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