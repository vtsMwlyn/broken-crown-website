import { useRef, useState } from 'react';
import { PageFlip } from 'page-flip';
import '../flipbook.css';
import backgrounds from './data/backgrounds';

import SectionContainer from "../components/SectionContainer"
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";
import { useEffect } from 'react';

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
					width: 480,
					height: 550,
					showCover: false, // <-- Change this to false
					maxShadowOpacity: 0.5,
				});

				const pages = document.querySelectorAll('.my-page');
				if (pages.length > 0) {
					pageFlipInstance.current.loadFromHTML(pages);

					// Get the total number of pages
					const pageCount = pageFlipInstance.current.getPageCount();

					// Set initial z-index for all pages
					document.querySelectorAll('.my-page').forEach((page, index) => {
						page.style.zIndex = pageCount - index;
					});

					// Add an event listener for the 'flip' event
					pageFlipInstance.current.on('flip', (e) => {
						// e.data is the page number that was just flipped (e.g., 2)
						const currentPageNum = e.data;

						document.querySelectorAll('.my-page').forEach((page, index) => {
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
							<div className="flex flex-col w-3/4 h-full gap-10">
								<div className="bg-black w-full h-3/5" >
									<img src={b.gallery[0]} className="w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center' }} alt="Brimvahl-Crown-Background-Galery" />
								</div>
								<div className="bg-black w-full h-2/5" >
									<img src={b.gallery[1]} className="w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center' }} alt="Brimvahl-Crown-Background-Galery" />
								</div>
							</div>
						</div>
					</div>
					<div className="my-page">
						<div className="page-content">
							<div className="bg-black h-full w-3/4" >
								<img src={b.gallery[2]} className="w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center' }} alt="Brimvahl-Crown-Background-Galery" />
							</div>
						</div>
					</div>
				</div>
			))}

			<ArrowLeft onClick={handlePrevPage} className="absolute left-[-120px] top-60 rotate-5" />
			<ArrowRight onClick={handleNextPage} className="absolute right-[-120px] top-70 rotate-5" />
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
	}

	const handlePrevClick = () => {
		if (currentPage > 0) {
			let newCurrentPage = currentPage - 1;
			setCurrentPage(newCurrentPage);
			setActiveBackground(backgrounds[newCurrentPage]);
		}
	}

	return (
		<SectionContainer className="min-h-screen pb-60" id="background" backgroundImage="url('/background-section-bg.png')">
			{/* Header */}
			<div className="w-full flex flex-col items-center text-white absolute top-30 left-0 text-4xl py-5">
				<div className="w-11/12 xl:w-5/6 max-w-[1500px] ml-40 relative flex justify-end">
					<h1 className="text-5xl">Background</h1>
					<img src="/fancy-underline.png" className="absolute top-8 right-[-100px] w-130" alt="Brimvahl-Crown-Fancy-Underline" />
				</div>
			</div>

			{/* Main content */}
			<div className="flex flex-col w-2/3 items-center relative mt-20">
				<img src="/book.png" className="h-[700px] mt-30 relative z-0" alt="Brimvahl-Crown-Background-Book" />

				{/* Galery on book */}
				<div className="absolute top-40 flex w-full h-3/5 gap-16 z-5 rotate-z-[7.5deg] rotate-x-25">
					<Flipbook onNextClick={handleNextClick} onPrevClick={handlePrevClick} />
				</div>

				{/* Card */}
				<div className="absolute flex flex-col items-center w-4/5 bottom-[-180px] z-10">
					<img src="/normal-text-card.png" className="w-5/6 h-5/6 absolute top-4" alt="Brimvahl-Crown-Text-Card" />
					<div className="w-3/4 text-base relative pt-10 pb-20 px-4">
						<h1 className="text-xl font-bold">{activeBackground.title}</h1>
						<p className="w-full mt-4">{activeBackground.desc}</p>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}