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
					{ id: "mifologiya-i-demony-yaponii", variant: "mini" },
					{ id: "vse-o-takoyaki", variant: "mini" },
					{ id: "ojisan-gokko", variant: "mini" },
					{ id: "lyubov-v-yaponii", variant: "mini" }
				]}
				limit={4}
			/>
		</div>
	);
}