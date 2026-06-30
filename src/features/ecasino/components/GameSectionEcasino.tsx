
import { PromoCard } from "@/components/ui/PromoCard";
import type { PromoCardProps } from "@/Interfaces/types";

interface GameSectionProps {
  title: string;
  cards: PromoCardProps[];
}

export default function GameSectionEcasino({ title, cards }: GameSectionProps) {
  return (
    <section className="mb-5">
      <div className="mb-4 flex items-center justify-between mt-5">
        <h2 className="text-xs xl:text-xl font-bold text-[var(--primary-color)]">{title}</h2> 
        <h2 className="text-xs xl:text-lg font-bold text-black font-normal">View all</h2>
      </div>

      {/* Desktop */}
      <div
        className="grid
    grid-cols-3
    md:grid-cols-5
    xl:grid-cols-6
    auto-rows-[80px]
    md:auto-rows-[120px]
    xl:auto-rows-[180px]
    gap-[6px]"
      >
        {cards.map((card) => (
          <PromoCard
            key={card.id}
            className={card.className}
            staticSrc={card.staticSrc}
          />
        ))}
      </div>
    </section>
  );
}
