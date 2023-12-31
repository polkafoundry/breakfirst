'use client';

import { MutableRefObject, useEffect, useState } from 'react';
import LoadingHeadline from './LoadingHeadline';
import './styles.css';

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: MutableRefObject<any>;
}

const Headline = ({ ref }: IProps) => {
  const [delayOver, setDelayOver] = useState<boolean>(false);

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

  useEffect(() => {
    const delay = setTimeout(() => {
      document.getElementById('headline-slide-text-1').classList.add('slide-text');
      document.getElementById('headline-slide-text-2').classList.add('slide-text');
    }, 2000);
    const delayContainer = setTimeout(() => {
      setDelayOver(true);
    }, 1700);
    const clearTimeouts = () => {
      () => clearTimeout(delay);
      () => clearTimeout(delayContainer);
    };
    return () => clearTimeouts();
  }, []);

  useEffect(() => {
    if (delayOver) {
      const container = document.getElementById('headline-slide-container');
      let widths = [
        document.getElementById('headline-invest').offsetWidth + 1,
        document.getElementById('headline-embrace').offsetWidth,
        document.getElementById('headline-accelerate').offsetWidth,
      ];
      const slidesCount = widths.length;
      let i = 1;
      const interval = setInterval(() => {
        widths = [
          document.getElementById('headline-invest').offsetWidth + 1,
          document.getElementById('headline-embrace').offsetWidth,
          document.getElementById('headline-accelerate').offsetWidth,
        ];
        container.style.width = widths[i % slidesCount] + 'px';
        i++;
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [delayOver]);

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
              <span className="slide-container relative inline-block text-transparent" id="headline-slide-container">
                <span className="controller">invest in</span>
                <span className="absolute left-[50%] inline-flex -translate-x-[50%] flex-col">
                  <span className="inline-flex flex-col items-center" id="headline-slide-text-1">
                    <span className="headline-text-gradient w-fit" id="headline-invest">
                      invest in
                    </span>
                    <span>
                      <br />
                    </span>
                    <span className="headline-text-gradient w-fit" id="headline-embrace">
                      embrace
                    </span>
                    <span>
                      <br />
                    </span>
                    <span className="headline-text-gradient w-fit" id="headline-accelerate">
                      accelerate
                    </span>
                    <span>
                      <br />
                    </span>
                  </span>
                  <span className="inline-flex flex-col items-center" id="headline-slide-text-2">
                    <span className="headline-text-gradient w-fit">invest in</span>
                    <span>
                      <br />
                    </span>
                    <span className="headline-text-gradient w-fit">embrace</span>
                    <span>
                      <br />
                    </span>
                    <span className="headline-text-gradient w-fit">accelerate</span>
                    <span>
                      <br />
                    </span>
                  </span>
                </span>
              </span>{' '}
              <br className="block sm:hidden" />
              the future <br className="hidden sm:block md:hidden lg:block xl:hidden" />
              of <br className="hidden md:block lg:hidden xl:block" />
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
