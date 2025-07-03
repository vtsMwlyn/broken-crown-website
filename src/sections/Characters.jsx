import SectionContainer from "../components/SectionContainer"

export default function Characters() {
	return (
		<SectionContainer className="min-h-screen" id="characters" backgroundImage="url('/characters-section-bg.png')">
			{/* Border */}
			<div className="absolute h-full w-full p-10">
				<img src="/fancy-border.png" className="h-full w-full" alt="Brimvahl-Crown-Fancy-Border" />
			</div>

			{/* Main content */}
			<div className="h-full w-full flex flex-col items-center">
				{/* Section Title */}
				<div className="relative mt-3">
					<img src="/title-card.png" className="w-[350px]" alt="Brimvahl-Crown-Title-Card" />
					<div className="absolute top-6 w-full flex justify-center items-center text-4xl">Characters</div>
				</div>

				{/* Character showcase */}
				<div className="w-4/5 mt-10 flex bg-pink-200">
					{/* Left side */}
					<div className="w-1/2 bg-yellow-800">
						<h1 className="text-4xl text-white">Kazmiel</h1>
					</div>

					{/* Character photo (right side) */}
					<div className="w-1/2 bg-green-800">
						<img src="/character-border.png" alt="Brimvahl-Crown-Character-Border" />
					</div>
				</div>
			</div>
		</SectionContainer>
	)
}