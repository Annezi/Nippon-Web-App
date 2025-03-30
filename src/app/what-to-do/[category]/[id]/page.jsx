import WTDPageDetailClient from "./WTDPageClient";
import WTDPageData from "../../../database/whatToDoData.json";
import mangaData from "../../../database/wtd/mangaData.json";
import animeData from "../../../database/wtd/animeData.json";
import placeData from "../../../database/wtd/placeData.json";

// async function getWTDPageById(id) {
// 	const WTDPageId = parseInt(id);
// 	const WTDPageItem = WTDPageData.WTDPage.find(item => item.id === WTDPageId);
// 	return WTDPageItem || null;
// }


async function getDataFromDatabase(id, category) {
	const findid = parseInt(id);
	if (category === "manga") {
		console.log(mangaData.manga);
		const mangaItem = mangaData.manga.find(item => item.id === findid);
		return mangaItem || null;
	} else if (category === "anime") {
		const animeItem = animeData.anime.find(item => item.id === findid);
		return animeItem || null;
	} else if (category === "place") {
		const placeItem = placeData.places.find(item => item.id === findid);
		return placeItem || null;
	} else {
		return null;
	}
}


export async function generateMetadata({ params }) {
	const { category, id } = await params;
	const WTDPage = await getDataFromDatabase(id, category);
	console.log(WTDPage);
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