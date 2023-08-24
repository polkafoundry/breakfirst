import Image from 'next/image';
import HeadlingWithStroke from '@/components/Base/Headings/HeadingWithStroke';
import { AttentionContent } from '@/constants';
import FloatingGrad from '@/assets/images/LandingPage/floating-attention.png';
import AttentionItem from './AttentionItem';

const Attention = () => {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-screen-3xl pb-15 pt-[120px] lg:px-20 lg:pb-20 lg:pt-56 xl:px-[120px]">
        <div className="relative pb-10 xs:pb-15 xl:px-[20%]">
          <HeadlingWithStroke stroke="attention" heading="What gets our attention" />
        </div>
        <div className="flex flex-col gap-3 px-6 xs:px-8 lg:grid lg:grid-cols-2 lg:gap-5 lg:px-0">
          {AttentionContent.map((item, index) => {
            return <AttentionItem key={index} title={item.title} content={item.content} />;
          })}
        </div>
      </div>
      <div className="absolute right-0 top-0 -z-40 w-32 lg:h-fit lg:w-fit">
        <Image src={FloatingGrad} alt="" />
      </div>
    </section>
  );
};

export default Attention;
