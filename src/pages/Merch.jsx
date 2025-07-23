import fanarts from "./data/fan-arts";

import SectionContainer from "../components/SectionContainer";

function HorizontalFanArtCard({fanart}) {
	return (
		<div className="w-full flex flex-col items-start relative">
			<div className="w-full h-full relative flex items-center justify-center">
				<img src="/fanart-card-horizontal.png" className="w-[400px] h-[250px]" alt="Brimvahl-Crown-Fan-Art-Border" />
				<img src={fanart?.image} className="absolute z-5 w-[300px] h-[200px] object-cover object-center rounded-2xl" alt="Brimvahl-Crown-Fan-Art" />
			</div>
			<div className="absolute left-5 bottom-[-20px] z-5 text-black">
				<img src="/merch-label.png" className="w-[180px]" alt="Brimvahl-Crown-Button" />
				<div className="absolute top-3.5 w-full text-center text-xl">Merch Name</div>
			</div>
		</div>
	)
}

export default function Merch() {
	return (
		<SectionContainer className="min-h-screen py-40" backgroundImage="url('/merch-bg.png')">
			<div className="w-full flex flex-col items-center">
				<div className="w-full flex justify-start">
					<div className="w-1/2 grid grid-cols-2 gap-8">
						<HorizontalFanArtCard fanart={fanarts[0][0]} />
						<HorizontalFanArtCard fanart={fanarts[0][1]} />
						<HorizontalFanArtCard fanart={fanarts[0][5]} />
						<HorizontalFanArtCard fanart={fanarts[0][6]} />
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}