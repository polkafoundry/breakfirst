/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import clsx from 'clsx';
import PlayIcon from '@/assets/images/LandingPage/video-play.svg';
import NextButton from '@/assets/images/LandingPage/swiper-next.svg';
import PrevButton from '@/assets/images/LandingPage/swiper-prev.svg';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Gallery from './Gallery';

interface IProps {
  descriptionRight: boolean;
  event: any;
}

const SnapshotEvent = ({ descriptionRight, event }: IProps) => {
  const [swiperNavRef, setSwiperNavRef] = useState<any>();
  const [swiperMainRef, setSwiperMainRef] = useState<any>();
  const [play, setPlay] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<string>(event?.media?.main?.url || '');

  const handlePlay = () => {
    if (!videoUrl.includes('?autoplay=1')) {
      setVideoUrl(videoUrl.concat('?autoplay=1&mute=1'));
    }
    setPlay(true);
  };

  const handleSideNext = () => {
    swiperNavRef?.slideNext();
    swiperMainRef?.slideNext();
  };

  const handleSlidePrev = () => {
    swiperNavRef?.slidePrev();
    swiperMainRef?.slidePrev();
  };

  return (
    <div className="flex w-full flex-col bg-[#121213] px-4 py-6 xs:px-6 md:px-8 md:py-8 lg:flex-row lg:px-5 xl:px-15 xl:py-10">
      {!descriptionRight && (
        <div className="hidden flex-col gap-5 pr-5 lg:flex xl:pr-15">
          <div>
            <p className="font-archivo text-lg font-bold uppercase lg:text-2xl xl:text-3xl">{event.title}</p>
          </div>
          <div>
            <p className="mb-5 lg:text-lg xl:text-xl">{event.description}</p>
            <div className="flex w-full flex-wrap items-center gap-x-3 gap-y-2 lg:gap-x-7 lg:gap-y-4">
              {event.logos.map((logo, index) => {
                return <Image key={`${logo}-${index}`} src={logo} alt="logo" />;
              })}
            </div>
          </div>
        </div>
      )}

      <div className="w-full shrink-0 lg:w-1/2 lg:min-w-[450px]">
        <div className="flex flex-col gap-3">
          <div className="relative w-full">
            <Swiper
              onSwiper={setSwiperMainRef}
              slidesPerView={1}
              initialSlide={0}
              loop={true}
              spaceBetween={12}
              preventInteractionOnTransition={true}
              centeredSlides={true}
              navigation={true}
              allowTouchMove={false}
              modules={[Navigation]}
              className="slideshowSwiper w-full"
            >
              {event.media.gallery.map((item, index) => {
                return (
                  <SwiperSlide key={`swiper-main-${index}`} className="h-full">
                    <div className="flex-1">
                      {item.type === 'image' && <Image src={item.src} alt="" className="h-full w-full" />}
                      {item.type === 'video' && (
                        <div className="video-player relative w-full ">
                          <iframe src={videoUrl} allow="autoplay" className="aspect-video"></iframe>
                          <div className={clsx(play ? 'hidden' : 'block', 'absolute bottom-0 left-0 right-0 top-0')}>
                            <Image src={event.media.main.thumbnail} alt="" className="h-full w-full" />
                            <div className="absolute top-0 flex h-full w-full items-center justify-center lg:py-10">
                              <div className="flex items-center gap-3 px-3 xs:items-start md:gap-5 md:px-10 xl:gap-10">
                                <div
                                  className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white xs:h-10 xs:w-10 md:h-16 md:w-16 xl:h-20 xl:w-20"
                                  onClick={() => handlePlay()}
                                >
                                  <Image src={PlayIcon} alt="Play icon" className="ml-[8%] h-[30%] w-[30%]" />
                                </div>
                                <div className="font-archivo text-sm font-bold uppercase text-white xs:text-22/28 md:text-4xl xl:text-36/44">
                                  {event?.media?.main?.thumbnailText}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="relative w-full">
            <Swiper
              onSwiper={setSwiperNavRef}
              slidesPerView="auto"
              breakpoints={{
                0: {
                  slidesPerView: 2.5,
                },
                425: {
                  slidesPerView: 3.5,
                },
              }}
              initialSlide={0}
              loop={true}
              spaceBetween={12}
              preventInteractionOnTransition={true}
              centeredSlides={true}
              navigation={true}
              allowTouchMove={false}
              modules={[Navigation]}
              className="slideshowSwiper w-full"
            >
              {event.media.gallery.map((item, index) => {
                return (
                  <SwiperSlide key={`swiper-nav-${index}`} className="h-full">
                    <div className="relative">
                      <Image src={item.src} alt="" className="h-full w-full" />
                      {item.type === 'video' && (
                        <div className="absolute top-0 flex h-full w-full items-center justify-center">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                            <Image src={PlayIcon} alt="Play icon" className="ml-[8%] h-[30%] w-[30%]" />
                          </div>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="prev-bg absolute -left-0.5 right-auto top-0 z-10 flex h-full items-center pr-4">
              <div
                className="cursor-pointer rounded-full hover:bg-[#E94AEA]/[.2] active:bg-[#E94AEA]/[.3]"
                onClick={handleSlidePrev}
              >
                <div className="h-10 w-10">
                  <Image src={PrevButton} alt="Previous button" className="w-full" />
                </div>
              </div>
            </div>
            <div className="next-bg absolute -right-0.5 left-auto top-0 z-10 flex h-full items-center pl-4">
              <div
                className="cursor-pointer rounded-full hover:bg-[#E94AEA]/[.2] active:bg-[#E94AEA]/[.3]"
                onClick={handleSideNext}
              >
                <div className="h-10 w-10">
                  <Image src={NextButton} alt="Next button" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-5 lg:hidden">
        <div>
          <p className="font-archivo text-lg font-bold uppercase">{event.title}</p>
        </div>
        <div>
          <p className="mb-5">{event.description}</p>
          <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-3">
            {event.logos.map((logo, index) => {
              return <Image key={`${logo}-${index}`} src={logo} alt="logo" />;
            })}
          </div>
        </div>
      </div>

      {descriptionRight && (
        <div className="relative hidden flex-col gap-5 pb-4 pl-5 lg:flex xl:pl-15">
          <div>
            <p className="font-archivo text-lg font-bold uppercase lg:text-2xl xl:text-3xl">{event.title}</p>
          </div>
          <div>
            <p className="mb-5 lg:text-lg xl:text-xl">{event.description}</p>
            <div className="flex w-full flex-wrap items-center gap-x-3 gap-y-2 lg:gap-x-7 lg:gap-y-4">
              {event.logos.map((logo, index) => {
                return <Image key={`${logo}-${index}`} src={logo} alt="logo" />;
              })}
            </div>
          </div>
          <Gallery gallery={event.media.gallery.filter((item) => item.type === 'image')} />
        </div>
      )}
    </div>
  );
};

export default SnapshotEvent;
