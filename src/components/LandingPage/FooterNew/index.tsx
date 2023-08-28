import Image from 'next/image';
import Logo from '@/assets/images/logo.svg';

const FooterNew = () => {
  return (
    <footer>
      <div className="mx-auto hidden max-w-screen-3xl items-end justify-between bg-[#193DE7] px-15 py-5 lg:flex">
        <div className="flex items-end gap-8">
          <div className="w-[176px] xl:w-[211px]">
            <Image src={Logo} alt="BreakFirst Logo" className="w-full" />
          </div>
          <div className="flex gap-5 xl:text-xl">
            {/* <LinkStyled href="/">Privacy Policy</LinkStyled>
            <LinkStyled href="/">Terms and Conditions</LinkStyled> */}
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
        <div>
          <p className="xl:text-xl">© 2023 BreakFirst. All Rights Reserved.</p>
        </div>
      </div>
      <div className="flex flex-col lg:hidden">
        <div className="flex flex-col items-center gap-4 bg-[#193DE7] py-5">
          <div>
            <Image src={Logo} alt="BreakFirst Logo" height={40} />
          </div>
          <div className="flex gap-8 text-sm xs:text-base">
            {/* <LinkStyled href="/">Privacy Policy</LinkStyled>
            <LinkStyled href="/">Terms and Conditions</LinkStyled> */}
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
        <div className="py-3 text-sm xs:text-base">
          <p className="text-center">© 2023 BreakFirst. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
