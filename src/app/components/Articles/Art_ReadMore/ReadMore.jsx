"use client";

import "./ReadMore.css";
import { useEffect, useState } from "react";
import ArticleList from "../Article_List/ArticleList";
import articles from "../../../database/articlesData.json";
import anime from "../../../database/animeData.json";
import manga from "../../../database/mangaData.json";
import news from "../../../database/newsData.json";
import places from "../../../database/placeData.json";
import quiz from "../../../database/quizData.json";

export default function ReadMore() {
	const [randomPosts, setRandomPosts] = useState([]);

	useEffect(() => {
		const allPosts = [
			...articles.articles.map(post => ({ ...post, contentType: "articles" })),
			...anime.anime.map(post => ({ ...post, contentType: "anime" })),
			...manga.manga.map(post => ({ ...post, contentType: "manga" })),
			...news.news.map(post => ({ ...post, contentType: "news" })),
			...places.places.map(post => ({ ...post, contentType: "places" })),
			...quiz.quiz.map(post => ({ ...post, contentType: "quiz" }))
		];

		// Функция для перемешивания массива
		const shuffleArray = (array) => {
			const newArray = [...array];
			for (let i = newArray.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
			}
			return newArray;
		};

		// Выбираем 4 случайных поста
		const shuffledPosts = shuffleArray(allPosts);
		const selectedPosts = shuffledPosts.slice(0, 4);

		// Формируем manualConfig для ArticleList
		const manualConfig = selectedPosts.map(post => ({
			id: post.id,
			variant: "mini",
			basePath: `/${post.contentType}/`
		}));

		setRandomPosts(manualConfig);
	}, []);

	return (
		<div className="readMore-container">
			<div className="text-title-m">Читайте дальше</div>
			{randomPosts.length > 0 && (
				<ArticleList
					articles={[
						...articles.articles,
						...anime.anime,
						...manga.manga,
						...news.news,
						...places.places,
						...quiz.quiz
					]}
					renderStyle="manual"
					manualConfig={randomPosts}
					limit={4}
				/>
			)}
		</div>
	);
}