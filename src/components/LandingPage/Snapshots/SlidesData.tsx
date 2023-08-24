import CocktailLeft from '@/assets/images/LandingPage/snapshots/cocktail-night-left.jpg';
import CocktailRight from '@/assets/images/LandingPage/snapshots/cocktail-night-right.jpg';
import CocktailThumb from '@/assets/images/LandingPage/snapshots/cocktail-night-thumb.png';
import NextBullLeft from '@/assets/images/LandingPage/snapshots/next-bull-left.png';
import NextBullRight from '@/assets/images/LandingPage/snapshots/next-bull-right.png';
import NextBullThumb from '@/assets/images/LandingPage/snapshots/next-bull-thumb.png';
import ETHVNLeft from '@/assets/images/LandingPage/snapshots/ethvietnam-left.png';
import ETHVNRight from '@/assets/images/LandingPage/snapshots/ethvietnam-right.png';
import ETHVNMiddle from '@/assets/images/LandingPage/snapshots/ethvietnam-middle.png';
import coin68 from '@/assets/images/LandingPage/logos/coin68-logo.svg';
import cyberconnect from '@/assets/images/LandingPage/logos/cyberconnect-logo.svg';
import gafi from '@/assets/images/LandingPage/logos/gafi-logo.svg';
import hashed from '@/assets/images/LandingPage/logos/hashed-logo.svg';
import icetea from '@/assets/images/LandingPage/logos/icetea-logo.svg';
import ledgerPrime from '@/assets/images/LandingPage/logos/ledger-prime-logo.svg';
import polygon from '@/assets/images/LandingPage/logos/polygon-logo.svg';
import symbolicCapital from '@/assets/images/LandingPage/logos/symbolic-capital-logo.svg';

export const SlidesData = [
  {
    event: 'GM Next Bull',
    media: [
      {
        src: NextBullLeft,
        type: 'image',
      },
      {
        url: 'https://www.youtube.com/embed/d2DhLTJFK58',
        thumbnail: NextBullThumb,
        thumbnaiText: 'GM Next Bull: A Night with Web3 Social and Games',
        type: 'video',
      },
      {
        src: NextBullRight,
        type: 'image',
      },
    ],
    title: 'GM Next Bull: A Night with Web3 Social and Games',
    description:
      'Celebrating the Next Bull Run with CyberConnect, Gamefi.org, and Coin68. This exclusive event brought together industry leaders from Vietnam and beyond for a night of innovation and idea-sharing.',
    logos: [gafi, cyberconnect, coin68],
  },
  {
    event: 'ETHVIETNAM',
    media: [
      {
        src: ETHVNLeft,
        type: 'image',
      },
      {
        src: ETHVNMiddle,
        type: 'image',
      },
      {
        src: ETHVNRight,
        type: 'image',
      },
    ],
    title: 'ETHVietnam',
    description:
      'Our founder- Thi Truong joined a value-rich discussion in the ETHVietnam’s panel talk with the topic "Lessons on GameFi, Metaverse, and the future".',
    logos: [],
  },
  {
    event: 'Private Cocktail Night',
    media: [
      {
        src: CocktailLeft,
        type: 'image',
      },
      {
        url: 'https://www.youtube.com/embed/lkg7cOJbbuI',
        thumbnail: CocktailThumb,
        thumbnaiText: 'Private Cocktail Night 2022',
        type: 'video',
      },
      {
        src: CocktailRight,
        type: 'image',
      },
    ],
    title: 'Private Cocktail Night',
    description:
      'An exclusive night of innovation and networking! Our Private Cocktail Night, co-hosted by Icetea Labs, Symbolic Capital, Ledger Prime, Hashed, and Polygon, brought together almost 80 Web3 startup representatives and venture capitalists in Vietnam.',
    logos: [icetea, symbolicCapital, ledgerPrime, hashed, polygon],
  },
];
