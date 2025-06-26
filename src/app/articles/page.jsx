'use client';
import "../globals.css";
import ScrollReveal from "../components/Utils/ScrollReveal";
import TopSections from '../components/Main/Top_Sections_box/TopSections';
import ArticleList from '../components/Articles/Article_List/ArticleList';
import articles from '../database/articlesData.json';
import Footer from "../components/Navigation/Footer/Footer";
import MonthBest from "../components/Main/Main_MonthBest/MonthBest";

export default function ArticlesPage() {
	return (
		<div className="LandingBox">
			<TopSections sections={[
				{
					title: "ПОСМЕЯТЬСЯ",
					articleId: "yaponskie-memy"
				},
				{
					title: "ПОУМНИЧАТЬ",
					articleId: "yaponskij-yazyk"
				}
			]} />

			<ScrollReveal index={2}>
				<ArticleList
					articles={articles.articles}
					renderStyle="catalog"
					tagFilter={true}
				/>
			</ScrollReveal>

			<ScrollReveal index={3}>
				<MonthBest />
			</ScrollReveal>
			<Footer />
		</div>
	);
}