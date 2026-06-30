
import { PromoCard } from "@/components/ui/PromoCard";
import type { PromoCardProps } from "@/Interfaces/types";

interface GameSectionProps {
    title: string;
    mobileCards: PromoCardProps[];
    desktopCards: PromoCardProps[];
}

export default function GameSectionPinoy({
    title,
    mobileCards,
    desktopCards,
}: GameSectionProps) {
    return (
        <section className="mb-10">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xs xl:text-xl font-bold text-[var(--primary-color)]">{title}</h2>
            </div>

            {/* Mobile */}
            <div className="xl:hidden flex-1 overflow-y-auto px-[6px] pt-[6px] max-h-[calc(100dvh-150px)]">
                <div className="grid grid-cols-3 gap-[6px] auto-rows-[calc((100dvh-150px)/4.4)]">
                    {mobileCards.map((card) => (
                        <PromoCard
                            key={card.id}
                            className={card.className}
                            size={card.size}
                            staticSrc={card.staticSrc}
                        />
                    ))}
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:grid grid-cols-6 auto-rows-[180px] gap-[6px]">
                {desktopCards.map((card) => (
                    <PromoCard
                        key={card.id}
                        className={card.className}
                        size={card.size}
                        staticSrc={card.staticSrc}
                    />
                ))}
            </div>
        </section>
    );
}