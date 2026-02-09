import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import SectionContainer from "../../../components/SectionContainer";
import ArrowLeft from "../../../components/ArrowLeft";
import ArrowRight from "../../../components/ArrowRight";

const features = [
  {
    id: 1,
    src: '/assets/gameplay-features/boss-fight.mp4',
    type: 'video',
    ext: 'mp4',
    desc: 'Engage in classic one on one cinematic boss fights with quick time events.'
  },
  {
    id: 2,
    src: '/assets/gameplay-features/comic.webp',
    type: 'image',
    ext: 'webp',
    desc: 'Fully voiced visual novel and comics where choices affects the combat! (Yes even the side quests are voiced)'
  },
  {
    id: 3,
    src: '/assets/gameplay-features/armor.mp4',
    type: 'video',
    ext: 'mp4',
    desc: 'Mix and match Kazmiel\'s armor and make her the best version of herself.'
  },
];

export default function GameplayFeature() {
  const swiperRef = useRef(null);
  const [activeFeatures, setActiveFeatures] = useState(features[0]);

  function handleNext() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  }

  function handlePrev() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  }

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveFeatures(features[currentIndex]);
  };

  return (
    <SectionContainer
      className="h-fit xl:min-h-screen mb-10 md:mb-20 px-4"
      id="gameplay-feature"
      backgroundImage="url('/gameplay-feature-section-bg.webp')"
    >
      <div className="h-full w-full flex flex-col items-center justify-center relative z-10">
        {/* Border */}
        <div className="hidden lg:block absolute inset-0 max-h-[900px] w-full max-w-[1500px] px-10 lg:px-30 py-10 lg:py-20">
          <img src="/fancy-border.webp" className="h-full w-full" alt="Brimvahl-Crown-Fancy-Border"/>
        </div>

        {/* Section Title */}
        <div className="relative z-10 mt-8 md:mt-20 flex justify-center">
          <img src="/title-card.webp" className="w-[250px] md:w-[530px]" alt="Brimvahl-Crown-Title-Card" />
          <div className="font-3 font-bold absolute top-5 sm:top-5 md:top-14 lg:top-13 w-full flex justify-center items-center text-lg sm:text-xl md:text-3xl lg:text-4xl">
					Gameplay Features
				</div>

        </div>

        {/* Slider */}
        <div className="relative w-full md:w-4/5 lg:w-3/4 mt-6 md:mt-[-60px]">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}
            className="cursor-grab w-full aspect-[4/3] md:aspect-video bg-white rounded-[50px] md:rounded-[350px_350px_100px_100px] z-5"
            slidesPerView={1}
            ref={swiperRef}
            loop
          >
            {features.map((n, index) => (
              <SwiperSlide key={index}>
                {n.type === 'image' && (
                  <img src={n.src} className="w-full h-full object-cover rounded-[50px] md:rounded-[350px_350px_100px_100px]" alt="Brimvahl-Crown-Features" />
                )}
                {n.type === 'video' && (
                  <video autoPlay muted loop className="w-full h-full object-cover rounded-[50px] md:rounded-[350px_350px_100px_100px]">
                    <source src={n.src} type={`${n.type}/${n.ext}`} />
                  </video>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigations */}
          <ArrowLeft onClick={handlePrev} className="absolute left-2 md:left-5 z-10 top-1/2 -translate-y-1/2" />
          <ArrowRight onClick={handleNext} className="absolute right-2 md:right-5 z-10 top-1/2 -translate-y-1/2" />
        </div>

        {/* Card */}
        <div className="relative flex flex-col items-center w-full md:w-3/5 z-10 mt-[-60px]">
          <img src="/text-paper.webp" className="w-11/12 md:w-full h-full absolute top-0" alt="Brimvahl-Crown-Text-Card" />
          <div className="w-5/6 relative py-6 sm:py-8 md:py-10">
            <p className="relative text-center text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              {activeFeatures.desc}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
