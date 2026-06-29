import pinoyLogo from '@/assets/images/branding/Pinoy MG Logo.png'
import { Button } from '@/components/ui/button'

const navLinks = ['Pinoy-Games', 'E-Casino', 'Promotions', 'Chat'] as const

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
    <div className="px-1">
      <div className="flex items-start justify-between">
        <img
          src={pinoyLogo}
          alt="Pinoy MG logo"
          className="h-[3.2rem] w-[3.2rem] rounded-full object-cover"
        />

        <div className="ml-2 flex flex-1 flex-col items-end">
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-[#1d4ed8] font-semibold text-[0.9rem]"
              onClick={onLoginClick}
            >
              Login
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-[#1d4ed8] font-semibold text-[0.9rem]"
              onClick={onSignUpClick}
            >
              Register
            </Button>
          </div>

          <nav className="mt-1 flex w-full justify-between text-[0.78rem] text-[#8a8ce8]">
            {navLinks.map((link) => (
              <a
                key={link}
                href="/"
                className="flex-1 text-center whitespace-nowrap"
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
