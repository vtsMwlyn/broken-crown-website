import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import allFanarts from "./data/fan-arts";

import SectionContainer from "../components/SectionContainer";
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";

function HorizontalFanArtCard({ fanart }) {
	return (
		<div className="w-full flex flex-col items-center">
			<div className="w-full h-full relative flex items-center justify-center">
				<img src="/fanart-card-horizontal.webp" className="w-[580px] h-[400px]" alt="Brimvahl-Crown-Fan-Art-Border" />
				<img src={fanart?.image} className="absolute z-5 w-[500px] h-[320px] object-cover object-center rounded-2xl" alt="Brimvahl-Crown-Fan-Art" />
			</div>
			<p className="text-white text-start w-full text-xl mt-4 pl-4">{fanart?.title}, {fanart?.name}</p>
		</div>
	)
}

function VerticalFanArtCard({ fanart }) {
	return (
		<div className="w-full flex flex-col items-center">
			<div className="w-full h-full relative flex items-center justify-center">
				<img src="/fanart-card-vertical.webp" className="w-[380px] h-[580px]" alt="Brimvahl-Crown-Fan-Art-Border" />
				<img src={fanart?.image} className="absolute z-5 w-[300px] h-[500px] object-cover object-center rounded-2xl" alt="Brimvahl-Crown-Fan-Art" />
			</div>
			<p className="text-white text-start w-full text-xl mt-4 pl-4">{fanart?.title}, {fanart?.name}</p>
		</div>
	)
}

export default function FanArts() {
	const fanarts = allFanarts;
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
		<SectionContainer className="py-40" backgroundImage="url('/fanarts-bg.webp')" id="fan-arts">
			<div className="w-full flex flex-col items-center">
				<div className="mb-20 flex flex-col items-center">
					<h1 className="text-6xl text-white font-3 font-bold">Fan Art Gallery</h1>
					<img src="/underline-white.webp" className="w-2/3" alt="Brimvahl-Crown-Underline" />
				</div>

				<Swiper
					className="w-full cursor-grab"
					ref={swiperRef}
					modules={[Pagination]}
					pagination={{ clickable: true, dynamicBullets: true }}
					slidesPerView={1}
					loop={true}
				>
					{fanarts.map(f => (
						<SwiperSlide>
							<div className="flex flex-col items-center">
								{/* First landscape fanarts row */}
								<div className="w-fit grid gap-30 grid-cols-2">
									<HorizontalFanArtCard fanart={f[0]} />
									<HorizontalFanArtCard fanart={f[1]} />
								</div>

								{/* Second portrait fanarts row */}
								<div className="w-fit grid gap-5 grid-cols-3 mt-10">
									<VerticalFanArtCard fanart={f[2]} />
									<VerticalFanArtCard fanart={f[3]} />
									<VerticalFanArtCard fanart={f[4]} />
								</div>

								{/* Third landscape fanarts row */}
								<div className="w-fit grid gap-30 grid-cols-2 mt-10">
									<HorizontalFanArtCard fanart={f[5]} />
									<HorizontalFanArtCard fanart={f[6]} />
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<ArrowLeft onClick={handlePrev} className="absolute bottom-38 left-180 z-10" type={2} />
				<ArrowRight onClick={handleNext} className="absolute bottom-38 right-180 z-10" type={2} />
			</div>
		</SectionContainer>
	)
}