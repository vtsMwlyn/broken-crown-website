import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import allFanarts from "./data/fan-arts";

import SectionContainer from "../components/SectionContainer";
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";

function HorizontalFanArtCard({ fanart }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-full relative flex items-center justify-center">
        <img
          src="/fanart-card-horizontal.webp"
          className="w-[280px] h-[200px] sm:w-[400px] sm:h-[280px] lg:w-[580px] lg:h-[400px]"
          alt="Brimvahl-Crown-Fan-Art-Border"
        />
        <img
          src={fanart?.image}
          className="absolute z-5 w-[240px] h-[160px] sm:w-[340px] sm:h-[220px] lg:w-[500px] lg:h-[320px] object-cover object-center rounded-2xl"
          alt="Brimvahl-Crown-Fan-Art"
        />
      </div>
      <p className="text-white text-start w-full text-sm sm:text-lg lg:text-xl mt-2 sm:mt-4 pl-2 sm:pl-4">
        {fanart?.title}, {fanart?.name}
      </p>
    </div>
  );
}

function VerticalFanArtCard({ fanart }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-full relative flex items-center justify-center">
        <img
          src="/fanart-card-vertical.webp"
          className="w-[200px] h-[300px] sm:w-[280px] sm:h-[420px] lg:w-[380px] lg:h-[580px]"
          alt="Brimvahl-Crown-Fan-Art-Border"
        />
        <img
          src={fanart?.image}
          className="absolute z-5 w-[160px] h-[240px] sm:w-[220px] sm:h-[340px] lg:w-[300px] lg:h-[500px] object-cover object-center rounded-2xl"
          alt="Brimvahl-Crown-Fan-Art"
        />
      </div>
      <p className="text-white text-start w-full text-sm sm:text-lg lg:text-xl mt-2 sm:mt-4 pl-2 sm:pl-4">
        {fanart?.title}, {fanart?.name}
      </p>
    </div>
  );
}

export default function FanArts() {
  const fanarts = allFanarts;
  const swiperRef = useRef(null);

  function handleNext() {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  }

  function handlePrev() {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  }

  return (
    <SectionContainer
      className="py-20 sm:py-32 lg:py-40"
      backgroundImage="url('/fanarts-bg.webp')"
      id="fan-arts"
    >
      <div className="w-full flex flex-col items-center">
        <div className="mt-24 sm:mt-0 mb-10 sm:mb-16 lg:mb-20 flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white font-3 font-bold">
            Fan Art Gallery
          </h1>
          <img  src="/underline-white.webp"  className="w-2/3 sm:w-1/2 lg:w-1/3"  alt="Brimvahl-Crown-Underline"/>
        </div>

        <Swiper
          className="w-full cursor-grab"
          ref={swiperRef}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          slidesPerView={1}
          loop={true}
        >
          {fanarts.map((f, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center">
                {/* First row (landscape) */}
                <div className="w-fit grid gap-5 sm:gap-10 lg:gap-30 grid-cols-1 sm:grid-cols-2">
                  <HorizontalFanArtCard fanart={f[0]} />
                  <HorizontalFanArtCard fanart={f[1]} />
                </div>

                {/* Second row (portrait) */}
                <div className="w-fit grid gap-3 sm:gap-5 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:mt-10">
                  <VerticalFanArtCard fanart={f[2]} />
                  <VerticalFanArtCard fanart={f[3]} />
                  <VerticalFanArtCard fanart={f[4]} />
                </div>

                {/* Third row (landscape) */}
                <div className="w-fit grid gap-5 sm:gap-10 lg:gap-30 grid-cols-1 sm:grid-cols-2 mt-6 sm:mt-10">
                  <HorizontalFanArtCard fanart={f[5]} />
                  <HorizontalFanArtCard fanart={f[6]} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}
        <ArrowLeft onClick={handlePrev} className="absolute bottom-22 sm:bottom-20 left-5 sm:left-20 z-10" type={2} />
        <ArrowRight  onClick={handleNext} className="absolute bottom-22 sm:bottom-20 right-5 sm:right-20 z-10" type={2}/>
      </div>
      
    </SectionContainer>
  );
}
