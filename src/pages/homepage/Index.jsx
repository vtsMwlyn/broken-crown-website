import PageHero from "./sections/PageHero"
import Characters from "./sections/Characters"
import GameplayFeature from "./sections/GameplayFeature"
import NewsAndInfo from "./sections/NewsAndInfo"

export default function Index() {
	return (
		<>
			<PageHero />
			<Characters />
			<NewsAndInfo />
			<GameplayFeature />
		</>
	)
}