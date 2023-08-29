/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import HeadlingWithStroke from '@/components/Base/Headings/HeadingWithStroke';
import BreakFirstMarquee from '@/components/Base/Marquee/BreakFirstMarquee';
import NextButton from '@/assets/images/LandingPage/swiper-next.svg';
import PrevButton from '@/assets/images/LandingPage/swiper-prev.svg';
import PlayIcon from '@/assets/images/LandingPage/video-play.svg';
import FloatingTop from '@/assets/images/LandingPage/floating-snapshots-top.png';
import FloatingBottom from '@/assets/images/LandingPage/floating-snapshots-bot.png';
import SnapshotsDescription from './SnapshotsDescription';
import { SlidesData } from './SlidesData';
import './styles.css';
import clsx from 'clsx';

const Snapshots = () => {
  const [swiperMediaRef, setSwiperMediaRef] = useState<any>();
  const [swiperDescriptionRef, setSwiperDescriptionRef] = useState<any>();
  const [videoUrls, setVideoUrls] = useState<string[]>([SlidesData[0].media[1].url, '', SlidesData[2].media[1].url]);
  const [play, setPlay] = useState<number>(-1);

  const handlePlay = (index: number) => {
    const tempUrls = videoUrls;
    if (!tempUrls[index].includes('?autoplay=1')) {
      tempUrls[index] = tempUrls[index].concat('?autoplay=1&mute=1');
      setPlay(index);
    }
    setVideoUrls(tempUrls);
  };

  const nextSlide = () => {
    swiperMediaRef?.slideNext();
    const realIndex = swiperMediaRef?.realIndex;
    if (realIndex === 0 || realIndex === 3 || realIndex === 6) swiperDescriptionRef?.slideNext();
    if (realIndex === 0 || realIndex === 1 || realIndex === 2) {
      if (swiperDescriptionRef?.realIndex !== 0) swiperDescriptionRef?.slideToLoop(0);
    }
    if (realIndex === 3 || realIndex === 4 || realIndex === 5) {
      if (swiperDescriptionRef?.realIndex !== 1) swiperDescriptionRef?.slideToLoop(1);
    }
    if (realIndex === 6 || realIndex === 7 || realIndex === 8) {
      if (swiperDescriptionRef?.realIndex !== 2) swiperDescriptionRef?.slideToLoop(2);
    }
  };

  const prevSlide = () => {
    swiperMediaRef?.slidePrev();
    const realIndex = swiperMediaRef?.realIndex;
    if (realIndex === 8 || realIndex === 5 || realIndex === 2) swiperDescriptionRef?.slidePrev();
    if (realIndex === 0 || realIndex === 1 || realIndex === 2) {
      if (swiperDescriptionRef?.realIndex !== 0) swiperDescriptionRef?.slideToLoop(0);
    }
    if (realIndex === 3 || realIndex === 4 || realIndex === 5) {
      if (swiperDescriptionRef?.realIndex !== 1) swiperDescriptionRef?.slideToLoop(1);
    }
    if (realIndex === 6 || realIndex === 7 || realIndex === 8) {
      if (swiperDescriptionRef?.realIndex !== 2) swiperDescriptionRef?.slideToLoop(2);
    }
  };

  const handleDescriptionSlide = () => {
    if (swiperMediaRef?.swipeDirection === 'next') {
      const realIndex = swiperMediaRef?.realIndex;
      if (realIndex === 0 || realIndex === 3 || realIndex === 6) swiperDescriptionRef?.slideNext();
      if (realIndex === 0 || realIndex === 1 || realIndex === 2) {
        if (swiperDescriptionRef?.realIndex !== 0) swiperDescriptionRef?.slideToLoop(0);
      }
      if (realIndex === 3 || realIndex === 4 || realIndex === 5) {
        if (swiperDescriptionRef?.realIndex !== 1) swiperDescriptionRef?.slideToLoop(1);
      }
      if (realIndex === 6 || realIndex === 7 || realIndex === 8) {
        if (swiperDescriptionRef?.realIndex !== 2) swiperDescriptionRef?.slideToLoop(2);
      }
    }
    if (swiperMediaRef?.swipeDirection === 'prev') {
      const realIndex = swiperMediaRef?.realIndex;
      if (realIndex === 8 || realIndex === 5 || realIndex === 2) swiperDescriptionRef?.slidePrev();
      if (realIndex === 0 || realIndex === 1 || realIndex === 2) {
        if (swiperDescriptionRef?.realIndex !== 0) swiperDescriptionRef?.slideToLoop(0);
      }
      if (realIndex === 3 || realIndex === 4 || realIndex === 5) {
        if (swiperDescriptionRef?.realIndex !== 1) swiperDescriptionRef?.slideToLoop(1);
      }
      if (realIndex === 6 || realIndex === 7 || realIndex === 8) {
        if (swiperDescriptionRef?.realIndex !== 2) swiperDescriptionRef?.slideToLoop(2);
      }
    }
  };

  return (
    <section className="relative">
      <div className="relative pb-20 pt-15 lg:pb-36 lg:pt-40">
        <div className="relative pb-10 lg:pb-15">
          <HeadlingWithStroke stroke="Snapshots" heading="Our Web3 Moments in Snapshots" />
        </div>
        <div>
          <div className="relative">
            <Swiper
              onSwiper={setSwiperMediaRef}
              initialSlide={1}
              slidesPerView={1}
              loopedSlides={3}
              spaceBetween={140}
              loop={true}
              longSwipes={false}
              preventInteractionOnTransition={true}
              centeredSlides={true}
              navigation={true}
              modules={[Navigation]}
              onRealIndexChange={handleDescriptionSlide}
              className="slideshowSwiper py-8s w-full"
            >
              {SlidesData.map((event, index) => {
                return (
                  <div key={`media-${event.event}`}>
                    {event.media.map((item, mediaIndex) => {
                      if (item.type === 'image') {
                        return (
                          <SwiperSlide key={`${index}-${mediaIndex}`} className="h-full">
                            <div className="flex-1">
                              <div className="mx-auto w-[72vw] lg:h-[506px] lg:w-[760px]">
                                <Image src={item.src} alt="" className="mx-auto w-full" />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      } else {
                        return (
                          <SwiperSlide key={`${index}-${mediaIndex}`} className="h-full">
                            <div className="flex-1">
                              <div className="video-player relative mx-auto h-[40vw] w-[72vw] lg:h-[506px] lg:w-[760px] lg:py-10">
                                <iframe src={videoUrls[index]} allow="autoplay"></iframe>
                                <div className={clsx(play === index ? 'hidden' : 'block', 'absolute top-0 lg:py-10')}>
                                  <Image src={item.thumbnail} alt="" />
                                  <div className="absolute top-0 flex h-full w-full items-center justify-center lg:py-10">
                                    <div className="flex items-center gap-3 px-3 xs:items-start md:gap-5 md:px-15 lg:gap-10 lg:px-28">
                                      <div
                                        className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white xs:h-10 xs:w-10 md:h-16 md:w-16 lg:h-20 lg:w-20"
                                        onClick={() => handlePlay(index)}
                                      >
                                        <Image src={PlayIcon} alt="Play icon" className="ml-[8%] h-[30%] w-[30%]" />
                                      </div>
                                      <div className="font-archivo text-sm font-bold uppercase text-white xs:text-22/28 md:text-4xl lg:text-36/44">
                                        {item.thumbnaiText}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      }
                    })}
                  </div>
                );
              })}
            </Swiper>
            <div className="absolute right-[calc(85vw+6px)] top-0 z-10 flex h-full items-center xs:right-[calc(85vw+12px)] md:right-[calc(85vw+32px)] lg:right-[calc(50%+420px)]">
              <div className="cursor-pointer" onClick={prevSlide}>
                <div className="h-10 w-10 md:h-12 md:w-12 lg:h-[60px] lg:w-[60px]">
                  <Image src={PrevButton} alt="Previous button" className="w-full" />
                </div>
              </div>
            </div>
            <div className="absolute left-[calc(85vw+6px)] top-0 z-10 flex h-full items-center xs:left-[calc(85vw+12px)] md:left-[calc(85vw+32px)] lg:left-[calc(50%+420px)]">
              <div className="cursor-pointer" onClick={nextSlide}>
                <div className="h-10 w-10 md:h-12 md:w-12 lg:h-[60px] lg:w-[60px]">
                  <Image src={NextButton} alt="Next button" className="w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative pt-15">
            <Swiper
              onSwiper={setSwiperDescriptionRef}
              slidesPerView={1}
              initialSlide={0}
              loopedSlides={1}
              spaceBetween={1000}
              loop={true}
              centeredSlides={true}
              navigation={true}
              allowTouchMove={false}
              modules={[Navigation]}
              className="w-full"
            >
              {SlidesData.map((event) => {
                return (
                  <SwiperSlide key={`description-${event.event}`}>
                    <SnapshotsDescription slideData={event} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
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

export default Snapshots;
