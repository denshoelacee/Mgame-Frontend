import type { PromoCardProps } from '@/Interfaces/types';
export const promoCardsPinoyGames = [
  //big-top-left
  { id: '1', size: 'big', className: 'col-start-1 col-end-3 row-start-1 row-end-3  object-center', },
  //small-top-right
  { id: '2', size: 'small', className: 'col-start-3 row-start-1-' },
  //small-mid-right
  { id: '3', size: 'small', className: 'col-start-3 row-start-2 ' },
  //small-mid-left
  { id: '4', size: 'small', className: 'col-start-1 row-start-3' },
  //big-center-right
  { id: '5', size: 'big', className: 'col-start-2 col-end-4 row-start-3  row-end-5 object-center', },
  //small-lower-left
  { id: '6', size: 'small', className: 'col-start-1 row-start-4' },
  //big-bottom-left
  { id: '7', size: 'big', className: 'col-start-1 col-end-3 row-start-5  row-end-7', },
  //small-bottom-right
  { id: '8', size: 'small', className: 'col-start-3 row-start-5 ' },
] as const


export const pinoyGamesMobile = [
  { staticSrc: "/assets/images/promos/hari tari.png" },
  { staticSrc: "/assets/images/promos/hari tari.png" },
  { staticSrc: "/assets/images/promos/haritari-girl.png" },
  { staticSrc: "/assets/images/promos/hari tari.png" },
  { staticSrc: "/assets/images/promos/hari tari.png" },
  { staticSrc: "/assets/images/promos/hari tari.png" },
  { staticSrc: "/assets/images/promos/hari tari.png" },
  { staticSrc: "/assets/images/promos/hari tari.png" },
  { staticSrc: "/assets/images/promos/hari tari.png" },
].map((game, index) => ({
  ...game,
  ...promoCardsPinoyGames[index % promoCardsPinoyGames.length],
}));


export const pinoyGamesDesktop :PromoCardProps[] = [
 {
    id: "1",
    size: "small",
    staticSrc: "/assets/images/promos/hari tari.png",
  },
  {
    id: "2",
    size: "small",
    staticSrc: "/assets/images/promos/hari tari.png",
  },
  {
    id: "3",
    size: "small",
    staticSrc: "/assets/images/promos/haritari-girl.png",
  },
  {
    id: "4",
    size: "small",
    staticSrc: "/assets/images/promos/hari tari.png",
  },
]
