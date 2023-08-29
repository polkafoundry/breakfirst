import Image from 'next/image';
import Logo from '@/assets/images/logo.svg';
import MobileMenu from './MobileMenu';
import { NavbarItems } from '@/constants';
import './styles.css';

const HeaderNew = () => {
  return (
    <header className="fixed top-0 z-[100] w-full pt-5 font-barlow opacity-0 lg:px-14 xl:px-40" id="header">
      <div className="relative mx-auto hidden max-w-screen-3xl items-center justify-between text-black lg:flex">
        <div>
          <Image src={Logo} alt="BreakFirst Logo" height={40} />
        </div>
        <div className="flex h-[60px] items-center justify-center gap-[60px] rounded-xl bg-white px-20">
          {NavbarItems.map((item) => {
            return (
              // <LinkStyled key={item?.text} href={item?.href} openInNewTab={item?.newTab} className="text-xl">
              //   {item.text}
              // </LinkStyled>
              <div key={item?.text} className="text-xl">
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
      <div className="block lg:hidden">
        <MobileMenu />
      </div>
    </header>
  );
};

export default HeaderNew;
