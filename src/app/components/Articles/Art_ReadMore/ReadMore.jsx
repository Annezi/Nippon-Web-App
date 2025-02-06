"use client";
import "./ReadMore.css"
import ArticleList from "../Article_List/ArticleList"
import articles from "../../../database/articlesData.json"

export default function ReadMore() {
	return (
		<div className="readMore-container">
			<div className="text-title-m">Читайте дальше</div>
			<ArticleList articles={articles.articles} filteredIds={[1, 2, 3, 4, 5]} limit={4}/>
		</div>
	)
}