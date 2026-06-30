
import { bottomNav } from '@/constants/navigation'

export default function MobileBottomNav() {
  return (
    <nav className="relative z-50 h-[clamp(3.2rem,6.2vw,5.6rem)] w-full shrink-0 border-t border-neutral-300 bg-white px-2 pb-[calc(0.125rem+env(safe-area-inset-bottom))] pt-0.5 shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
      <ul className="grid h-full grid-cols-5 items-center">
        {bottomNav.map((item) => (
          <li key={item.id} className="relative flex h-full items-center justify-center">
            <button
              className={`flex flex-col items-center justify-center ${
                item.id === 'manoy' ? 'absolute left-1/2 -translate-x-1/2 -top-8 sm:-top-6   z-30' : ''
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`object-contain ${
                  item.id === 'manoy'
                    ? 'max-w-none h-[6rem] w-[6rem] drop-shadow-md'
                    : 'h-[clamp(2.5rem,4.5vw,3.2rem)] w-[clamp(2.5rem,4.5vw,3.2rem)]'
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
