import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import SectionContainer from "../components/SectionContainer"
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";

const features = [
	{ id: 1, image: '/gameplay-features/battlearena.png', desc: 'Visual storytelling that tells about the main character development and adventures from the beginning. The lore and story then getting more intense and dramatic, we bring user to enjoy the best experiences.' },
	{ id: 2, image: '/gameplay-features/mechanics.png', desc: 'Interesting battle mechanics, enemy and boss battles, also stunning background music and effect is the main key to make sure we bring you the best experience of gaming. Find out multiple maps and enemies along with your journey!' },
	{ id: 3, image: '/gameplay-features/visualization.png', desc: 'Comic style and cut scenes awaits you to serve unboring visualization of the story that full of texts and static images. This will keep user to feel the atmosphere and enjoy the story well.' },
];

export default function GameplayFeature() {
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

	const [activeFeatures, setActiveFeatures] = useState(features[0]); // Start with the first character

	// Function to handle the slide change event
	const handleSlideChange = (swiper) => {
		// swiper.realIndex gives the correct index even in loop mode
		const currentIndex = swiper.realIndex;
		const currentCharacter = features[currentIndex];
		setActiveFeatures(currentCharacter);
	};

	return (
		<SectionContainer className="min-h-screen mb-20" id="gameplay-feature" backgroundImage="url('/gameplay-feature-section-bg.png')">
			<div className="h-full w-full flex flex-col items-center justify-center relative z-10">
				{/* Border */}
				<div className="absolute h-full max-h-[900px] w-full max-w-[1500px] px-30 py-20">
					<img src="/fancy-border.png" className="h-full w-full" alt="Brimvahl-Crown-Fancy-Border" />
				</div>

				{/* Section Title */}
				<div className="relative z-10 mt-20">
					<img src="/title-card.png" className="w-[450px]" alt="Brimvahl-Crown-Title-Card" />
					<div className="absolute top-10 w-full flex justify-center items-center text-4xl">Gameplay Features</div>
				</div>

				{/* Slider */}
				<Swiper
					modules={[Pagination]}
					pagination={{ clickable: true }}
					onSlideChange={handleSlideChange}
					className="cursor-grab w-7/9 h-[680px] bg-white rounded-[350px_350px_100px_100px] z-5 mt-[-60px]"
					slidesPerView={1}
					ref={swiperRef}
					loop
				>
					{features && features.map((n, index) => (
						<SwiperSlide key={index}>
							<img src={n.image} className="w-full h-full" alt="Brimvahl-Crown-Features-And-Info" />
						</SwiperSlide>
					))}

					{/* Navigations */}
					<ArrowLeft onClick={handlePrev} className="absolute left-5 z-10 top-84" />
					<ArrowRight onClick={handleNext} className="absolute right-5 z-10 top-84" />
				</Swiper>

				{/* Card */}
				<div className="relative bottom-10 flex flex-col items-center w-3/5 z-10">
					<img src="/text-paper.png" className="w-full h-full absolute top-0" alt="Brimvahl-Crown-Text-Card" />
					<div className="w-4/5 text-lg relative py-10">
						<p className="w-full">{activeFeatures ? activeFeatures.desc : 'Visual storytelling that tells about the main character development and adventures from the beginning. The lore and story then getting more intense and dramatic, we bring user to enjoy the best experiences.'}</p>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}