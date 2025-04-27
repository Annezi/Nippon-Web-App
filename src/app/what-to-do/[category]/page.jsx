import whatToDoData from "../../database/whatToDoData.json";
import WTDCategoryClient from "./WTDCategoryClient";


async function getDataFromDatabase(category) {
	const categoryItem = whatToDoData.sections.find(item => item.contentType === category);
	return categoryItem || null;
};

export async function generateMetadata({ params }) {
	
	const { category } = await params;

	const categoryItem = await getDataFromDatabase(category);
	return {
		title: categoryItem?.title || "Категория не найдена",
		description: categoryItem?.description || "",
		openGraph: {
			images: categoryItem?.cover ? [{ url: categoryItem.cover }] : []
		}
	}

}

export default async function WTDPageDetail({ params }) {
	const { category } = await params;
	const categoryItem = await getDataFromDatabase(category);
	if (!categoryItem) return <div>Категория не найдена</div>;

	return <WTDCategoryClient section={categoryItem} />;
}