import { pinoyGamesDesktop, pinoyGamesMobile } from "@/constants/pinoygames";
import GameSection from "@/features/pinoygames/components/GameSectionPinoy";

function PinoyGames() {
  return (
    <div className="h-screen ">
      <GameSection
        title="Pinoy Games"
        mobileCards={pinoyGamesMobile}
        desktopCards={pinoyGamesDesktop}
      />

    </div>
  );
}


export default PinoyGames;
