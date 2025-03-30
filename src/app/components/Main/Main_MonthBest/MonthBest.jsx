import ArticleList from "../../Articles/Article_List/ArticleList";
import TitlePlaceholder from "../../UI/TitlePlaceholder/TitlePlaceholder";
import articles from "../../../database/articlesData.json";
import "./MonthBest.css";

export default function MonthBest() {
	return (
		<div className="month-best-box">
			<TitlePlaceholder text="ЛУЧШЕЕ МЕСЯЦА" />
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
	);
}