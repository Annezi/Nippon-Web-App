import ArticleDetailClient from "./ArticleDetailClient";
import articlesData from "../../database/articlesData.json";
import articlesSection from "../../database/sectionData.json";

async function getArticleById(id) {
	if (!Array.isArray(articlesData.articles)) {
		console.error("articlesData.articles is not an array:", articlesData.articles);
		return null;
	}

	const article = articlesData.articles.find((article) => article.id === id);
	if (article) {
		const section = articlesSection.data.find((section) => section.id.toString() === article.sectionId?.toString());
		return { ...article, section };
	}

	return null;
}

export async function generateMetadata({ params }) {
	const article = await getArticleById(params.id);

	if (!article) {
		return {
			title: "Статья не найдена",
			description: "Извините, но запрошенная статья не существует.",
		};
	}

	return {
		title: article.title,
		description: article.description,
		openGraph: {
			type: "article",
			images: [
				{
					url: article.cover,
					width: 1200,
					height: 630,
				},
			],
			title: article.title,
			description: article.description,
			url: `/articles/${article.id}`,
		},
	};
}

export default async function ArticleDetail({ params }) {
	const article = await getArticleById(params.id);

	if (!article) {
		return <div>Статья не найдена</div>;
	}

	return <ArticleDetailClient article={article} />;
}