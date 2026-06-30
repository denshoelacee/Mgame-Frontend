import pinoyLogo from "@/assets/images/branding/Pinoy MG Logo.png";
import { navLinks } from "@/constants/navigation";
import { NavLink, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-3 shrink-0">
      <div className="flex items-center justify-between">
        <img src={pinoyLogo} alt="Logo" width={50} height={52} />

        <div className="ml-2 flex flex-1 flex-col items-center">
          <div className="flex w-full justify-end gap-[3vw] ">
            <button
              className="text-[var(--primary-color)]  font-semibold text-[0.85rem] hover:opacity-80"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button
              className="text-[var(--primary-color)] font-semibold text-[0.85rem] hover:opacity-80"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <nav className=" flex w-full gap-4 sm:gap-4 md:gap-5 lg:gap-6 text-[0.7rem] lg:text-sm font-medium leading-none text-[#8a8ce8] justify-end">
       {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[var(--primary-color)] underline underline-offset-4"
                    : "text-[#8a8ce8]"
                }
              >
                {link.label}
              </NavLink>
            ))}
      </nav>
    </div>
  );
}
