import ArticleList from "../../Articles/Article_List/ArticleList"
import TitlePlaceholder from "../../UI/TitlePlaceholder/TitlePlaceholder"
import articles from "../../../database/articlesData.json"
import "./MonthBest.css"

export default function MonthBest(){
	return(
		<div className="month-best-box">
			<TitlePlaceholder text="ЛУЧШЕЕ МЕСЯЦА"/>
			<ArticleList articles={articles.articles} filteredIds={[1, 2, 3, 4]}/>
		</div>
	)
}