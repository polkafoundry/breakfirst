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
    document.querySelector('#main').classList.remove('overflow-hidden');
  };

  return (
    <section className={'relative h-screen w-full overflow-hidden text-white'} ref={ref}>
      <LoadingHeadline start={start} end={end} />
      <div
        className="h-full w-full translate-y-[100vh] px-5 pb-[20vh] pt-20 md:px-5 lg:px-4 lg:pb-0 lg:pt-[100px] xl:px-20"
        id="main-headline"
      >
        <div className="mx-auto flex h-full max-w-screen-2xl flex-col justify-center gap-4 text-center lg:gap-8 ">
          <div className="">
            <p className="headline-text font-archivo text-3xl font-bold uppercase xs:text-36/44 md:text-40/56 lg:text-64/76">
              We{' '}
              <span className="new-slide-container relative inline-block text-transparent">
                <span className="controller"></span>
                <span className="absolute left-[50%] inline-flex -translate-x-[50%] flex-col">
                  <span className="new-slide-text inline-flex flex-col">
                    <span className="headline-text-gradient ">invest in</span>
                    <span>
                      <br />
                    </span>
                    <span className="headline-text-gradient ">embrace</span>
                    <span>
                      <br />
                    </span>
                    <span className="headline-text-gradient ">accelerate</span>
                    <span>
                      <br />
                    </span>
                  </span>
                  <span className="new-slide-text inline-flex flex-col">
                    <span className="headline-text-gradient ">invest in</span>
                    <span>
                      <br />
                    </span>
                    <span className="headline-text-gradient ">embrace</span>
                    <span>
                      <br />
                    </span>
                    <span className="headline-text-gradient ">accelerate</span>
                    <span>
                      <br />
                    </span>
                  </span>
                </span>
              </span>{' '}
              <br className="block xs:hidden" />
              the <br className="hidden xs:block sm:hidden" />
              future <br className="hidden xs:hidden sm:block md:hidden lg:block xl:hidden" />
              of <br className="hidden xs:hidden sm:hidden md:block lg:hidden xl:block" />
              digital worlds powered by true decentralization
            </p>
          </div>

          <p className="px-12 font-barlow text-sm xs:text-base sm:px-20 md:px-28 lg:px-32 lg:text-xl xl:px-40">
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
