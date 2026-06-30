import { eCasinoGames } from "@/constants/ecasino"
import GameSection from "../components/GameSectionEcasino"


function Ecasino() {

  return (
    <>
      <GameSection
        title="Slots"
        cards={eCasinoGames}
      />
      <GameSection
        title="Live"
        cards={eCasinoGames}
      />
    </>
  )
}

export default Ecasino