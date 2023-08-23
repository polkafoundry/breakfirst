import Image from 'next/image';
import FloatingGrad from '@/assets/images/LandingPage/floating-subheadline.png';
import './styles.css';

const SubHeadline = () => {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-screen-3xl overflow-hidden px-12 pb-[120px] pt-20 lg:px-20 lg:pb-60 lg:pt-32 xl:px-[120px] xl:pb-60 xl:pt-40">
        <div className="w-full lg:grid lg:grid-cols-9 lg:gap-[72px]">
          <div className="text-sm xs:text-base lg:col-span-4 lg:text-xl">
            <p>
              At BreakFirst, we believe in the transformative potential of decentralization. By eliminating all
              intermediates, turning users into owners, in the far future, blockchain technologies can fuel virtual
              economies that will probably be even surpass the current real-world ones, disrupting the physical, legal,
              and moral assumptions that have long governed our society.
            </p>
            <p className="mt-3 lg:mt-5">
              We are committed is to empower exceptional builders who share our vision, and to support them in unlocking
              blockchain&apos;s full potential.
            </p>
          </div>
          <div className="mt-8 lg:col-span-5 lg:mt-0">
            <p className="pr-8 font-archivo text-3xl font-bold uppercase xs:text-36/44 lg:text-54/64">
              We are boldly <span className="subheadline-text-gradient">embracing the future</span>, and we invite you
              to do the same.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 left-0 -z-10 h-[150px] w-[140px] lg:h-fit lg:w-fit">
        <Image src={FloatingGrad} alt="" />
      </div>
    </section>
  );
};

export default SubHeadline;
