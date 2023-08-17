/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';

interface IProps {
  slideData: {
    event: string;
    media: any[];
    title: string;
    description: string;
    logos: any[];
  };
}

const SnapshotsDescription = ({ slideData }: IProps) => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-[72vw] flex-col gap-3 lg:grid lg:w-[760px] lg:grid-cols-3 lg:gap-5">
        <div>
          <p className="font-archivo text-lg font-bold uppercase lg:text-3xl">{slideData.title}</p>
        </div>
        <div className="col-span-2 lg:pl-5">
          <p className="mb-5 lg:text-xl">{slideData.description}</p>
          <div className="flex w-full flex-wrap items-center gap-x-3 gap-y-2 lg:gap-x-7 lg:gap-y-4">
            {slideData.logos.map((logo, index) => {
              return <Image key={`${logo}-${index}`} src={logo} alt="logo" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapshotsDescription;
