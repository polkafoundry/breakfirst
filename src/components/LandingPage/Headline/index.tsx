'use client';

import { MutableRefObject } from 'react';
import LoadingHeadline from './LoadingHeadline';
import './styles.css';

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: MutableRefObject<any>;
}

const Headline = ({ ref }: IProps) => {
  const start = () => {
    document.querySelector('#headline-grow-bg').classList.remove('init-headline-background');
    document.querySelector('#headline-grow-bg').classList.add('headline-background');
    document.querySelector('#headline-grow-bg').classList.add('anim-grow');
  };
  const end = () => {
    document.querySelector('#headline-count-up').classList.add('anim-fade-out');
    document.querySelector('#headline-loading-logo').classList.add('anim-slide-out-up');
    document.querySelector('#main-headline').classList.add('anim-slide-in-up');
    document.querySelector('#header').classList.add('anim-header-fade-in');
    document.querySelector('#main').classList.remove('overflow-y-hidden');
  };

  return (
    <section className={'relative h-screen w-full overflow-hidden text-white'} ref={ref}>
      <LoadingHeadline start={start} end={end} />
      <div className="h-full w-full translate-y-[100vh] px-5 pt-20 md:px-20 lg:px-0 lg:pt-[100px]" id="main-headline">
        <div className="mx-auto flex h-full max-w-screen-2xl flex-col justify-center gap-4 pb-[20vh] text-center lg:gap-8 lg:px-20 lg:pb-0 xl:px-40">
          <div className="hidden h-[228px] overflow-hidden lg:block">
            <div className="slide-text-vertical">
              <p className="font-archivo text-64/76 font-bold uppercase">
                We <span className="headline-text-gradient">invest</span> in the future of digital worlds powered by
                true decentralization
              </p>
              <p className="font-archivo text-64/76 font-bold uppercase">
                We <span className="headline-text-gradient">embrace</span> in the future of digital worlds powered by
                true decentralization
              </p>
              <p className="font-archivo text-64/76 font-bold uppercase">
                We <span className="headline-text-gradient">accelerate</span> in the future of digital worlds powered by
                true decentralization
              </p>
            </div>
            <div className="slide-text-vertical">
              <p className="font-archivo text-64/76 font-bold uppercase">
                We <span className="headline-text-gradient">invest</span> in the future of digital worlds powered by
                true decentralization
              </p>
              <p className="font-archivo text-64/76 font-bold uppercase">
                We <span className="headline-text-gradient">embrace</span> in the future of digital worlds powered by
                true decentralization
              </p>
              <p className="font-archivo text-64/76 font-bold uppercase">
                We <span className="headline-text-gradient">accelerate</span> in the future of digital worlds powered by
                true decentralization
              </p>
            </div>
          </div>

          <div className="flex overflow-hidden lg:hidden">
            <div className="slide-text-horizontal">
              <p className="w-[calc(100vw-40px)] shrink-0 font-archivo text-3xl font-bold uppercase xs:text-36/44 md:w-[calc(100vw-160px)]">
                We <span className="headline-text-gradient">invest</span> in the future of digital worlds powered by
                true decentralization
              </p>
              <p className="w-[calc(100vw-40px)] font-archivo text-3xl font-bold uppercase xs:text-36/44 md:w-[calc(100vw-160px)]">
                We <span className="headline-text-gradient">embrace</span> in the future of digital worlds powered by
                true decentralization
              </p>
              <p className="w-[calc(100vw-40px)] font-archivo text-3xl font-bold uppercase xs:text-36/44 md:w-[calc(100vw-160px)]">
                We <span className="headline-text-gradient">accelerate</span> in the future of digital worlds powered by
                true decentralization
              </p>
            </div>
            <div className="slide-text-horizontal">
              <p className="w-[calc(100vw-40px)] font-archivo text-3xl font-bold uppercase xs:text-36/44 md:w-[calc(100vw-160px)]">
                We <span className="headline-text-gradient">invest</span> in the future of digital worlds powered by
                true decentralization
              </p>
              <p className="w-[calc(100vw-40px)] font-archivo text-3xl font-bold uppercase xs:text-36/44 md:w-[calc(100vw-160px)]">
                We <span className="headline-text-gradient">embrace</span> in the future of digital worlds powered by
                true decentralization
              </p>
              <p className="w-[calc(100vw-40px)] font-archivo text-3xl font-bold uppercase xs:text-36/44 md:w-[calc(100vw-160px)]">
                We <span className="headline-text-gradient">accelerate</span> in the future of digital worlds powered by
                true decentralization
              </p>
            </div>
          </div>

          <p className="px-10 font-barlow text-sm xs:text-base md:px-20 lg:px-32 lg:text-xl xl:px-40">
            BreakFirst is an early-stage venture fund led by a team of experienced crypto founders, incubators, and
            investors. Our focus is on accelerating genuine decentralization and on-chain solutions, breaking new ground
            and making it accessible to all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Headline;
