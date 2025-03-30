"use client";
import "./ReadMore.css"
import ArticleList from "../Article_List/ArticleList"
import articles from "../../../database/articlesData.json"

export default function ReadMore() {
	return (
		<div className="readMore-container">
			<div className="text-title-m">Читайте дальше</div>
			<ArticleList
				articles={articles.articles}
				renderStyle="manual"
				manualConfig={[
					{ id: 15, variant: "mini" },
					{ id: 16, variant: "mini" },
					{ id: 17, variant: "mini" },
					{ id: 18, variant: "mini" }
				]}
				limit={4}
			/>
		</div>
	)
}