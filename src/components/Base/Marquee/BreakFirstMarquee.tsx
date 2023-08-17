import Image from 'next/image';
import Star from '@/assets/images/LandingPage/marque-star.svg';
import './styles.css';

const BreakFirstMarquee = () => {
  return (
    <div className="main-breakfirst-marque-div bg-[#193DE7] py-1.5 font-archivo text-3xl font-bold uppercase lg:text-40/56">
      <div className="breakfirst-marque-div-1 inline-flex items-center">
        <p className="mx-4">BreakFirst</p>
        <Image src={Star} alt="" height={28} width={28} className="mx-4" />
        <p className="mx-4">BreakFirst</p>
        <Image src={Star} alt="" height={28} width={28} className="mx-4" />
        <p className="mx-4">BreakFirst</p>
        <Image src={Star} alt="" height={28} width={28} className="mx-4" />
        <p className="mx-4">BreakFirst</p>
        <Image src={Star} alt="" height={28} width={28} className="mx-4" />
        <p className="mx-4">BreakFirst</p>
        <Image src={Star} alt="" height={28} width={28} className="mx-4" />
        <p className="mx-4">BreakFirst</p>
        <Image src={Star} alt="" height={28} width={28} className="mx-4" />
      </div>
      <div className="breakfirst-marque-div-2 inline-flex items-center" aria-hidden="true">
        <p className="mx-4">BreakFirst</p>
        <Image src={Star} alt="" height={28} width={28} className="mx-4" />
        <p className="mx-4">BreakFirst</p>
        <Image src={Star} alt="" height={28} width={28} className="mx-4" />
        <p className="mx-4">BreakFirst</p>
        <Image src={Star} alt="" height={28} width={28} className="mx-4" />
        <p className="mx-4">BreakFirst</p>
        <Image src={Star} alt="" height={28} width={28} className="mx-4" />
        <p className="mx-4">BreakFirst</p>
        <Image src={Star} alt="" height={28} width={28} className="mx-4" />
        <p className="mx-4">BreakFirst</p>
        <Image src={Star} alt="" height={28} width={28} className="mx-4" />
      </div>
    </div>
  );
};

export default BreakFirstMarquee;
