import { pinoyGamesDesktop, pinoyGamesMobile } from "@/constants/pinoygames";
import GameSection from "@/features/pinoygames/components/GameSectionPinoy";

function PinoyGames() {
  return (
    <GameSection
      title="Pinoy Games"
      mobileCards={pinoyGamesMobile}
      desktopCards={pinoyGamesDesktop}
    />
  );
}

export default PinoyGames;
