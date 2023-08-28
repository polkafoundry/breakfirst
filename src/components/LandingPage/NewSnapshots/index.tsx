import Image from 'next/image';
import HeadlingWithStroke from '@/components/Base/Headings/HeadingWithStroke';
import { SnapshotsData } from './SnapshotsData';
import SnapshotEvent from './SnapshotEvent';
import BreakFirstMarquee from '@/components/Base/Marquee/BreakFirstMarquee';
import FloatingTop from '@/assets/images/LandingPage/floating-snapshots-top.png';
import FloatingBottom from '@/assets/images/LandingPage/floating-snapshots-bot.png';
import './styles.css';

const NewSnapshots = () => {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-screen-3xl md:px-8 pb-20 pt-15 lg:px-20 lg:pb-36 lg:pt-40">
        <div className="relative pb-10">
          <HeadlingWithStroke stroke="Snapshots" heading="Our Web3 Moments in Snapshots" />
        </div>
        <div className="flex flex-col gap-5">
          {SnapshotsData.map((event, index) => {
            return <SnapshotEvent key={event.title} event={event} descriptionRight={index % 2 === 0} />;
          })}
        </div>
      </div>
      <div className="absolute -top-36 left-0 -z-20 w-28 lg:-top-36 lg:h-fit lg:w-fit">
        <Image src={FloatingTop} alt="" />
      </div>
      <div className="absolute bottom-0 right-0 -z-20 w-28 lg:h-fit lg:w-fit">
        <Image src={FloatingBottom} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 z-50 translate-y-[10%] -rotate-2 3xl:translate-y-[20%] 3xl:-rotate-1">
        <BreakFirstMarquee />
      </div>
    </section>
  );
};

export default NewSnapshots;
