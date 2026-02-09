import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import SectionContainer from "../../../components/SectionContainer"
import ArrowLeft from "../../../components/ArrowLeft";
import ArrowRight from "../../../components/ArrowRight";

const news = [
  {
    id: 1,
    type: 'image',
    source: '/res/news-and-info/deathlessking-cv.webp',
    desc: 'Andrew Russell ascends the throne as the Deathless King. With a voice already honed in the fires of villainy, he is destined to crown this game with a performance of terrifying power and unforgettable presence.'
  },
  {
    id: 2,
    type: 'image',
    source: '/res/news-and-info/flaire-cv.webp',
    desc: 'Stepping into the spotlight as the enigmatic Flaire Eldryn is the talented Lizzie Freeman. But forget the heroes you know! This time, Lizzie unveils her voice as a sophisticated and cunning villainess, a role she sought to conquer for a new artistic challenge.'
  },
  {
    id: 3,
    type: 'image',
    source: '/res/news-and-info/kazmiel-official-trailer.webp',
    desc: 'At the heart of our tale stands Brenna Larsen, who embodies our lead role, Kazmiel Australis Elandys. With a performance of profound emotional depth, she doesn\'t just tell a story, she breathes life into it, elevating our narrative to an art form.'
  },
];

export default function NewsAndInfo() {
  const swiperRef = useRef(null);

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

  const [activeNews, setActiveNews] = useState(news[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    const currentCharacter = news[currentIndex];
    setActiveNews(currentCharacter);
  };

  return (
    <SectionContainer
      className="h-fit xl:min-h-screen px-4 md:px-0"
      id="news-and-info"
      backgroundImage="url('/news-and-info-section-bg.webp')"
    >
      <div className="w-full flex flex-col items-center justify-center relative mb-10 md:mb-20">
        {/* Background */}
        <img
          src="/wooden-board.webp"
          className="w-full md:w-3/4 h-[300px] md:h-[650px] absolute top-10 md:top-20"
          alt="Brimvahl-Crown-News-And-Info-Board"
        />

        {/* Content */}
        <div className="w-full md:w-1/2 relative">
          {/* Section Title */}
          <div className="h-1/6 relative mt-8 md:mt-20 flex justify-center items-center">
            <img
              src="/title-card.webp"
              className="w-[250px] md:w-[400px]"
              alt="Brimvahl-Crown-Title-Card"
            />
            <div className="font-3 font-bold absolute top-5 md:top-5 lg:top-9 w-full flex justify-center items-center text-lg sm:text-xl md:text-3xl lg:text-4xl">
              News and Info
            </div>
          </div>

          <div className="relative w-full flex items-center">
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                onSlideChange={handleSlideChange}
                className="cursor-grab w-5/6 xl:w-full bg-black rounded-xl md:rounded-3xl aspect-video md:top-8" 
                slidesPerView={1}
                ref={swiperRef}
                loop
              >
                {news.map((n, index) => {
                  if (n.type === 'image') {
                    return (
                      <SwiperSlide key={index}>
                        <img
                          src={n.source}
                          className="w-full h-full object-cover rounded-xl"
                          alt="Brimvahl-Crown-News-And-Info"
                        />
                      </SwiperSlide>
                    )
                  } else if (n.type === 'video') {
                    return (
                      <SwiperSlide key={index}>
                        <video className="w-full h-full rounded-xl" controls>
                          <source src={n.source} type={`video/${n.source.split('.').pop()}`} />
                        </video>
                      </SwiperSlide>
                    )
                  } else if (n.type === 'youtube') {
                    return (
                      <SwiperSlide key={index}>
                        <iframe
                          className="w-full h-full rounded-xl"
                          src={n.source}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </SwiperSlide>
                    )
                  }
                })}
              </Swiper>

              {/* Navigations */}
              <ArrowLeft 
                onClick={handlePrev} 
                className="absolute left-5 z-10 xl:mt-14" 
              />

              <ArrowRight 
                onClick={handleNext} 
                className="absolute right-5 z-10 xl:mt-14" 
              />
          </div>
        </div>

        {/* Card */}
        <div className="relative flex flex-col items-center w-full md:w-3/5 mt-2 sm:mt-6 md:mt-10">
          <div className="relative w-11/12 md:w-5/6">
            <img src="text-card.webp" className="w-full h-auto"alt="Brimvahl-Crown-Text-Card"/>
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <p className="text-center text-sm md:text-lg px-4">{activeNews.desc}</p>
            </div>
          </div>
        </div>

      </div>
    </SectionContainer>
  )
}
