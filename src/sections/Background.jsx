import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useRef } from 'react';

import SectionContainer from "../components/SectionContainer"
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";
import { useState } from 'react';

const backgrounds = [
	{ id: 1, desc: 'The game is taking middle-european age style as background. You can encounter these aspect in the battle arena and visual story background.' },
	{ id: 2, desc: 'The characters is also inspired from other popular games as well, but we add special touching so the character will have their unique aspects, making they become different than others.' },
	{ id: 3, desc: 'Our team is using various modern tools and softwares while developing the whole game, such as Autodesk Maya and Unity Game Engine.' },
];

const galeries = [
	['/background/style1.png', '/background/inspired1.png', '/background/tools1.png'],
	['/background/style2.png', '/background/inspired2.png', '/background/tools2.png'],
	['/background/style3.png', '/background/inspired3.png', '/background/tools3.png'],
]

export default function Background() {
	/* SWIPER NAVIGATION BUTTONS MECHANISM */
	const swiperRefs = useRef([]);

	// Function to handle the next slide
	const handleNext = () => {
		swiperRefs.current.forEach((swiper) => {
			swiper?.slideNext();
		});
	};

	// Handler to slide all to the previous item
	const handlePrev = () => {
		swiperRefs.current.forEach((swiper) => {
			swiper?.slidePrev();
		});
	};

	const [activeBackground, setActiveBackground] = useState(backgrounds[0]);

	// Function to handle the slide change event
	const handleSlideChange = (swiper) => {
		// swiper.realIndex gives the correct index even in loop mode
		const currentIndex = swiper.realIndex;
		const currentCharacter = backgrounds[currentIndex];
		setActiveBackground(currentCharacter);
	};

	return (
		<SectionContainer className="min-h-screen pb-20" id="background" backgroundImage="url('/background-section-bg.png')">
			{/* Header */}
			<div className="bg-[#181818] w-full flex flex-col items-center text-white absolute top-0 left-0 text-4xl py-5">
				<div className="w-11/12 xl:w-5/6 max-w-[1500px] ml-40 relative">
					<h1>Background</h1>
					<img src="/fancy-underline.png" className="absolute top-5 left-[-100px] w-110" alt="Brimvahl-Crown-Fancy-Underline" />
				</div>
			</div>

			{/* Main content */}
			<div className="flex flex-col w-2/3 items-center relative">
				<img src="/book.png" className="h-[700px] mt-30 relative z-0" alt="Brimvahl-Crown-Background-Book" />

				{/* Galery on book */}
				<div className="absolute top-45 ml-[-30px] flex w-4/5 h-3/5 gap-16 z-5 rotate-z-[7.5deg] rotate-x-25">
					<div className="flex flex-col w-14/30 gap-10">
						<Swiper slidesPerView={1} onSwiper={(swiper) => (swiperRefs.current[0] = swiper)} onSlideChange={handleSlideChange} className="bg-black w-full h-3/5" loop>
							{galeries && galeries[0].map(image => (
								<SwiperSlide>
									<img src={image} className="w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center' }} alt="Brimvahl-Crown-Background-Galery" />
								</SwiperSlide>
							))}
						</Swiper>
						<Swiper slidesPerView={1} onSwiper={(swiper) => (swiperRefs.current[1] = swiper)} className="bg-black w-full h-2/5" loop>
							{galeries && galeries[1].map(image => (
								<SwiperSlide>
									<img src={image} className="w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center' }} alt="Brimvahl-Crown-Background-Galery" />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<Swiper slidesPerView={1} onSwiper={(swiper) => (swiperRefs.current[2] = swiper)} className="bg-black h-full w-14/30" loop>
						{galeries && galeries[2].map(image => (
							<SwiperSlide>
								<img src={image} className="w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center' }} alt="Brimvahl-Crown-Background-Galery" />
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<ArrowLeft onClick={handlePrev} className="absolute left-[-90px] top-80 rotate-8" />
				<ArrowRight onClick={handleNext} className="absolute right-[-90px] top-120 rotate-8" />

				{/* Card */}
				<div className="absolute flex flex-col items-center w-3/4 bottom-[-60px] z-10">
					<img src="/normal-text-card.png" className="w-5/6 h-5/6 absolute top-4" alt="Brimvahl-Crown-Text-Card" />
					<div className="w-3/4 text-lg relative py-18">
						<p className="w-full">{activeBackground ? activeBackground.desc : 'The game is taking middle-european age style as background. You can encounter these aspect in the battle arena and visual story background'}</p>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}