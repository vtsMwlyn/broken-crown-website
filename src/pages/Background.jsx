// checkpoint undo
import { useRef, useState } from "react";
import { PageFlip } from "page-flip";
import "../flipbook.css";
import backgrounds from "./data/backgrounds";

import SectionContainer from "../components/SectionContainer";
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";
import { useEffect } from "react";
import { AlignCenter } from "lucide-react";

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
            window.innerWidth >= 2000 // 3xl | layar dekstop ~~~✅
              ? 700
              : window.innerWidth >= 1280 // xl | leptop L✅
              ? 420
              : window.innerWidth >= 1024 // lg | leptop✅
              ? 327
              : window.innerWidth >= 768 // md | tablet
              ? 281
              : window.innerWidth >= 640 // sm | hp l
              ? 210
              : window.innerWidth >= 425 // extra sm : hp m
              ? 140
              : 108,
          height:
            window.innerWidth >= 2000 // layar dekstop ~~~✅
              ? 718
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
              : 130,
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
          <div className="my-page active:cursor-grabbing">
            <div className="page-content">
              <div
                className="flex flex-col w-full h-full 
              pt-1.5 sm:pt-2 lg:pt-3 3xl:pt-5 
              pr-1.5 sm:pr-3 lg:pr-5 3xl:pr-10 
              pl-2.5 sm:pl-3 lg:pl-5 3xl:pl-10 
              pb-1.5 sm:pb-2 lg:pb-3 3xl:pb-5 
              gap-2 sm:gap-5 xl:gap-10"
              >
                <div className="w-full h-3/5 overflow-hidden">
                  <img
                    src={b.gallery[0]}
                    className="w-full h-full rounded-tr-lg sm:rounded-tr-xl xl:rounded-tr-4xl"
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
          <div className="my-page active:cursor-grabbing">
            <div className="page-content">
              <div
                className="overflow-hidden h-full w-full
                pt-1.5 sm:pt-2 lg:pt-3 3xl:pt-5 
                pl-1.5 sm:pl-3 lg:pl-5 3xl:pl-10 
                pr-1.5 sm:pr-2 lg:pr-3 3xl:pr-5 
                pb-1.5 sm:pb-2 lg:pb-3 3xl:pb-5"
                // style={{ background: "blue" }}
              >
                <img
                  src={b.gallery[2]}
                  className="w-full h-full rounded-tl-lg sm:rounded-tl-2xl xl:rounded-tl-4xl"
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
        className="absolute 
        top-10 xs:top-20 sm:top-25 md:top-30 lg:top-25 xl:top-35 3xl:top-70
        -left-[55px] xs:-left-18 sm:-left-25 md:-left-[115px] lg:left-[-140px] xl:-left-[150px] 3xl:left-[-200px] 
        rotate-6 lg:rotate-5"
      />
      <ArrowRight
        onClick={handleNextPage}
        className="absolute 
        top-15 xs:top-25 sm:top-30 md:top-40 lg:top-35 xl:top-45 3xl:top-80
        -right-[60px] xs:-right-20 sm:-right-28 md:-right-[130px] lg:right-[-150px] xl:-right-[170px] 3xl:right-[-230px] 
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
      className="min-h-screen pb-100 xs:pb-140 sm:pb-140 md:pb-110 lg:pb-90 xl:pb-100 3xl:pb-140"
      id="background"
      backgroundImage="url('/background-section-bg.webp')"
    >
      {/* Header */}
      <div
        className="absolute 
      top-40 xs:top-50 sm:top-30 md:top-25 xl:top-30 
      sm:-right-50 md:-right-50 lg:-right-50 xl:-right-36 3xl:right-40 
      flex flex-col items-center"
      >
        <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-7xl text-[#C29948] font-3 font-bold">
          Background
        </h1>
        <img
          src="/underline-gold.webp"
          className="w-[50%] media(15rem):w-[40%] sm:w-[40%] md:w-[30%] lg:w-[40%] xl:w-[50%] 3xl:w-5/6"
          alt="Brimvahl-Crown-Underline"
        />
      </div>

      {/* Main content */}
      <div
        className="flex flex-col 
      items-center relative 
      w-[230px] xs:w-[300px] sm:w-[450px] md:w-[600px] lg:w-[700px] xl:w-[900px] 3xl:w-[1500px] 
      top-20 xs:top-25 sm:top-25 md:top-[50px] lg:top-[50px] xl:top-25 3xl:top-50"
      >
        <img
          src="/book.png"
          className="h-[180px] xs:h-[310px] sm:h-[410px] md:h-[500px] xl:h-[600px] 3xl:h-[1000px] mt-30 relative z-0 rotate-z-[7.5deg] rotate-x-25"
          alt="Brimvahl-Crown-Background-Book"
        />

        {/* Galery on book */}
        <div
          className="absolute 
        top-[116px] xs:top-[139px] sm:top-[157px] md:top-[173px] lg:top-[174px] xl:top-[191px] 3xl:top-[242px] 
        right-[1px] sm:right-[2px] md:right-[3px] lg:right-[3px] xl:right-[4px] 3xl:right-[3px] flex w-full h-3/5 
        transform origin-center -skew-y-[1.2deg] gap-16 z-5 rotate-z-[8.2deg] md:rotate-z-[8.5deg] rotate-x-[25deg] rotate-y-[0deg]"
        >
          <Flipbook
            onNextClick={handleNextClick}
            onPrevClick={handlePrevClick}
          />
        </div>

        {/* Card */}
        <div className="absolute flex flex-col items-center w-ful md:w-5/6 xl:w-full 3xl:w-4/5 top-[75%] z-10">
          <img
            src="/text-card.webp"
            className="w-full lg:w-[90%] xl:w-5/6 3xl:w-full
            h-[80%] xs:h-[90%] absolute top-8"
            alt="Brimvahl-Crown-Text-Card"
          />
          <div className="w-[90%] sm:w-[90%] lg:w-[80%] xl:w-3/4 3xl:w-5/6 text-base relative py-20 px-4 xl:space-y-5 ">
            <h1 className="text-[10px] xs:text-[15px] lg:text-md xl:text-xl 3xl:text-4xl font-bold">
              {activeBackground.title}
            </h1>
            <p className="w-full text-[9px] xs:text-[14px] lg:text-sm xl:text-[17px] 3xl:text-3xl mt-4">
              {activeBackground.desc}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
