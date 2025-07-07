import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import SectionContainer from "../components/SectionContainer"
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";

const news = [
	{ id: 1, type: 'image', source: '/news-and-info/livingroom.png', desc: 'Concept artists are developing variative visual story backgrounds. The living room is one of them, where Kazmiel spend her morning and night, before and after her adventure.' },
	{ id: 2, type: 'video', source: '/news-and-info/gameplay.mp4', desc: 'The game programmer is really working hard on implementing the UI/UX and the game design into real gameplay!' },
	{ id: 3, type: 'image', source: '/news-and-info/map.png', desc: '3D artists are developing the 3D map area for battles Kazmiel encountered during her adventure!' },
	{ id: 4, type: 'youtube', source: 'https://www.youtube.com/embed/eW_SOi1Xr-U?si=PBuLZAf2Xsfob41N', desc: 'Sangnila has uploaded their recent tutorial, check it out and get a new knowledge!' }
];

export default function NewsAndInfo() {
	/* SWIPER NAVIGATION BUTTONS MECHANISM */
	const swiperRef = useRef(null); // Create a reference for the Swiper instance

	// Function to handle the next slide
	function handleNext() {
		if (swiperRef.current) {
			swiperRef.current.swiper.slideNext();
		}
	};

	// Function to handle the previous slide
	function handlePrev() {
		if (swiperRef.current) {
			swiperRef.current.swiper.slidePrev();
		}
	};

	const [activeNews, setActiveNews] = useState(news[0]); // Start with the first character

	// Function to handle the slide change event
	const handleSlideChange = (swiper) => {
		// swiper.realIndex gives the correct index even in loop mode
		const currentIndex = swiper.realIndex;
		const currentCharacter = news[currentIndex];
		setActiveNews(currentCharacter);
	};

	return (
		<SectionContainer className="min-h-screen" id="news-and-info" backgroundImage="url('/news-and-info-section-bg.png')">
			<div className="w-full flex flex-col items-center justify-center	relative mb-20">
				{/* Background */}
				<img src="/wooden-board.png" className="w-3/4 h-[650px] absolute top-20" alt="Brimvahl-Crown-News-And-Info-Board" />

				{/* Content */}
				<div className="w-1/2 relative">
					{/* Section Title */}
					<div className="h-1/6 relative mt-20 flex justify-center items-center">
						<img src="/title-card.png" className="w-[300px]" alt="Brimvahl-Crown-Title-Card" />
						<div className="absolute top-7 text-3xl">News and Info</div>
					</div>

					{/* Slider */}
					<Swiper
						modules={[Pagination]}
						pagination={{ clickable: true }}
						onSlideChange={handleSlideChange}
						className="cursor-grab h-[400px] w-full bg-black rounded-3xl"
						slidesPerView={1}
						ref={swiperRef}
						loop
					>
						{news && news.map((n, index) => {
							if (n.type === 'image') {
								return (
									<SwiperSlide key={index}>
										<img src={n.source} className="w-full h-full" alt="Brimvahl-Crown-News-And-Info" />
									</SwiperSlide>
								)
							} else if (n.type === 'video') {
								return (
									<SwiperSlide key={index}>
										<video className="w-full h-full" controls>
											<source src={n.source} type={`video/${n.source.split('.').pop()}`}></source>
										</video>
									</SwiperSlide>
								)
							} else if(n.type === 'youtube') {
								return (
									<SwiperSlide key={index}>
										<iframe className="w-full h-full" src={n.source} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
									</SwiperSlide>
								)
							}
						})}
					</Swiper>

					{/* Navigations */}
					<ArrowLeft onClick={handlePrev} className="absolute left-5 z-10 top-84" />
					<ArrowRight onClick={handleNext} className="absolute right-5 z-10 top-84" />
				</div>

				{/* Card */}
				<div className="relative flex flex-col items-center w-3/5 mt-10">
					<img src="/normal-text-card.png" className="w-5/6 h-5/6 absolute top-4" alt="Brimvahl-Crown-Text-Card" />
					<div className="w-3/4 text-lg relative py-18">
						<p className="w-full">{activeNews ? activeNews.desc : 'Concept artists are developing variative visual story backgrounds. The living room is one of them, where Kazmiel spend her morning and night, before and after her adventure.'}</p>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}