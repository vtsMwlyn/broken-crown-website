import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import SectionContainer from "../components/SectionContainer"
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";

// Sample data
const characters = [
	{ id: 1, name: 'Kazmiel', desc: 'The main character of the game, she is beautiful, powerful, and talented. Follow her journey in the game!', image: '/characters/kazmiel.png', icon: '/character-icon-placeholder.png' },
	{ id: 2, name: 'Flaire', desc: 'Idk who is this, probably a friend of Kazmiel?', image: '/characters/flaire.png', icon: '/character-icon-placeholder.png' },
	{ id: 3, name: 'Deathless King', desc: 'This is one of the boss, have deadly strikes', image: '/characters/deathlessking.png', icon: '/character-icon-placeholder.png' },
	{ id: 4, name: 'Brute Guard', desc: 'This is also an enemy Kazmiel will fight', image: '/characters/bruteguard.png', icon: '/character-icon-placeholder.png' },
	{ id: 5, name: 'Male Elite Guard', desc: 'An elite guard but male', image: '/characters/maleeliteguard.png', icon: '/character-icon-placeholder.png' },
	{ id: 6, name: 'Female Elite Guard', desc: 'An elite guard but female', image: '/characters/femaleeliteguard.png', icon: '/character-icon-placeholder.png' },
];

export default function Characters() {
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

	const [activeCharacter, setActiveCharacter] = useState(characters[0]); // Start with the first character

	// Function to handle the slide change event
	const handleSlideChange = (swiper) => {
		// swiper.realIndex gives the correct index even in loop mode
		const currentIndex = swiper.realIndex;
		const currentCharacter = characters[currentIndex];
		setActiveCharacter(currentCharacter);
	};

	return (
		<SectionContainer className="min-h-screen" id="characters" backgroundImage="url('/characters-section-bg.png')">
			<div className="w-full flex flex-col items-center relative z-10 py-20">
				{/* Border */}
				<div className="absolute top-0 z-0 h-full w-full p-10">
					<img src="/fancy-border.png" className="h-full w-full" alt="Brimvahl-Crown-Fancy-Border" />
				</div>

				{/* Section Title */}
				<div className="relative mt-[-70px] h-1/6">
					<img src="/title-card.png" className="w-[350px]" alt="Brimvahl-Crown-Title-Card" />
					<div className="absolute top-6 w-full flex justify-center items-center text-4xl">Characters</div>
				</div>

				{/* Character showcase */}
				<div className="w-4/5 flex items-center h-4/6 mt-20 relative z-5">
					{/* Left side */}
					<div className="w-3/5 flex flex-col items-center">
						{/* Character name */}
						<h1 className="text-4xl text-white ml-28 self-start">{activeCharacter ? activeCharacter.name : 'Kazmiel'}</h1>

						{/* Card */}
						<div className="relative flex flex-col items-center w-5/6 mt-[-15px]">
							<img src="/page-hero-text-card.png" className="w-full h-full absolute top-0" alt="Brimvahl-Crown-Text-Card" />
							<div className="w-3/4 text-2xl relative py-18">
								<p className="w-full">{activeCharacter ? activeCharacter.desc : 'The main character of the game, she is beautiful, powerful, and talented. Follow her journey in the game!'}</p>
							</div>
						</div>

						{/* Selector */}
						<div className="flex gap-5 justify-center w-3/4 mt-6" id="character-icon">
							<ArrowLeft onClick={handlePrev} />

							<Swiper
								onSlideChange={handleSlideChange}
								className="w-2/3 cursor-grab"
								slidesPerView={3}
								centeredSlides={true}
								spaceBetween={0}
								ref={swiperRef}
								loop
							>
								{characters && characters.map((c, index) => (
									<SwiperSlide key={index} onClick={() => swiperRef.current?.swiper.slideToLoop(index)}>
										<img src={c.icon} className="scale-[0.7] transition duration-300 ease-in-out" alt="Brimvahl-Crown-Character-Icon" />
									</SwiperSlide>
								))}
							</Swiper>

							<ArrowRight onClick={handleNext} />
						</div>
					</div>

					{/* Character photo (right side) */}
					<div className="w-2/5 relative flex flex-col items-center">
						<img src="/character-border.png" className="w-5/6" alt="Brimvahl-Crown-Character-Border" />
						<div className="w-1/2 h-3/5 flex items-center justify-center absolute top-26">
							<img src={activeCharacter ? activeCharacter.image : '/characters/kazmiel.png'} className="w-full h-full" alt="Brimvahl-Crown-Character" />
						</div>
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}