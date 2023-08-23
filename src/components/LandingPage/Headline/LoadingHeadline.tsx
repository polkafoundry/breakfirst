import CountUp from 'react-countup';
import Image from 'next/image';
import LogoText from '@/assets/images/logo-text.svg';
import './styles.css';

interface IProps {
  start: () => void;
  end: () => void;
}

const LoadingHeadline = ({ start, end }: IProps) => {
  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center gap-6">
      <div
        className="init-headline-background absolute left-0 top-0 -z-10 m-0 h-screen w-screen"
        id="headline-grow-bg"
      />
      <div className="w-3/5 lg:h-fit lg:w-fit">
        <Image src={LogoText} alt="" id="headline-loading-logo" />
      </div>
      <div id="headline-count-up">
        <CountUp
          className="font-archivo text-3xl font-bold lg:text-4xl"
          delay={0}
          end={100}
          duration={1.8}
          onStart={start}
          onEnd={end}
          separator=" "
          suffix="%"
        />
      </div>
    </div>
  );
};

export default LoadingHeadline;
