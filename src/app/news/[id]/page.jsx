import NewsDetailClient from "./NewsDetailClient";
import newsData from "../../database/newsData.json";

async function getNewsById(id) {
	const newsId = parseInt(id);
	const newsItem = newsData.news.find(item => item.id === newsId);
	return newsItem || null;
}

export async function generateMetadata({ params }) {
	const news = await getNewsById(params.id);
	return {
		title: news?.title || "Новость не найдена",
		description: news?.description || "",
		openGraph: {
			images: news?.cover ? [{ url: news.cover }] : []
		}
	};
}

export default async function NewsDetail({ params }) {
	const news = await getNewsById(params.id);
	if (!news) return <div>Новость не найдена</div>;

	return <NewsDetailClient news={news} />;
}