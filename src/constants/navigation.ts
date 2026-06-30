



import manoyCenter from '@/assets/icons/navigation/Manoy (center).png'
import homeIcon from '@/assets/icons/navigation/home.png'
import inviteIcon from '@/assets/icons/navigation/invite.png'
import profileIcon from '@/assets/icons/navigation/Profile.png'
import walletIcon from '@/assets/icons/navigation/Wallet.png'

// NavLinks
export const navLinks = [
  {
    label: "Pinoy-Games",
    to: "/",
  },
  {
    label: "E-Casino",
    to: "/e-casino",
  },
  {
    label: "Promotions",
    to: "/promotions",
  },
  {
    label: "Chat",
    to: "/chat",
  },
];

// NAV DATA
export const bottomNav = [
  { id: 'home', icon: homeIcon, label: 'Home' },
  { id: 'invite', icon: inviteIcon, label: 'Invite' },
  { id: 'manoy', icon: manoyCenter, label: 'Manoy' },
  { id: 'wallet', icon: walletIcon, label: 'Wallet' },
  { id: 'profile', icon: profileIcon, label: 'Profile' },
] as const
