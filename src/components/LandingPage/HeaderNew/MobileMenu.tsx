'use client';

import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
// import LinkStyled from '@/components/Base/LinkStyled';
import { NavbarItems } from '@/constants';
import Logo from '@/assets/images/logo.svg';
import MenuOpen from '@/assets/images/LandingPage/nav-menu-open.svg';
import MenuClose from '@/assets/images/LandingPage/nav-menu-close.svg';
// import X from '@/assets/images/LandingPage/x-logo.svg';
// import LinkedIn from '@/assets/images/LandingPage/linkedin-logo.svg';
// import Medium from '@/assets/images/LandingPage/medium-logo.svg';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <div className="relative">
        {/* <LinkStyled href="/" className="absolute left-5 top-0 z-50 md:left-10" id="header-logo">
          <Image src={Logo} alt="BreakFirst Logo" height={40} />
        </LinkStyled> */}
        <div className="absolute left-5 top-0 z-50 md:left-10" id="header-logo">
          <Image src={Logo} alt="BreakFirst Logo" height={40} />
        </div>
        <div
          className={clsx(
            isOpen ? 'translate-x-[200%]' : 'translate-x-0',
            'mobile-menu-open-transition absolute right-5 top-0 z-50 cursor-pointer'
          )}
          onClick={() => setIsOpen(true)}
        >
          <Image src={MenuOpen} alt="Open Menu" height={40} />
        </div>
        <div
          className={clsx(
            isOpen ? 'translate-y-0' : '-translate-y-[200%]',
            'mobile-menu-open-transition absolute right-6 top-1 z-50 cursor-pointer'
          )}
          onClick={() => setIsOpen(false)}
        >
          <Image src={MenuClose} alt="Open Menu" height={32} />
        </div>
      </div>

      <div
        className={clsx(
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
          'mobile-menu-background mobile-menu-transition fixed left-0 top-0 h-screen w-screen overflow-hidden'
        )}
      >
        <div className="mobile-menu-shadow flex h-full w-full flex-col items-center justify-between px-[15%] pb-12 pt-40">
          <div className="flex flex-col gap-8 text-center">
            {NavbarItems.map((item) => {
              return (
                // <LinkStyled
                //   key={item?.text}
                //   href={item?.href}
                //   openInNewTab={item?.newTab}
                //   className="px-4 py-2 text-2xl"
                // >
                //   {item.text}
                // </LinkStyled>
                <div key={item?.text} className="px-4 py-2 text-2xl">
                  {item.text}
                </div>
              );
            })}
          </div>
          {/* <div className="flex items-center justify-center gap-3">
            <LinkStyled
              href={SocialAccounts.X}
              openInNewTab={true}
              className=" flex h-10 w-10 items-center justify-center rounded-full bg-black"
            >
              <Image src={X} alt="X Logo" height={20} width={20} />
            </LinkStyled>
            <LinkStyled
              href={SocialAccounts.LinkedIn}
              openInNewTab={true}
              className=" flex h-10 w-10 items-center justify-center rounded-full bg-black"
            >
              <Image src={LinkedIn} alt="X Logo" height={20} width={20} />
            </LinkStyled>
            <LinkStyled
              href={SocialAccounts.Medium}
              openInNewTab={true}
              className=" flex h-10 w-10 items-center justify-center rounded-full bg-black"
            >
              <Image src={Medium} alt="X Logo" height={20} width={20} />
            </LinkStyled>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
