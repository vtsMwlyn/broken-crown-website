// checkpoint undo
import { useRef, useState } from "react";
import { PageFlip } from "page-flip";
import "../flipbook.css";
import backgrounds from "./data/backgrounds";

import SectionContainer from "../components/SectionContainer";
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";
import { useEffect } from "react";

function Flipbook({ onNextClick, onPrevClick }) {
  const bookRef = useRef(null);
  const pageFlipInstance = useRef(null);

  const handleNextPage = () => {
    if (pageFlipInstance.current) {
      onNextClick();
      pageFlipInstance.current.flipNext();
    }
  };

  const handlePrevPage = () => {
    if (pageFlipInstance.current) {
      onPrevClick();
      pageFlipInstance.current.flipPrev();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bookRef.current) {
        pageFlipInstance.current = new PageFlip(bookRef.current, {
          width:
            window.innerWidth >= 2500 // 3XL | layar dekstop ~~~✅
              ? 700
              : window.innerWidth >= 1700 // 2XL | layar dekstop✅
              ? 583
              : window.innerWidth >= 1280 // XL | leptop L✅
              ? 420
              : window.innerWidth >= 1024 // LG | leptop✅
              ? 327
              : window.innerWidth >= 768 // MD | tablet
              ? 281
              : window.innerWidth >= 640 // SM | hp l
              ? 210
              : window.innerWidth >= 425 // extra sm : hp m
              ? 140
              : 123,
          height:
            window.innerWidth >= 2500 //layar dekstop ~~~✅
              ? 718
              : window.innerWidth >= 1700 //layar dekstop✅
              ? 645
              : window.innerWidth >= 1280 //layar dekstop✅
              ? 431
              : window.innerWidth >= 1024 // LG | leptop✅
              ? 360
              : window.innerWidth >= 768 //
              ? 359
              : window.innerWidth >= 640 //
              ? 295
              : window.innerWidth >= 425 //
              ? 223
              : 400,
          showCover: false, // <-- Change this to false
          maxShadowOpacity: 0.5,
        });

        const pages = document.querySelectorAll(".my-page");
        if (pages.length > 0) {
          pageFlipInstance.current.loadFromHTML(pages);

          // Get the total number of pages
          const pageCount = pageFlipInstance.current.getPageCount();

          // Set initial z-index for all pages
          document.querySelectorAll(".my-page").forEach((page, index) => {
            page.style.zIndex = pageCount - index;
          });

          // Add an event listener for the 'flip' event
          pageFlipInstance.current.on("flip", (e) => {
            // e.data is the page number that was just flipped (e.g., 2)
            const currentPageNum = e.data;

            document.querySelectorAll(".my-page").forEach((page, index) => {
              if (index <= currentPageNum) {
                // Set z-index for pages on the left (already flipped)
                page.style.zIndex = index + 1;
              } else {
                // Set z-index for pages on the right
                page.style.zIndex = pageCount - index;
              }
            });
          });
        }
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (pageFlipInstance.current) {
        pageFlipInstance.current.destroy();
        pageFlipInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      className="flipbook-container cursor-grab"
      // style={{ background: "black", opacity: 0.3 }}
      ref={bookRef}
    >
      {/* Dynamic pages */}
      {backgrounds?.map((b, index) => (
        <div key={index}>
          <div className="my-page">
            <div className="page-content">
              <div className="pt-3 xl:pt-5 pr-5 xl:pr-10 pl-5 xl:pl-10 pb-3 xl:pb-5 flex flex-col w-full h-full gap-5 xl:gap-10">
                <div className="w-full h-3/5 overflow-hidden">
                  <img
                    src={b.gallery[0]}
                    className="w-full h-full rounded-tr-2xl xl:rounded-tr-4xl"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    alt="Brimvahl-Crown-Background-Galery"
                  />
                </div>
                <div className="w-full h-2/5">
                  <img
                    src={b.gallery[1]}
                    className="w-full h-full"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    alt="Brimvahl-Crown-Background-Galery"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-page">
            <div className="page-content">
              <div
                className="overflow-hidden pt-3 xl:pt-5 pl-5 xl:pl-10 pr-3 xl:pr-5 pb-3 xl:pb-5 h-full w-full"
                // style={{ background: "blue" }}
              >
                <img
                  src={b.gallery[2]}
                  className="w-full h-full rounded-tl-2xl xl:rounded-tl-4xl"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt="Brimvahl-Crown-Background-Galery"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <ArrowLeft
        onClick={handlePrevPage}
        className="absolute left-[-120px] 
        extra-sm:top-18 sm:top-25 md:top-30 lg:top-25 xl:top-40 2xl:top-60 
        extra-sm:-left-18 sm:-left-25 md:-left-[100px] xl:-left-[180px] lg:left-[-140px] 2xl:left-[-250px] 3xl:left-[-280px] 
        rotate-6 lg:rotate-5"
      />
      <ArrowRight
        onClick={handleNextPage}
        className="absolute right-[-120px] 
        extra-sm:top-25 sm:top-30 md:top-40 lg:top-35 xl:top-50 2xl:top-70 
        extra-sm:-right-20 sm:-right-25 md:-right-[110px] xl:-right-[200px] lg:right-[-150px] 2xl:right-[-250px] 3xl:right-[-310px] 
        rotate-8 lg:rotate-5"
      />
    </div>
  );
}

export default function Background() {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeBackground, setActiveBackground] = useState(backgrounds[0]);

  const handleNextClick = () => {
    if (currentPage < backgrounds.length - 1) {
      let newCurrentPage = currentPage + 1;
      setCurrentPage(newCurrentPage);
      setActiveBackground(backgrounds[newCurrentPage]);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 0) {
      let newCurrentPage = currentPage - 1;
      setCurrentPage(newCurrentPage);
      setActiveBackground(backgrounds[newCurrentPage]);
    }
  };

  return (
    <SectionContainer
      className="min-h-screen extra-sm:pb-140 sm:pb-140 md:pb-110 lg:pb-90 xl:pb-90 2xl:pb-125 3xl:pb-140"
      id="background"
      backgroundImage="url('/background-section-bg.webp')"
    >
      {/* Header */}
      <div className="absolute 
      extra-sm:top-50 sm:top-30 md:top-25 xl:top-30 
      sm:-right-50 md:-right-50 lg:-right-50 xl:-right-36 2xl:right-30 3xl:right-40 
      flex flex-col items-center">
        <h1 className="sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl text-[#C29948] font-3 font-bold">
          Background
        </h1>
        <img
          src="/underline-gold.webp"
          className="md:w-[30%] lg:w-[40%] xl:w-[50%] 2xl:w-[60%] 3xl:w-5/6"
          alt="Brimvahl-Crown-Underline"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col 
      items-center relative 
      extra-sm:w-[300px] sm:w-[450px] md:w-[600px] lg:w-[700px] xl:w-[900px] 2xl:w-[1250px] 3xl:w-[1500px] 
      extra-sm:top-25 sm:top-25 md:top-[50px] lg:top-[50px] xl:top-25 2xl:top-40 3xl:top-50">
        <img
          src="/book.png"
          className="extra-sm:h-[310px] sm:h-[410px] md:h-[500px] xl:h-[600px] 2xl:h-[900px] 3xl:h-[1000px] mt-30 relative z-0 rotate-z-[7.5deg] rotate-x-25"
          alt="Brimvahl-Crown-Background-Book"
        />

        {/* Galery on book */}
        <div
          className="absolute 
        extra-sm:top-[139px] sm:top-[157px] md:top-[173px] lg:top-[174px] xl:top-[191px] 2xl:top-[230px] 3xl:top-[242px] 
        extra-sm:right-[1px] sm:right-[2px] md:right-[3px] lg:right-[3px] xl:right-[4px] 2xl:right-[3px] 3xl:right-[3px] flex w-full h-3/5 
        transform origin-center -skew-y-[1.2deg] gap-16 z-5 rotate-z-[8.2deg] md:rotate-z-[8.5deg] rotate-x-[25deg] rotate-y-[0deg]"
        >
          <Flipbook
            onNextClick={handleNextClick}
            onPrevClick={handlePrevClick}
          />
        </div>

        {/* Card */}
        <div className="absolute flex flex-col items-center w-ful md:w-5/6 xl:w-full 2xl:w-4/5 top-[75%] z-10">
          <img
            src="/text-card.webp"
            className="w-full lg:w-[90%] xl:w-5/6 2xl:w-full 
            h-[90%] md:h-[90%] xl:h-[80%] 2xl:h-[90%] absolute top-8"
            alt="Brimvahl-Crown-Text-Card"
          />
          <div className="w-[95%] lg:w-[80%] xl:w-3/4 2xl:w-5/6 text-base relative py-20 px-4 xl:space-y-5 2xl:space-y-10">
            <h1 className="text-[16px] lg:text-md xl:text-xl 2xl:text-4xl 3xl:text-5xl font-bold">
              {activeBackground.title}
            </h1>
            <p className="w-full text-[14px] lg:text-sm xl:text-[17px] 2xl:text-2xl 3xl:text-3xl mt-4">
              {activeBackground.desc}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
