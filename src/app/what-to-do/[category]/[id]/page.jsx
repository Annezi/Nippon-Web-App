import WTDPageDetailClient from "./WTDPageClient";
import mangaData from "../../../database/mangaData.json";
import animeData from "../../../database/animeData.json";
import placeData from "../../../database/placeData.json";


async function getDataFromDatabase(id, category) {
	const findid = parseInt(id);
	if (category === "manga") {
		const mangaItem = mangaData.manga.find(item => item.id === findid);
		return mangaItem || null;
	} else if (category === "anime") {
		const animeItem = animeData.anime.find(item => item.id === findid);
		return animeItem || null;
	} else if (category === "places") {
		const placeItem = placeData.places.find(item => item.id === findid);
		return placeItem || null;
	} else {
		return null;
	}
}

export async function generateMetadata({ params }) {
	const { category, id } = await params;
	const WTDPage = await getDataFromDatabase(id, category);
	// console.log(WTDPage);
	// console.log("Metadata WTDPage:", WTDPage);
	return {
		title: WTDPage?.title || "Новость не найдена",
		description: WTDPage?.description || "",
		openGraph: {
			images: WTDPage?.cover ? [{ url: WTDPage.cover }] : []
		}
	};
}

export default async function WTDPageDetail({ params }) {
	const { category, id } = await params;
	const WTDPage = await getDataFromDatabase(id, category);
	if (!WTDPage) return <div>Новость не найдена</div>;

	return <WTDPageDetailClient WTDPage={WTDPage} />;
}