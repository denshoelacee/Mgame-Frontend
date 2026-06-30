import manoyCenter from '@/assets/icons/navigation/Manoy (center).png'
import homeIcon from '@/assets/icons/navigation/home.png'
import inviteIcon from '@/assets/icons/navigation/invite.png'
import profileIcon from '@/assets/icons/navigation/Profile.png'
import walletIcon from '@/assets/icons/navigation/Wallet.png'
import { Header } from '@/components/common/Header'

// NAV DATA
const bottomNav = [
  { id: 'home', icon: homeIcon, label: 'Home' },
  { id: 'invite', icon: inviteIcon, label: 'Invite' },
  { id: 'manoy', icon: manoyCenter, label: 'Manoy' },
  { id: 'wallet', icon: walletIcon, label: 'Wallet' },
  { id: 'profile', icon: profileIcon, label: 'Profile' },
] as const

const promoCards = [
  {
    id: 'big-top-left',
    size: 'big',
    className: 'col-start-1 col-end-3 row-start-1 row-end-3',
  },
  { id: 'small-top-right', size: 'small', className: 'col-start-3 row-start-1' },
  { id: 'small-mid-right', size: 'small', className: 'col-start-3 row-start-2' },
  { id: 'small-mid-left', size: 'small', className: 'col-start-1 row-start-3' },
  {
    id: 'big-center-right',
    size: 'big',
    className: 'col-start-2 col-end-4 row-start-3 row-end-5',
  },
  { id: 'small-lower-left', size: 'small', className: 'col-start-1 row-start-4' },
  {
    id: 'big-bottom-left',
    size: 'big',
    className: 'col-start-1 col-end-3 row-start-5 row-end-7',
  },
  { id: 'small-bottom-right', size: 'small', className: 'col-start-3 row-start-5' },
] as const

function PromoCard({
  className = '',
  staticSrc,
  size,
}: {
  className?: string
  staticSrc: string
  size: 'big' | 'small'
}) {
  return (
    <article
      className={`relative overflow-hidden rounded-[8px] bg-black ${className}`}
    >
      <img
        src={staticSrc}
        alt=""
        className={`h-full w-full object-cover ${
          size === 'big' ? 'object-center' : 'object-center'
        }`}
      />
    </article>
  )
}

//FLOATING NAV
function MobileBottomNav() {
  return (
    <nav className="relative z-50 h-[clamp(3.9rem,6.2vw,4.6rem)] w-full shrink-0 border-t border-neutral-300 bg-white px-2 pb-[calc(0.125rem+env(safe-area-inset-bottom))] pt-0.5 shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
      <ul className="grid h-full grid-cols-5 items-center">
        {bottomNav.map((item) => (
          <li key={item.id} className="relative flex h-full items-center justify-center">
            <button
              className={`flex flex-col items-center justify-center ${
                item.id === 'manoy' ? 'absolute bottom-[0.1rem] left-1/2 z-50 -translate-x-1/2' : ''
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
// MOBILE (FIXED SCROLL - REPLICATING EXACT VIEWPORT)
function MobileMosaic() {
  const promoSmallStatic = '/assets/images/promos/hari tari.png'
  const promoBigStatic = '/assets/images/promos/haritari-girl.png'

  return (
    <section className="mx-auto flex h-dvh w-full max-w-[820px] flex-col overflow-hidden bg-white xl:hidden">
      {/* HEADER */}
      <Header />

      {/* ✅ FIXED GRID WITH PRECISE ROW SIZING */}
      <div className="relative flex-1 overflow-hidden">
        <div className="h-full px-[6px] pt-[6px]">
          {/* Using 4.4 divisor to ensure exactly 4.4 rows fit in the available space, consistently cropping the 5th row on any device */}
          <div className="grid grid-cols-3 gap-[6px] auto-rows-[calc((100dvh-150px)/4.4)]">
            {promoCards.map((card) => (
              <PromoCard
                key={card.id}
                className={card.className}
                size={card.size}
                staticSrc={card.size === 'big' ? promoBigStatic : promoSmallStatic}
              />
            ))}
          </div>
        </div>
      </div>

      <MobileBottomNav />
    </section>
  )
}

// DESKTOP (UNCHANGED)
function DesktopLayout() {
  const promoSmallStatic = '/assets/images/promos/hari tari.png'
  const promoBigStatic = '/assets/images/promos/haritari-girl.png'

  return (
    <section className="hidden min-h-dvh w-full bg-white xl:flex flex-col">
      <Header variant="desktop" />

      <div className="flex-1 px-6 py-6">
        <div className="grid grid-cols-3 gap-[6px] auto-rows-[120px]">
          {promoCards.map((card) => (
            <PromoCard
              key={card.id}
              className={card.className}
              size={card.size}
              staticSrc={card.size === 'big' ? promoBigStatic : promoSmallStatic}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// MAIN
function App() {
  return (
    <main className="h-dvh bg-white overflow-hidden">
      <DesktopLayout />
      <MobileMosaic />
    </main>
  )
}

export default App
