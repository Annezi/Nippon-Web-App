import React from 'react';
import Image from 'next/image';
import './TopSections.css';


import ScrollReveal from '../../Utils/ScrollReveal';
import ArticleList from "../../Articles/Article_List/ArticleList";
import articles from "../../../database/articlesData.json";
import news from "../../../database/newsData.json";
import quiz from "../../../database/quizData.json";
import places from "../../../database/placeData.json";
import Button from "../../UI/Button/Button";
import Navbar from "../../Navigation/Navbar/Navbar"

const CONTENT_DATA = {
	articles: articles.articles,
	news: news.news,
	places: places.places,
	quiz: quiz.quiz,
};

export default function TopSections({
	sections,
	contentType = "articles",
	displayMode = "double", // 'double' (две карточки) или 'solo' (одна карточка + кнопка)

	soloImage = "",
	soloText = "",
	button_text = "",
	onButtonClick = () => { },
}) {
	const data = CONTENT_DATA[contentType] || [];

	return (
		<div className='TopSections-container'>
			<Navbar />
			<div className="TopSections-info-plate">
				{displayMode === "double" ? (
					// Режим 'double' - две карточки со статьями
					sections.map((section, index) => {
						const articleExists = data.some(item => item.id === section.articleId);

						return (
							<div key={`${section.articleId}-${index}`} className="TopSections-card">
								<div className="TopSections-card-text text-subtitle-1">
									{section.title}
								</div>
								{articleExists ? (
									<div className="TopSections-article-list-wrapper">
										<ScrollReveal index={0}>
											<ArticleList
												articles={data}
												renderStyle="manual"
												manualConfig={[{
													id: section.articleId,
													variant: "custom",
													basePath: `/${contentType}/`
												}]}
												filteredIds={[section.articleId]}
												contentType={contentType}
											/>
										</ScrollReveal>
									</div>
								) : (
									<div className="TopSections-error">Контент не найден</div>
								)}
							</div>
						);
					})
				) : (
					// Режим 'solo' - одна карточка с изображением, текстом и кнопкой
					<ScrollReveal index={0}>
						<div className="TopSections-solo-wrapper">

							{soloImage && (
								<div className="TopSections-solo-image">
									<Image
										src={soloImage}
										alt="Custom content"
										className="TopSections-solo-image"
										width={1320}
										height={552}
									/>
								</div>
							)}
							{soloText && (
								<div className="TopSections-solo-text text-subtitle-1">
									{soloText}
								</div>
							)}

							<Button theme="red-outline" text={button_text} onClick={onButtonClick} />

						</div>
					</ScrollReveal>
				)}
			</div>
		</div>
	);
}