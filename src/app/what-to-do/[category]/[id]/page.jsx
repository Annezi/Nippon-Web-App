import WTDPageDetailClient from "./WTDPageClient";
import mangaData from "../../../database/mangaData.json";
import animeData from "../../../database/animeData.json";
import placeData from "../../../database/placeData.json";
import collectionData from "../../../database/collectionData.json";

async function getDataFromDatabase(id, category) {
	if (category === "manga") {
		const mangaItem = mangaData.manga.find(item => item.id.toString() === id.toString());
		return mangaItem || null;
	} else if (category === "anime") {
		const animeItem = animeData.anime.find(item => item.id.toString() === id.toString());
		return animeItem || null;
	} else if (category === "places") {
		const placeItem = placeData.places.find(item => item.id.toString() === id.toString());
		return placeItem || null;
    } else if (category === "collections") {
        const collectionItem = collectionData.collections.find(item => item.id.toString() === id.toString());
        return collectionItem || null;
	} else {
		return null;
	}
}

export async function generateMetadata({ params }) {
	const { category, id } = params;
	const WTDPage = await getDataFromDatabase(id, category);

	return {
		title: WTDPage?.title || "Материал не найден",
		description: WTDPage?.description || "",
		openGraph: {
			images: WTDPage?.cover ? [{ url: WTDPage.cover }] : []
		}
	};
}

export default async function WTDPageDetail({ params }) {
	const { category, id } = params;
	const WTDPage = await getDataFromDatabase(id, category);

	if (!WTDPage) return <div>Материал не найден</div>;

	return <WTDPageDetailClient WTDPage={WTDPage} />;
}