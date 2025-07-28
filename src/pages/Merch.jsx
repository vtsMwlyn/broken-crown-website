import merchs from "./data/merchs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useRef } from "react";
import { Link } from "react-router-dom";

import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";

function HorizontalMerchCard({merch}) {
	return (
		<Link to={merch?.link} target="_blank" className="w-full flex flex-col items-start relative hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] cursor-pointer">
			<div className="w-full h-full relative flex items-center justify-center">
				<img src="/merch-card-horizontal.png" className="w-[400px] h-[250px]" alt="Brimvahl-Crown-Merch-Border" />
				<img src={merch?.image} className="absolute z-5 w-[300px] h-[200px] object-cover object-center rounded-2xl" alt="Brimvahl-Crown-Fan-Art" />
			</div>
			<div className="w-fit h-fit py-2 px-4 absolute left-5 bottom-[-15px] z-5" style={{background: `url('/merch-label.png') no-repeat center center / cover`}}>
				<div className="text-center text-xl">{merch?.title}</div>
			</div>
		</Link>
	)
}

function TableMerch({merch}) {
	return (
		<Link to={merch?.link} target="_blank" className="relative max-w-[300px] h-90 flex flex-col items-center hover:drop-shadow-[0px_0px_5px_oklch(79.5%_0.184_86.047)] cursor-pointer">
			<img src={merch?.image} className="ml-5 h-60 relative z-5 left-0 bottom-[-20px] object-contain object-bottom" alt="Brimvahl-Crown-Merch" />
			<img src="/merch-carpet.png" className="w-60 absolute left-0 top-55 ml-10" alt="Brimvahl-Crown-Merch-Carpet" />
			<div className="w-fit h-fit py-2 px-4 absolute left-0 top-65" style={{background: `url('/merch-label.png') no-repeat center center / cover`}}>
				<div className="text-center text-2xl">{merch?.title}</div>
			</div>
		</Link>
	)
}

export default function Merch() {
	const swiperRef = useRef(null);

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

	return (
		<>
			<div className="w-full flex justify-center relative min-h-screen" id="merchs" style={{background: `url('/merch-bg.png') no-repeat center center / cover`}}>
				<div className="w-full flex flex-col justify-between items-center">
					{/* Title */}
					<div className="flex flex-col items-center absolute top-26 right-10">
						<h1 className="text-5xl text-white font-3 font-bold">Merch Store</h1>
						<img src="/underline-white.png" className="w-2/5" alt="Brimvahl-Crown-Underline" />
					</div>

					{/* Featured marchs */}
					<div className="w-11/12 xl:w-5/6 flex flex-col items-center mt-40">
						<div className="w-full flex justify-start">
							<div className="w-1/2 grid grid-cols-2 gap-8">
								{merchs.featured.map((m, index) => (
									<HorizontalMerchCard key={index} merch={m} />
								))}
							</div>
						</div>
					</div>

					<div className="w-full flex items-center justify-center gap-20 relative bottom-0">
						{/* Table BG */}
						<img src="/merch-table.png" className="absolute w-full h-full z-1 pt-20" alt="Brimvahl-Crown-Merch-Table" />

						{/* Character */}
						<img src="/merch-npc.png" className="absolute right-100 bottom-120 h-[600px]" alt="Brimvahl-Crown-Merch-NPC" />

						{/* Merch slider */}
						<Swiper
							className="w-full cursor-grab"
							ref={swiperRef}
							slidesPerView={6}
							spaceBetween={20}
							simulateTouch={false}
							loop={true}
						>
							{merchs.others.map((m, index) => (
								<SwiperSlide key={index}>
									<TableMerch merch={m} />
								</SwiperSlide>
							))}
						</Swiper>

						<ArrowLeft onClick={handlePrev} className="absolute bottom-10 left-180 z-10" type={2} />
						<ArrowRight onClick={handleNext} className="absolute bottom-10 right-180 z-10" type={2} />
					</div>
				</div>
			</div>
		</>
	)
}