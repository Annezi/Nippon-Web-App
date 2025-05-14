"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ArticleCard from "../Article_Card/ArticleCard";
import TagList from "../../UI/Tags/TagList/TagList";
import "./ArticleList.css";

export default function ArticleList({
	articles,
	renderStyle = "catalog",
	manualConfig = [],
	filteredIds = [],
	shadow = true,
	limit = 14,
	showLoadMore = false,
	onLoadMore = () => { },
	contentType = "articles",
	url = null,
	tagFilter = false
}) {
	const [isMobile, setIsMobile] = useState(false);
	const [visibleCount, setVisibleCount] = useState(limit);

	useEffect(() => {
		setIsMobile(typeof window !== "undefined" && window.innerWidth <= 710);
		const handleResize = () => setIsMobile(window.innerWidth <= 710);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Фильтрация статей
	let filteredArticles = [...articles];

	// Если есть manualConfig в manual режиме - фильтруем по нему
	if (renderStyle === "manual" && manualConfig.length > 0) {
		const manualIds = manualConfig.map(item => item.id);
		filteredArticles = filteredArticles.filter(article =>
			manualIds.includes(article.id)
		);
	}
	// Иначе фильтруем по filteredIds, если они переданы
	else if (filteredIds.length > 0) {
		filteredArticles = filteredArticles.filter(article =>
			filteredIds.includes(article.id)
		);
	}

	// Определяем варианты рендера карточек
	const getCardVariants = () => {
		if (renderStyle === "manual") {
			return filteredArticles.map(article => {
				const manualItem = manualConfig.find(item => item.id === article.id);
				return {
					article,
					variant: manualItem?.variant || "mini",
					isCustom: manualItem?.variant === "custom",
					basePath: manualItem?.basePath || `/${contentType}/` // Добавляем basePath
				};
			});
		}

		// Стиль 'catalog' - каждая 7-я карточка большая
		return filteredArticles.slice(0, visibleCount).map((article, index) => ({
			article,
			variant: (index + 1) % 7 === 0 ? "large" : "mini",
			isCustom: false,
			basePath: `/${contentType}/` // Базовый путь для catalog режима
		}));
	};

	const cardVariants = getCardVariants();
	const isSingleCard = cardVariants.length === 1;
	const hasMoreArticles = showLoadMore && filteredArticles.length > visibleCount;


	const handleLoadMore = () => {
		const newCount = visibleCount + limit;
		setVisibleCount(newCount);
		onLoadMore(newCount);
	};

	return (
		<div className="article-list">
			{tagFilter && (
				<TagList
					articles={filteredArticles}
					size="medium"
					theme="red"
					isActive={true}
				/>
			)}

			<div className={`article-list-wrapper ${isSingleCard ? "no-grid" : ""}`}>
				{cardVariants.map(({ article, variant, isCustom, basePath }) => {
					var hr = "";
					if (url != null) {
						hr = `${url}`
					} else {
						hr = `${basePath}${article.id}`
					}
					if (article.url) {
						hr = article.url
					}
					// Для мобильных все карточки mini, кроме явно указанных custom
					const finalVariant = isMobile && !isCustom ? "mini" : variant;
					const gridClass = `article-card-${finalVariant}`;
					return (
						<Link
							key={article.id}
							href={hr}
							onClick={() => window.scrollTo(0, 0)}
							className={`article-card-link ${gridClass}`}
						>
							<ArticleCard
								article={article}
								variant={finalVariant}
								shadow={finalVariant !== 'custom' && shadow}
							/>
						</Link>
					);
				})}
			</div>

			{hasMoreArticles && (
				<div className="load-more-container">
					<button onClick={handleLoadMore} className="load-more-button">
						Загрузить еще
					</button>
				</div>
			)}
		</div>
	);
}