import SectionContainer from "../components/SectionContainer"

export default function Background() {
	return (
		<SectionContainer className="h-screen" id="background" backgroundImage="url('/background-section-bg.png')">
			<h1 className="font-bold text-5xl text-white">Background</h1>
		</SectionContainer>
	)
}