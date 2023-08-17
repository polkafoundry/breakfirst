'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import LinkStyled from '@/components/Base/LinkStyled';
import { NavbarItems } from '@/constants';
import Logo from '@/assets/images/logo.svg';
// import X from '@/assets/images/LandingPage/x-logo.svg';
// import LinkedIn from '@/assets/images/LandingPage/linkedin-logo.svg';
// import Medium from '@/assets/images/LandingPage/medium-logo.svg';
import MobileMenu from './MobileMenu';
import './styles.css';

const Header = () => {
  const [headlineVisible, setHeadlineVisible] = useState<boolean>(document.body.scrollTop <= innerHeight);

  document.body.addEventListener('scroll', () => {
    if (document.body.scrollTop <= innerHeight !== headlineVisible) {
      setHeadlineVisible(document.body.scrollTop <= innerHeight);
    }
  });

  return (
    <header className="fixed top-0 z-[100] w-full pt-5 font-barlow opacity-0 lg:px-14 xl:px-40" id="header">
      <div className="relative mx-auto hidden max-w-screen-3xl text-black lg:block">
        <LinkStyled
          href="/"
          className={clsx(headlineVisible ? 'prim-logo' : 'alt-logo', 'logo-transition absolute top-2.5 z-10')}
          id="header-logo"
        >
          <Image src={Logo} alt="BreakFirst Logo" height={40} />
        </LinkStyled>
        <div
          className={clsx(
            headlineVisible ? 'prim-nav' : 'alt-nav',
            'nav-transition absolute left-1/2 flex h-[60px] -translate-x-1/2 items-center justify-center gap-[60px] rounded-xl'
          )}
          id="header-nav"
        >
          {NavbarItems.map((item) => {
            return (
              <LinkStyled key={item?.text} href={item?.href} openInNewTab={item?.newTab} className="text-xl">
                {item.text}
              </LinkStyled>
            );
          })}
        </div>
        <div
          className={clsx(
            headlineVisible ? 'prim-social' : 'alt-social',
            'social-transition absolute top-2.5 flex h-10 w-36 items-center justify-end gap-3'
          )}
        >
          {/* <LinkStyled
            href={SocialAccounts.X}
            openInNewTab={true}
            className={clsx(
              headlineVisible ? 'prim-icon' : 'alt-icon',
              'icon-transition flex items-center justify-center rounded-full bg-black'
            )}
          >
            <Image src={X} alt="X Logo" />
          </LinkStyled> */}
          {/* <LinkStyled
            href={SocialAccounts.LinkedIn}
            openInNewTab={true}
            className={clsx(
              headlineVisible ? 'prim-icon' : 'alt-icon',
              'icon-transition flex items-center justify-center rounded-full bg-[#193DE7]'
            )}
          >
            <Image src={LinkedIn} alt="X Logo" />
          </LinkStyled>
          <LinkStyled
            href={SocialAccounts.Medium}
            openInNewTab={true}
            className={clsx(
              headlineVisible ? 'prim-icon' : 'alt-icon',
              'icon-transition flex items-center justify-center rounded-full bg-black'
            )}
          >
            <Image src={Medium} alt="X Logo" />
          </LinkStyled> */}
        </div>
      </div>
      <div className="block lg:hidden">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
