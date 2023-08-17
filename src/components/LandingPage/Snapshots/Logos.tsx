import Image from 'next/image';
import coin68 from '@/assets/images/LandingPage/logos/coin68-logo.svg';
import cyberconnect from '@/assets/images/LandingPage/logos/cyberconnect-logo.svg';
import gafi from '@/assets/images/LandingPage/logos/gafi-logo.svg';
import hashed from '@/assets/images/LandingPage/logos/hashed-logo.svg';
import icetea from '@/assets/images/LandingPage/logos/icetea-logo.svg';
import ledgerPrime from '@/assets/images/LandingPage/logos/ledger-prime-logo.svg';
import polygon from '@/assets/images/LandingPage/logos/polygon-logo.svg';
import symbolicCapital from '@/assets/images/LandingPage/logos/symbolic-capital-logo.svg';

export const Coin68Logo = ({ className = '' }: { className?: string }) => {
  return <Image src={coin68} alt="Coin68 logo" className={className} />;
};

export const CyberConnectLogo = ({ className = '' }: { className?: string }) => {
  return <Image src={cyberconnect} alt="CyberConnect logo" className={className} />;
};

export const GaFiLogo = ({ className = '' }: { className?: string }) => {
  return <Image src={gafi} alt="GameFi.org logo" className={className} />;
};

export const HashedLogo = ({ className = '' }: { className?: string }) => {
  return <Image src={hashed} alt="Hashed logo" className={className} />;
};

export const IceteaLogo = ({ className = '' }: { className?: string }) => {
  return <Image src={icetea} alt="Icetea Labs logo" className={className} />;
};

export const LedgerPrimeLogo = ({ className = '' }: { className?: string }) => {
  return <Image src={ledgerPrime} alt="LedgerPrime logo" className={className} />;
};

export const PolygonLogo = ({ className = '' }: { className?: string }) => {
  return <Image src={polygon} alt="Polygon logo" className={className} />;
};

export const SymbolicCapitalLogo = ({ className = '' }: { className?: string }) => {
  return <Image src={symbolicCapital} alt="Symbolic Capital logo" className={className} />;
};
