import { Header } from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import MobileBottomNav from "@/components/common/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {


  return (
    <section className="flex min-h-dvh w-full flex-col bg-white">
      {/* Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden xl:block">
          <Sidebar />
        </aside>

        <main className="flex flex-1 flex-col bg-white">
          {/* Desktop Navigation */}
          {/* <nav className="flex justify-center xl:justify-end gap-4 xl:gap-6 px-4 xl:px-6 py-4 xl:py-6 text-sm xl:text-base font-medium overflow-x-auto whitespace-nowrap">
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
          </nav> */}

          {/* Mobile Promo Grid */}
          {/* <div className="xl:hidden flex-1 overflow-hidden px-[6px] pt-[6px]">
            <div className="grid grid-cols-3 gap-[6px] auto-rows-[calc((100dvh-150px)/4.4)]">
              {promoCards.map((card) => (
                <PromoCard
                  key={card.id}
                  className={card.className}
                  size={card.size}
                  staticSrc={
                    card.size === "big" ? promoBigStatic : promoSmallStatic
                  }
                />
              ))}
            </div>
          </div> */}

          {/* Shared Page Content */}
          <div className=" flex-1 px-6 pb-6">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-50">
        <MobileBottomNav />
      </div>
    </section>
  );
}
