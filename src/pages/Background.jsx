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
            window.innerWidth <= 2560 //layar dekstop
              ? 700
              : window.innerWidth >= 1728 //layar dekstop
              ? 470
              : window.innerWidth >= 1440 //leptop L
              ? 380
              : window.innerWidth >= 1336 //leptop gw
              ? 350
              : window.innerWidth >= 1024 //
              ? 290
              : window.innerWidth >= 768
              ? 225
              : 123,
          height:
            window.innerWidth <= 2560 //layar dekstop
              ? 720
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
    <div className="flipbook-container cursor-grab" ref={bookRef}>
      {/* Dynamic pages */}
      {backgrounds?.map((b, index) => (
        <div key={index}>
          <div className="my-page">
            <div className="page-content">
              <div className="pt-5 pr-10 pl-10 pb-5 flex flex-col w-full h-full gap-10">
                <div className="w-full h-3/5 overflow-hidden">
                  <img
                    src={b.gallery[0]}
                    className="w-full h-full rounded-tr-4xl"
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
              <div className="overflow-hidden pt-5 pl-10 pr-5 pb-5 h-full w-full">
                <img
                  src={b.gallery[2]}
                  className="w-full h-full rounded-tl-4xl"
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
        className="absolute left-[-120px] top-60 4xl:left-[-280px] rotate-5"
      />
      <ArrowRight
        onClick={handleNextPage}
        className="absolute right-[-120px] top-70 4xl:right-[-310px] rotate-5"
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
      className="min-h-screen pb-140"
      id="background"
      backgroundImage="url('/background-section-bg.webp')"
    >
      {/* Header */}
      <div className="absolute top-30 right-10 4xl:right-40 flex flex-col items-center">
        <h1 className="text-6xl 4xl:text-7xl text-[#C29948] font-3 font-bold">
          Background
        </h1>
        <img
          src="/underline-gold.webp"
          className="w-2/3"
          alt="Brimvahl-Crown-Underline"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col w-[1500px] items-center relative top-50">
        <img
          src="/book.png"
          className="h-[1000px] mt-30 relative z-0 rotate-z-[7.5deg] rotate-x-25"
          alt="Brimvahl-Crown-Background-Book"
        />

        {/* Galery on book */}
        <div className="absolute top-82 flex w-full h-3/5 right-[9px] transform origin-right skew-y-[-1.2deg] gap-16 z-5 rotate-z-[8.6deg] rotate-x-[25deg]">
          <Flipbook
            onNextClick={handleNextClick}
            onPrevClick={handlePrevClick}
          />
        </div>

        {/* Card */}
        <div className="absolute flex flex-col items-center w-4/5 top-[75%] z-10">
          <img
            src="/text-card.webp"
            className="w-full h-[90%] absolute top-8"
            alt="Brimvahl-Crown-Text-Card"
          />
          <div className="w-5/6 text-base relative py-20 px-4 space-y-10">
            <h1 className="text-xl 4xl:text-5xl font-bold">
              {activeBackground.title}
            </h1>
            <p className="w-full 4xl:text-3xl mt-4">{activeBackground.desc}</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
