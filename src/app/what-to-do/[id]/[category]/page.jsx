import CategoryDetailClient from "./CategoryDetailClient";
// import categoryData from "../../database/categoryData.json";
import mangaData from "../../database/wtd/mangaData.json";
import animeData from "../../database/wtd/animeData.json";
import placeData from "../../database/wtd/placeData.json";


// async function getCategoryById(id) {
// 	const categoryId = parseInt(id);
// 	const categoryItem = categoryData.category.find(item => item.id === categoryId);
// 	return categoryItem || null;
// }

export async function generateMetadata({ params, searchParams }) {
	// const category = await getCategoryById(params.id);
	// return {
	// 	title: category?.title || "Статья не найдена",
	// 	description: category?.description || "",
	// 	openGraph: {
	// 		images: category?.cover ? [{ url: category.cover }] : []
	// 	}
	// };
}

export default async function CategoryDetail({ params }) {
	// const category = await getCategoryById(params.id);
	// if (!category) return <div>Статья не найдена</div>;

	// return <CategoryDetailClient category={category} />;
}