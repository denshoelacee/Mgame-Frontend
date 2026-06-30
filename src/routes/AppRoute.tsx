import Ecasino from "@/features/ecasino/pages/Ecasino";
import PinoyGames from "@/features/pinoygames/pages/PinoyGames";
import DesktopLayout from "@/layouts/DesktopLayout";
import { Routes, Route } from "react-router-dom";

export default function AppRoutes() {

  return (
    <Routes>
      {/* Main Website */}
      <Route path="/"  element={<DesktopLayout />}>
        <Route index element={<PinoyGames />} />
        <Route path="e-casino" element={<Ecasino />} />
      </Route>

      {/* 404 */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}