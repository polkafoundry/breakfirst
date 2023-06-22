import Image from 'next/image';
import clsx from 'clsx';
import bgComingSoon from '@/assets/images/ComingSoon/background.png';
import { poppins, sourceSansPro } from '@/assets/fonts';

const ComingSoonPage = () => {
  return (
    <div className="relative flex h-full w-full justify-center overflow-x-hidden">
      <div className="absolute -left-[100%] -right-[100%] bottom-0 top-0 -z-10 sm:-left-[70%] sm:-right-[70%] md:-left-[40%] md:-right-[40%] lg:-left-[20%] lg:-right-[20%] xl:-left-0 xl:-right-0">
        <Image src={bgComingSoon} alt="" className="z-10" fill={true} />
      </div>
      <div className="flex h-full w-full max-w-2xl flex-col items-center justify-between px-4 pb-[13vh] pt-[10vh] text-center text-white">
        <div className={clsx(poppins.className, 'w-fit rounded-1.5xl bg-white px-4 py-3 text-22/28 text-black')}>
          <span>BreakFirst</span>
        </div>
        <div className="mb-[7vh]">
          <div className={clsx(poppins.className, 'flex flex-col text-5xl tracking-tight sm:text-66/84')}>
            <span>we are</span>
            <span>coming soon</span>
          </div>
          <div className={(clsx(sourceSansPro.className), 'mt-2 text-base tracking-tight sm:text-xl sm:font-light')}>
            <span>Embrace limits breaking. Make decentralization shines.</span>
          </div>
        </div>
        <div className={(clsx(sourceSansPro.className), 'text-base tracking-tight sm:text-xl sm:font-light')}>
          <span>An early-stage web3 fund and incubator.</span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
