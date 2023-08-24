import BreakFirstMarquee from '@/components/Base/Marquee/BreakFirstMarquee';
import { IntroductionContent } from '@/constants';
import IntroductionItem from './IntroductionItem';

const Introduction = () => {
  return (
    <section className="relative bg-[#121213]">
      <div className="relative mx-auto max-w-screen-3xl px-6 xs:px-8 pb-8 pt-32 lg:px-20 lg:pb-[84px] xl:px-[120px]">
        <div className="pb-6 xs:pb-8 lg:px-[10%] lg:pb-10 lg:text-center xl:px-[20%] xl:pb-15">
          <h2 className="font-archivo text-2xl xs:text-3xl font-bold uppercase lg:text-5xl">Your Hands-On Partner for Success</h2>
        </div>

        {IntroductionContent.map((item, index) => {
          return <IntroductionItem key={index} title={item.title} content={item.content} />;
        })}
      </div>
      <div className="absolute left-0 top-0 z-50 -translate-x-4 translate-y-[60%] rotate-2 lg:translate-y-[5%] 3xl:-translate-y-[25%] 3xl:rotate-1">
        <BreakFirstMarquee />
      </div>
    </section>
  );
};

export default Introduction;
