import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

import factions from "./data/factions";
import characters from "./data/characters";

import SectionContainer from "../components/SectionContainer";
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";
import CharaWeaponFrame from "../components/CharaWeaponFrame";

export default function Characters() {
  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  const [activeFaction, setActiveFaction] = useState(factions[0]);

  const handleFactionSlideChange = (swiper) => {
    setActiveFaction(factions[swiper.realIndex]);
  };

  const handleNextDesktop = () => {
    desktopSwiperRef.current?.swiper.slideNext();
  };

  const handlePrevDesktop = () => {
    desktopSwiperRef.current?.swiper.slidePrev();
  };

  const handleNextMobile = () => {
    mobileSwiperRef.current?.swiper.slideNext();
  };

  const handlePrevMobile = () => {
    mobileSwiperRef.current?.swiper.slidePrev();
  };

  return (
    <SectionContainer
      className="min-h-screen"
      id="characters"
      backgroundImage="url('/factions-selection-bg.webp')"
      isFullWidth={true}
    >
      <div className="absolute top-24 lg:top-25 z-20 h-1/6 flex flex-col items-center md:mt-5 mb-20 lg:mb-0">
        <img
          src="/title-card.webp"
          className="w-[280px] md:w-[350px]"
          alt="Brimvahl-Crown-Title-Card"
        />
        <div className="absolute top-4 md:top-6 w-full flex justify-center items-center text-2xl md:text-4xl mt-1">
          Characters
        </div>
      </div>

      <div className="hidden xl:flex w-full items-stretch h-full relative z-5">
        {/* Left side */}
        <div className="w-2/5 flex flex-col justify-center items-center xl:pl-16 pr-2">
          <div className="relative mt-[50px]">
            <img
              src="/title-card.webp"
              className="w-[380px]"
              alt="Brimvahl-Crown-Title-Card"
            />
            <div className="absolute top-7 w-full flex justify-center items-center text-4xl">
              {activeFaction?.name}
            </div>
          </div>

          <div className="relative flex flex-col items-center w-7/8 mt-10">
            <img
              src="/text-card.webp"
              className="w-full h-full absolute top-0"
              alt="Brimvahl-Crown-Text-Card"
            />
            <div className="w-3/4 text-base relative py-8">
              <p className="w-full">{activeFaction?.desc}</p>
            </div>
          </div>
        </div>

        {/* Middle side */}
        <div className="w-1/5 h-full flex flex-col items-center relative">
          <div className="absolute top-0 w-full h-full flex flex-col items-center -z-10">
            <div className="h-1/3 w-full bg-[#101010]" />
            <div className="h-1/3 w-full bg-[#2A2A2A]" />
            <div className="h-1/3 w-full bg-[#101010]" />
          </div>

          {/* Swiper */}
          <div className="flex flex-col h-screen justify-center w-full">
            <div className="w-full h-full flex flex-col items-center gap-5 relative">
              {/* Arrow Top */}
              <div className="absolute z-5 top-[30vh] bg-white rounded-full h-15 w-15 flex items-center justify-center cursor-pointer">
                <ArrowLeft
                  className="rotate-[90deg] scale-[0.8]"
                  onClick={handlePrevDesktop}
                />
              </div>

              <Swiper
                direction="vertical"
                onSlideChange={handleFactionSlideChange}
                className="w-full h-full cursor-grab"
                slidesPerView={3}
                centeredSlides
                ref={desktopSwiperRef}
                loop
              >
                {factions.map((f, index) => (
                  <SwiperSlide
                    key={index}
                    onClick={() =>
                      desktopSwiperRef.current?.swiper.slideToLoop(index)
                    }
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div
                        className={`rounded-full flex items-center justify-center transition-all duration-300
                          w-44 h-44 md:w-56 md:h-56
                          ${
                            activeFaction.slug === f.slug
                              ? "bg-[#d9d9d9] scale-105"
                              : "bg-[#d9d9d9]/70"
                          }`}
                      >
                        <img
                          src={f.logo}
                          alt={f.name}
                          className={`object-contain transition-all duration-300
                            w-28 h-28 md:w-44 md:h-44 rounded-full
                            ${
                              activeFaction.slug === f.slug
                                ? "brightness-100"
                                : "brightness-75"
                            }`}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Arrow Bottom */}
              <div className="absolute z-5 bottom-[30vh] bg-white rounded-full h-15 w-15 flex items-center justify-center cursor-pointer">
                <ArrowRight
                  className="rotate-[90deg] scale-[0.8]"
                  onClick={handleNextDesktop}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-2/5 h-full relative">
          <div className="w-full h-9/20 bg-white">
            <img
              className="w-full h-full object-cover object-center"
              src={activeFaction?.banner}
              alt={activeFaction?.name}
            />
          </div>
          <div className="w-full h-11/20 flex items-start py-3 px-10">
            <div className="w-fit grid-container">
              {characters
                .filter((c) => c.faction === activeFaction.slug)
                .map((c, index) => (
                  <Link
                    to={`/characters/${c.slug}`}
                    key={index}
                    className="w-25 flex items-center justify-center hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] cursor-pointer"
                  >
                    <CharaWeaponFrame className="w-30" img={c.sprite} customImageClassName={c.customImageClassName} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tab */}
      <div className="flex flex-col xl:hidden w-full items-stretch relative z-10 pb-32 ">
        <div className="w-full flex flex-col items-center mt-50 lg:mt-60">
          <div className="bg-white w-full">
            <img
              className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover object-center"
              src={activeFaction?.banner}
              alt={activeFaction?.name}
            />
          </div>

          <div className="w-full flex flex-wrap justify-center gap-3 py-5 px-6 mt-6">
            {characters
              .filter((c) => c.faction === activeFaction.slug)
              .map((c, index) => (
                <Link
                  to={`/res/characters/${c.slug}`}
                  key={index}
                  className="w-16 lg:w-32 flex items-center justify-center hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] cursor-pointer"
                >
                  <CharaWeaponFrame className="w-20" img={c.sprite} customImageClassName={c.customImageClassName} />
                </Link>
              ))}
          </div>
        </div>

        <div className="relative w-full flex items-center justify-center my-8">
          <div className="absolute top-0 w-full h-full flex -z-10">
            <div className="h-full w-1/3 bg-[#101010]" />
            <div className="h-full w-1/3 bg-[#2A2A2A]" />
            <div className="h-full w-1/3 bg-[#101010]" />
          </div>

          {/* Swiper */}
          <Swiper
            direction="horizontal"
            onSlideChange={handleFactionSlideChange}
            className="w-full h-[140px] lg:h-[220px] cursor-grab relative z-10"
            slidesPerView={3}
            spaceBetween={10}
            centeredSlides
            ref={mobileSwiperRef}
            loop
          >
            {factions.map((f, index) => (
              <SwiperSlide
                key={index}
                onClick={() => mobileSwiperRef.current?.swiper.slideToLoop(index)}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className={`rounded-full flex items-center justify-center transition-all duration-300
                      w-24 lg:w-42 h-24 lg:h-42
                      ${
                        activeFaction.slug === f.slug
                          ? "bg-[#d9d9d9] scale-105"
                          : "bg-[#d9d9d9]/70"
                      }`}
                  >
                    <img
                      src={f.logo}
                      alt={f.name}
                      className={`object-contain transition-all duration-300
                        w-16 lg:w-32 h-16 lg:h-32 rounded-full
                        ${
                          activeFaction.slug === f.slug
                            ? "brightness-100"
                            : "brightness-75"
                        }`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrow Left */}
          <button
            onClick={handlePrevMobile}
            className="absolute left-[29%] lg:left-[31%] top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white text-black rounded-full h-8 lg:h-12 w-8 lg:w-12 flex items-center justify-center shadow-lg"
          >
            <ArrowLeft className="w-5 lg:w-8 h-5 lg:h-8" />
          </button>

          {/* Arrow Right */}
          <button
            onClick={handleNextMobile}
            className="absolute right-[29%] lg:right-[31%] top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white text-black rounded-full h-8 lg:w-12 w-8 lg:h-12 flex items-center justify-center shadow-lg"
          >
            <ArrowRight className="w-5 lg:w-8 h-5 lg:h-8" />
          </button>
        </div>

        <div className="flex flex-col items-center px-4 pt-5">
          <div className="relative mb-4">
            <img
              src="/title-card.webp"
              className="w-[280px]"
              alt="Brimvahl-Crown-Title-Card"
            />
            <div className="absolute top-6 w-full flex justify-center items-center text-xl font-semibold">
              {activeFaction?.name}
            </div>
          </div>

          <div className="relative flex flex-col items-center w-full mt-4">
            <img
              src="/text-card.webp"
              className="w-full lg:w-3/4 h-full absolute top-0"
              alt="Brimvahl-Crown-Text-Card"
            />
            <div className="w-4/5 lg:w-2/3 text-sm relative py-5 lg:py-8 text-center leading-relaxed">
              <p>{activeFaction?.desc}</p>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/pillar-left.webp"
        className="hidden xl:block absolute h-screen top-0 left-0 z-9"
        alt="pillar-left"
      />
      <img
        src="/pillar-right.webp"
        className="hidden xl:block absolute h-screen top-0 right-0 z-9"
        alt="pillar-right"
      />

      <div className="w-full absolute bottom-0 z-10 flex gap-6 h-[100px]">
        <img
          src="/battlements-bottom.webp"
          className="w-full h-full absolute"
          alt="battlements"
        />
      </div>
    </SectionContainer>
  );
}
