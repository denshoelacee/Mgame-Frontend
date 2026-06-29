import manoyCenter from '@/assets/icons/navigation/Manoy (center).png'
import homeIcon from '@/assets/icons/navigation/home.png'
import inviteIcon from '@/assets/icons/navigation/invite.png'
import profileIcon from '@/assets/icons/navigation/Profile.png'
import walletIcon from '@/assets/icons/navigation/Wallet.png'
import overlayVideo from '@/assets/videos/overlay/Hari Tari overlay logo.mp4'
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
  'col-span-2 row-span-2',
  '',
  '',
  '',
  'col-span-2 row-span-2',
  '',
  'col-span-2 row-span-2',
  '',
] as const

function PromoCard({ className = '' }: { className?: string }) {
  return (
    <article className={`relative rounded-2xl overflow-hidden bg-black ${className}`}>
      <video
        className="w-full h-full object-cover"
        src={overlayVideo}
        autoPlay
        muted
        loop
        playsInline
      />
    </article>
  )
}

function DesktopLayout() {
  return (
    <section className="hidden min-h-dvh w-full bg-white text-slate-900 xl:flex xl:flex-col">
      <div className="w-full">
        <Header variant="desktop" />
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="w-full">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1d4ed8]">
              Desktop Lobby
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Desktop
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-2 auto-rows-[120px]">
            {promoCards.map((className, index) => (
              <PromoCard key={`desktop-${className}-${index}`} className={className} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// BOTTOM NAV
function MobileBottomNav() {
  return (
    <nav className="border-t border-neutral-300 bg-white px-2 py-1">
      <ul className="grid grid-cols-5 items-end">
        {bottomNav.map((item) => (
          <li key={item.id} className="flex justify-center">
            <button
              className={`flex items-end justify-center ${
                item.id === 'manoy' ? '-mt-7' : ''
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`object-contain ${
                  item.id === 'manoy'
                    ? 'h-[4.3rem] w-[4.3rem]'
                    : 'h-[3.3rem] w-[3.3rem]'
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// MOBILE MOSAIC (MAIN UI)
function MobileMosaic() {
  return (
    <section className="mx-auto flex h-dvh w-full max-w-[820px] flex-col bg-white xl:hidden">

      {/* HEADER */}
      <Header />

      {/* SCROLL CONTENT */}
      <div className="flex-1 overflow-y-auto px-2 pt-2 pb-2">

        {/* GRID */}
        <div
          className="grid grid-cols-3 gap-2"
          style={{
            gridAutoRows: 'minmax(0, calc((100dvh - 12rem) / 4.35))',
          }}
        >
          {promoCards.map((className, index) => (
            <PromoCard key={`${className}-${index}`} className={className} />
          ))}
        </div>

      </div>

      {/* BOTTOM NAV */}
      <MobileBottomNav />
    </section>
  )
}

function App() {
  return (
    <main className="h-dvh overflow-hidden bg-white">
      <DesktopLayout />
      <MobileMosaic />
    </main>
  )
}

export default App
