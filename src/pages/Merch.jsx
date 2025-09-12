import merchs from "./data/merchs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useRef } from "react";
import { Link } from "react-router-dom";

import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";

function HorizontalMerchCard({ merch }) {
  return (
    <Link
      to={merch?.link}
      target="_blank"
      className="w-full flex flex-col items-center relative hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] cursor-pointer"
    >
      {/* MOBILE */}
      <div className="flex lg:hidden relative flex-col items-center">
        <img
          src="/merch-card-horizontal.webp"
          className="w-[250px] h-[150px]"
          alt="Brimvahl-Crown-Merch-Border"
        />
        <img
          src={merch?.image}
          className="absolute top-4 w-[200px] h-[110px] object-cover object-center rounded-2xl "
          alt={merch?.title}
        />
        <div
          className="w-[200px] h-[50px] md:w-[240px] md:h-[60px] flex items-center justify-center -mt-2" 
          style={{ background: `url('/merch-label.webp') no-repeat center center / cover` }}
        >
          <div className="text-center text-base md:text-lg">{merch?.title}</div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex relative flex-col items-start">
        <div className="w-full h-full relative flex items-center justify-center">
          <img
            src="/merch-card-horizontal.webp"
            className="w-[400px] h-[250px]"
            alt="Brimvahl-Crown-Merch-Border"
          />
          <img
            src={merch?.image}
            className="absolute z-5 w-[220px] xl:w-[250px] h-[180px] xl:h-[200px] object-cover object-center rounded-2xl"
            alt={merch?.title}
          />
        </div>
        <div
          className="w-fit h-fit py-2 px-4 absolute left-5 bottom-[-25px] xl:bottom-[-15px] z-5"
          style={{ background: `url('/merch-label.webp') no-repeat center center / cover` }}
        >
          <div className="text-center text-xl">{merch?.title}</div>
        </div>
      </div>
    </Link>
  )
}

function TableMerch({ merch }) {
  return (
    <Link
      to={merch?.link}
      target="_blank"
      className="relative w-full lg:max-w-[300px] hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] cursor-pointer"
    >
      <div className="relative w-full h-70 lg:h-90 flex flex-col items-center">
        <img  
          src={merch?.image}
          className="ml-2 lg:ml-5 h-40 lg:h-60 relative z-5 left-0 bottom-[-5px] lg:bottom-[-10px] object-contain object-bottom"
          alt={merch?.title}/>

        <img src="/merch-carpet.webp" className="w-50 lg:w-60 absolute lg:left-0 top-40 lg:top-56 ml-4 lg:ml-10" alt="carpet"/>

        <div
          className="w-fit h-fit py-1 px-2 lg:py-2 lg:px-4 absolute left-20 lg:left-0 top-50 lg:top-65"
          style={{ background: `url('/merch-label.webp') no-repeat center center / cover` }} >
          <div className="text-center text-base lg:text-2xl">{merch?.title}</div>
        </div>
      </div>
    </Link>
  )
}

export default function Merch() {
  const swiperRef = useRef(null);         
  const tabletSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null); 

  // Desktop handler
  function handleNext() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  function handlePrev() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Tablet handler
  const handleNextTablet = () => {
    if (tabletSwiperRef.current) {
      tabletSwiperRef.current.swiper?.slideNext();
    }
  };

  const handlePrevTablet = () => {
    if (tabletSwiperRef.current) {
      tabletSwiperRef.current.swiper?.slidePrev();
    }
  };

  // Mobile handler
  const handleNextMobile = () => {
    if (mobileSwiperRef.current) {
      mobileSwiperRef.current.swiper?.slideNext();
    }
  };

  const handlePrevMobile = () => {
    if (mobileSwiperRef.current) {
      mobileSwiperRef.current.swiper?.slidePrev();
    }
  };

  return (
    <div
      className="w-full flex justify-center relative lg:min-h-screen"
      style={{ background: `url('/merch-bg.webp') no-repeat center center / cover` }}
    >
      <div className="w-full flex flex-col justify-between items-center">
        <div className="flex flex-col items-center mt-28 md:mt-60 lg:mt-36 text-center">
          <h1 className="text-2xl lg:text-5xl text-white font-3 font-bold">
            Merch Store
          </h1>
          <img
            src="/underline-white.webp"
            className="w-1/2 lg:w-2/5"
            alt="Brimvahl-Crown-Underline"
          />
        </div>

        <div className="w-11/12 xl:w-5/6 flex flex-col items-center mt-10">
          <div className="w-full flex justify-start">
            <div className="w-full lg:w-3/5 xl:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
              {merchs.featured.map((m, index) => (
                <HorizontalMerchCard key={index} merch={m} />
              ))}
            </div>
          </div>
        </div>

        {/* Table merch area */}
        <div className="w-full flex items-center justify-center gap-10 lg:gap-20 relative bottom-0">
          <img
            src="/merch-table.webp"
            className="absolute w-[95%] h-[140px] bottom-0 z-0 lg:w-full lg:h-full lg:pt-20"
            alt="Brimvahl-Crown-Merch-Table"
          />

          <img
            src="/merch-npc.webp"
            className="hidden lg:block absolute right-2 bottom-[140px] h-[160px] z-10 lg:right-25 xl:right-80 lg:bottom-120 lg:h-[600px]"
            alt="Brimvahl-Crown-Merch-NPC"
          />

          <div className="hidden xl:block w-full z-20" id="merchs">
            <Swiper
              className="w-full cursor-grab"
              ref={swiperRef}
              spaceBetween={20}
              simulateTouch={false}
              loop={true}
              slidesPerView={6}
            >
              {merchs.others.map((m, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div> 
                    <TableMerch merch={m} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <ArrowLeft onClick={handlePrev} className="absolute left-120 z-30 bottom-10" type={2}/>
            <ArrowRight onClick={handleNext} className="absolute right-120 z-30 bottom-10" type={2} />
          </div>

          <div className="hidden lg:block xl:hidden w-full z-20 mb-30">
            <Swiper
              className="w-full cursor-grab"
              ref={tabletSwiperRef}
              spaceBetween={60}
              simulateTouch={false}
              loop={true}
              slidesPerView={4}
            >
              {merchs.others.map((m, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div> 
                    <TableMerch merch={m} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <ArrowLeft onClick={handlePrevTablet} className="absolute left-60 z-30 bottom-10" type={2}/>
            <ArrowRight onClick={handleNextTablet} className="absolute right-60 z-30 bottom-10" type={2} />
          </div>

          <div className="block lg:hidden w-full z-20">
            <Swiper
              className="w-full cursor-grab"
              ref={mobileSwiperRef}
              centeredSlides={true}
              simulateTouch={false}
              loop={true}
              slidesPerView={1}
            >
              {merchs.others.map((m, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div> 
                    <TableMerch merch={m} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <ArrowLeft onClick={handlePrevMobile} className="absolute left-5 z-30 bottom-30" type={2}/>
            <ArrowRight onClick={handleNextMobile} className="absolute right-5 z-30 bottom-30" type={2} />
          </div>
        </div>
      </div>
    </div>
  )
}
