import Image from 'next/image';
import clsx from 'clsx';
import bgComingSoon from '@/assets/images/ComingSoon/background-orange.png';
import logo from '@/assets/images/logo.svg';
import { poppins, sourceSansPro } from '@/assets/fonts';

const ComingSoonPage = () => {
  return (
    <div className="relative flex h-full w-full justify-center overflow-x-hidden">
      <div className="absolute -left-[100%] -right-[100%] bottom-0 top-0 -z-10 sm:-left-[70%] sm:-right-[70%] md:-left-[40%] md:-right-[40%] lg:-left-[20%] lg:-right-[20%] xl:-left-0 xl:-right-0">
        <Image src={bgComingSoon} alt="" className="z-10" fill={true} />
      </div>
      <div className="flex h-full w-full max-w-2xl flex-col items-center justify-between px-4 pb-[13vh] pt-[10vh] text-center text-white">
        <div className="w-fit">
          <Image src={logo} alt="BreakFirst logo" width={220} height={50} />
        </div>
        <div className="mb-[7vh]">
          <div className={clsx(poppins.className, 'flex flex-col text-5xl tracking-tight sm:text-66/84')}>
            <span>we are</span>
            <span>coming soon</span>
          </div>
          <div className={(clsx(sourceSansPro.className), 'mt-2 text-base tracking-tight sm:text-xl')}>
            <span>Embrace limits breaking. Make decentralization shine.</span>
          </div>
        </div>
        <div className={(clsx(sourceSansPro.className), 'text-base tracking-tight sm:text-xl')}>
          <span>An early-stage web3 fund and incubator.</span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
