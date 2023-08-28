/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import SeeMoreIcon from '@/assets/images/LandingPage/see-more.svg';
import MenuClose from '@/assets/images/LandingPage/nav-menu-close.svg';
import { useState } from 'react';
import ExpandIcon from '@/assets/images/LandingPage/expand.svg';
import ShrinkIcon from '@/assets/images/LandingPage/shrink.svg';
import NextButton from '@/assets/images/LandingPage/swiper-next.svg';
import PrevButton from '@/assets/images/LandingPage/swiper-prev.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

interface IProps {
  gallery: any;
}

const Gallery = ({ gallery }: IProps) => {
  const [swiperGalleryRef, setSwiperGalleryRef] = useState<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClose = () => {
    setIsFullscreen(false);
    setIsOpen(false);
  };

  const handleFullscreen = (index: number) => {
    setIsFullscreen(true);
    setCurrentIndex(index);
  };

  return (
    <>
      <div
        className="absolute bottom-0 right-0 flex cursor-pointer items-center gap-1.5 rounded-full border-2 border-solid border-[#E94AEA] px-6 py-2.5 hover:bg-[#E94AEA]/[.2] active:bg-[#E94AEA]/[.3]"
        onClick={() => setIsOpen(true)}
      >
        <div>
          <p className="font-bold uppercase text-[#E94AEA]">See More</p>
        </div>
        <div>
          <Image src={SeeMoreIcon} alt="See More Icon" />
        </div>
      </div>
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[100] overflow-scroll bg-black/[.85]">
          <div className="relative mx-auto flex h-full max-w-screen-3xl items-center justify-center px-[8%] pt-15">
            {!isFullscreen ? (
              <div className="grid h-full w-full auto-rows-max grid-cols-4 gap-5 overflow-scroll">
                {gallery.map((item, index) => {
                  return (
                    <div
                      key={`gallery-grid-${index}`}
                      className="gallery-image-container relative h-fit cursor-pointer"
                      onClick={() => handleFullscreen(index)}
                    >
                      <Image src={item.src} alt="" />
                      <div className="gallery-image-overlay absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black/80">
                        <div className="flex items-center gap-2">
                          <div>
                            <p className="font-bold uppercase text-[#E94AEA]">Full Screen</p>
                          </div>
                          <Image src={ExpandIcon} alt="Expand Icon" width={14} height={14} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="align-center flex flex-col justify-center justify-self-center">
                <div className="relative mx-auto w-[60vw]">
                  <Swiper
                    onSwiper={setSwiperGalleryRef}
                    slidesPerView={1}
                    initialSlide={currentIndex}
                    loop={true}
                    spaceBetween={40}
                    preventInteractionOnTransition={true}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="slideshowSwiper w-full"
                  >
                    {gallery.map((item, index) => {
                      return (
                        <SwiperSlide key={`swiper-gallery-${index}`} className="h-full">
                          <div className="">
                            <Image src={item.src} alt="" className="mx-auto h-full w-full" />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <div className="absolute -left-5 right-auto top-0 z-10 flex h-full -translate-x-full items-center">
                    <div
                      className="cursor-pointer rounded-full hover:bg-[#E94AEA]/[.2] active:bg-[#E94AEA]/[.3]"
                      onClick={() => swiperGalleryRef?.slidePrev()}
                    >
                      <div className="h-12 w-12">
                        <Image src={PrevButton} alt="Previous button" className="w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-5 left-auto top-0 z-10 flex h-full translate-x-full items-center">
                    <div
                      className="cursor-pointer rounded-full hover:bg-[#E94AEA]/[.2] active:bg-[#E94AEA]/[.3]"
                      onClick={() => swiperGalleryRef?.slideNext()}
                    >
                      <div className="h-12 w-12">
                        <Image src={NextButton} alt="Next button" className="w-full" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center py-7" onClick={() => setIsFullscreen(false)}>
                  <div className="flex cursor-pointer items-center justify-center gap-2">
                    <div>
                      <p className="font-bold uppercase text-[#E94AEA]">Back to Gallery</p>
                    </div>
                    <Image src={ShrinkIcon} alt="Expand Icon" />
                  </div>
                </div>
              </div>
            )}
            <div onClick={handleClose} className="absolute right-8 top-8 cursor-pointer">
              <Image src={MenuClose} alt="Close" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
