import Ecasino from "@/features/ecasino/pages/Ecasino"; 
import PinoyGames from "@/features/pinoygames/pages/PinoyGames"; 
import DesktopLayout from "@/layouts/DesktopLayout"; 
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/components/auth/login/login";
import Register from "@/components/auth/register/register";
import SlotViewAll from "@/pages/slotViewAll";
import LiveViewAll from "@/pages/liveViewAll";
import { Routes, Route } from "react-router-dom"; 

export default function AppRoutes() { 

  return ( 
    <Routes> 
      {/* Main Website */} 
      <Route path="/"  element={<DesktopLayout />}> 
        <Route index element={<PinoyGames />} /> 
        <Route path="e-casino" element={<Ecasino />} /> 
        <Route path="slotViewAll" element={<SlotViewAll />} /> 
        <Route path="liveViewAll" element={<LiveViewAll />} /> 
      </Route> 

      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* 404 */} 
      {/* <Route path="*" element={<NotFound />} /> */} 
    </Routes> 
  ); 
}