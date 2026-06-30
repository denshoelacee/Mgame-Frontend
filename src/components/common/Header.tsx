import pinoyLogo from '@/assets/images/branding/Pinoy MG Logo.png'
import { Button } from '@/components/ui/button'

const navLinks = ['Pinoy-Games', 'E-Casino', 'Promotions', 'Chat'] as const
const activeNavLink = 'Pinoy-Games' as const

interface HeaderProps {
  onLoginClick?: () => void
  onSignUpClick?: () => void
  variant?: 'mobile' | 'desktop'
}

export function Header({
  onLoginClick,
  onSignUpClick,
  variant = 'mobile',
}: HeaderProps) {
  if (variant === 'desktop') {
    return (
      <div className="flex h-16 w-full items-center justify-between bg-blue-500 px-3">
        <div>
          <img
            src={pinoyLogo}
            alt="Pinoy MG logo"
            width={50}
            height={52}
            className="object-contain"
          />
        </div>

        <div className="flex gap-2">
          <Button
            type="button"
            variant="ghost"
            className="rounded-md px-4 py-1.5 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white"
            onClick={onLoginClick}
          >
            Login
          </Button>

          <Button
            type="button"
            variant="ghost"
            className="rounded-md px-4 py-1.5 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white"
            onClick={onSignUpClick}
          >
            Sign Up
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 py-3 shrink-0">
      <div className="flex items-center justify-between">
        <img
          src={pinoyLogo}
          alt="Pinoy MG logo"
          className="h-[3.5rem] w-[3.5rem] rounded-full object-cover"
        />

        <div className="ml-2 flex flex-1 flex-col items-center">
          <div className="flex w-full justify-end gap-[3vw] pr-[8vw]">
            <button
              className="text-[#000080] font-bold text-[0.85rem] hover:opacity-80"
              onClick={onLoginClick}
            >
              Login
            </button>
            <button
              className="text-[#000080] font-bold text-[0.85rem] hover:opacity-80"
              onClick={onSignUpClick}
            >
              Register
            </button>
          </div>

          <nav className="mt-3 flex w-full justify-between text-[0.7rem] font-medium leading-none text-[#8a8ce8]">
            {navLinks.map((link) => (
              <a
                key={link}
                href="/"
                className={`pb-0.5 text-center ${
                  link === activeNavLink ? 'underline underline-offset-4 decoration-[#8a8ce8]' : ''
                }`}
                onClick={(e) => e.preventDefault()}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
