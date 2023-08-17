import './styles.css';
import LinkStyled from '@/components/Base/LinkStyled';
// import Image from 'next/image';
// import Medium from '@/assets/images/LandingPage/medium-logo.svg';
// import X from '@/assets/images/LandingPage/x-logo.svg';
// import LinkedIn from '@/assets/images/LandingPage/linkedin-logo-blue.svg';
// import { SocialAccounts } from '@/constants';

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#193DE7]">
        <div className="mx-auto flex max-w-screen-3xl flex-col items-center gap-8 px-4 pb-3 pt-12 md:px-24 lg:gap-5 lg:px-0 lg:py-20">
          <p className="max-w-screen-md text-center font-archivo text-3xl font-bold uppercase lg:text-36/50">
            Insight from the <span className="footer-text-gradient">BreakFirst team</span>, straight to your inbox
          </p>
          <div className="flex gap-3">
            {/* <LinkStyled
              href={SocialAccounts.X}
              openInNewTab={true}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black"
            >
              <Image src={X} alt="X Logo" width={20} height={20} />
            </LinkStyled> */}
            {/* <LinkStyled
            href={SocialAccounts.LinkedIn}
            openInNewTab={true}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
          >
            <Image src={LinkedIn} alt="X Logo" width={20} height={20} />
          </LinkStyled>
          <LinkStyled
            href={SocialAccounts.Medium}
            openInNewTab={true}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black"
          >
            <Image src={Medium} alt="X Logo" width={20} height={20} />
          </LinkStyled> */}
          </div>
          <div className="flex gap-8 lg:hidden">
            <LinkStyled href="/">Privacy Policy</LinkStyled>
            <LinkStyled href="/">Terms and Conditions</LinkStyled>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="mx-auto flex max-w-screen-3xl items-center justify-center px-8 py-3 lg:justify-between lg:px-20 lg:text-xl">
          <div className="hidden gap-12 lg:flex">
            <a className="hover:underline" href="#" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a className="hover:underline" href="#" target="_blank" rel="noopener noreferrer">
              Terms and Conditions
            </a>
          </div>
          <div>
            <p>© 2023 BreakFirst. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
