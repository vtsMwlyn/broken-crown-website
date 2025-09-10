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
          className="w-[250px] h-[150px] md:w-[300px] md:h-[180px]"
          alt="Brimvahl-Crown-Merch-Border"
        />
        <img
          src={merch?.image}
          className="absolute top-4 w-[180px] h-[120px] md:w-[220px] md:h-[150px] object-cover object-center rounded-2xl "
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
            className="absolute z-5 w-[250px] h-[200px] object-cover object-center rounded-2xl"
            alt={merch?.title}
          />
        </div>
        <div
          className="w-fit h-fit py-2 px-4 absolute left-5 bottom-[-15px] z-5"
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
      className="relative max-w-[200px] lg:max-w-[300px] h-90 flex flex-col items-center hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] cursor-pointer"
    >

      <div className="lg:hidden relative flex flex-col items-center -translate-y-6 -translate-x-4">
        <img src={merch?.image} className="h-36 md:h-48 object-contain object-bottom z-10" alt={merch?.title}/>

        <div className="relative flex flex-col items-center -mt-2">
          <img src="/merch-carpet.webp" className="w-32 md:w-40 z-0" alt="carpet"/>
          <div className="w-fit h-fit py-1 px-2 md:py-2 md:px-4 -mt-1"
            style={{ background: `url('/merch-label.webp') no-repeat center center / cover`, }}
          >
            <div className="text-center text-base md:text-lg">{merch?.title}</div>
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block relative">
        <img
          src={merch?.image}
          className="ml-2 lg:ml-5 h-40 lg:h-60 relative z-5 left-0 bottom-[-5px] lg:bottom-[-10px] object-contain object-bottom"
          alt={merch?.title}/>

        <img src="/merch-carpet.webp" className="w-40 lg:w-60 absolute left-0 top-52 lg:top-56 ml-4 lg:ml-10" alt="carpet"/>

        <div
          className="w-fit h-fit py-1 px-2 lg:py-2 lg:px-4 absolute left-0 top-65"
          style={{ background: `url('/merch-label.webp') no-repeat center center / cover` }} >
          <div className="text-center text-base lg:text-2xl">{merch?.title}</div>
        </div>
      </div>
    </Link>
  )
}

export default function Merch() {
  const swiperRef = useRef(null);         
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

  // Mobile handler
  const handleNextMobile = () => {
    mobileSwiperRef.current?.slideNext();
  };

  const handlePrevMobile = () => {
    mobileSwiperRef.current?.slidePrev();
  };

  return (
    <div
      className="w-full flex justify-center relative min-h-screen"
      id="merchs"
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

        <div className="w-11/12 xl:w-5/6 flex flex-col items-center mt-8 lg:mt-40">
          <div className="w-full flex justify-start">
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
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
            className="hidden lg:block absolute right-2 bottom-[140px] h-[160px] z-10 lg:right-100 lg:bottom-120 lg:h-[600px]"
            alt="Brimvahl-Crown-Merch-NPC"
          />

          {/* MOBILE + TABLET  */}
          <div className="block lg:hidden w-full z-20 relative">
            <Swiper
              spaceBetween={40}
              slidesPerView="auto"
              loop={false}
              simulateTouch={true}
              centeredSlides={true}
              className="cursor-grab mobile-swiper flex justify-center"
              onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
              breakpoints={{
                0: {   
                  slidesPerView: "auto",
                  spaceBetween: 40,
                  centeredSlides: true,
                },
                640: { 
                  slidesPerView: 1,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
              }}
            >
              {merchs.others.map((m, index) => (
                <SwiperSlide
                  key={index}
                  className="!flex justify-center !transform-none !translate-y-0 md:-translate-y-6"
                >
                  <div className="translate-y-50 lg:translate-y-0">
                    <TableMerch merch={m} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <ArrowLeft onClick={handlePrevMobile}  className="absolute bottom-40 left-2 z-30 rounded-full p-2" type={1} />
            <ArrowRight onClick={handleNextMobile}  className="absolute bottom-40 right-2 z-30 rounded-full p-2"  type={1}  />
          </div>

          {/* DESKTOP SWIPER */}
          <div className="hidden lg:block w-full z-20">
            <Swiper
              className="w-full cursor-grab"
              ref={swiperRef}
              spaceBetween={20}
              simulateTouch={false}
              loop={true}
              breakpoints={{
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 6 },
              }}
            >
              {merchs.others.map((m, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="translate-y-[-70px] lg:translate-y-0"> 
                    <TableMerch merch={m} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <ArrowRight onClick={handlePrev} className="absolute bottom-[40px] left-6 z-30 lg:bottom-10 lg:left-200" type={2}/>
            <ArrowLeft onClick={handleNext} className="absolute bottom-[40px] right-6 z-30 lg:bottom-10 lg:right-200" type={2} />
          </div>
        </div>
      </div>
    </div>
  )
}
