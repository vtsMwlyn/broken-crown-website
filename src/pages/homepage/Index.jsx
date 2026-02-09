import { Link } from "react-router-dom"

import PageHero from "./sections/PageHero"
import Characters from "./sections/assets/characters"
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