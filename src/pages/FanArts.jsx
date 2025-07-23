import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import SectionContainer from "../components/SectionContainer";
import allFanarts from "./data/fan-arts";

function HorizontalFanArtCard({fanart}) {
	return (
		<div className="w-full flex flex-col items-center">
			<div className="w-full h-full relative flex items-center justify-center">
				<img src="/fanart-card-horizontal.png" className="w-[580px] h-[400px]" alt="Brimvahl-Crown-Fan-Art-Border" />
				<img src={fanart?.image} className="absolute z-5 w-[500px] h-[320px] object-cover object-center rounded-2xl" alt="Brimvahl-Crown-Fan-Art" />
			</div>
			<p className="text-white text-start w-full text-xl mt-4 pl-4">{fanart?.title}, {fanart?.name}</p>
		</div>
	)
}

function VerticalFanArtCard({fanart}) {
	return (
		<div className="w-full flex flex-col items-center">
			<div className="w-full h-full relative flex items-center justify-center">
				<img src="/fanart-card-vertical.png" className="w-[380px] h-[580px]" alt="Brimvahl-Crown-Fan-Art-Border" />
				<img src={fanart?.image} className="absolute z-5 w-[300px] h-[500px] object-cover object-center rounded-2xl" alt="Brimvahl-Crown-Fan-Art" />
			</div>
			<p className="text-white text-start w-full text-xl mt-4 pl-4">{fanart?.title}, {fanart?.name}</p>
		</div>
	)
}

export default function FanArts() {
	const fanarts = allFanarts;
	const swiperRef = useRef(null);

	// // Function to handle the next slide
	// function handleNext() {
	// 	if (swiperRef.current) {
	// 		swiperRef.current.swiper.slideNext();
	// 	}
	// };

	// // Function to handle the previous slide
	// function handlePrev() {
	// 	if (swiperRef.current) {
	// 		swiperRef.current.swiper.slidePrev();
	// 	}
	// };

	return (
		<SectionContainer className="py-40" backgroundImage="url('/fanarts-bg.png')" id="fan-arts">
			<div className="w-full flex flex-col items-center">
				<h1 className="text-6xl text-white mb-20">Fan Art Gallery</h1>

				<Swiper
					className="w-full cursor-grab"
					ref={swiperRef}
					modules={[Pagination]}
					pagination={{ clickable: true }}
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
			</div>
		</SectionContainer>
	)
}