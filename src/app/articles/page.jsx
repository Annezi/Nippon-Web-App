'use client';
import "../globals.css";
import Navbar from "../components/Navigation/Navbar/Navbar";
import TopSections from '../components/Main/Top_Sections_box/TopSections';
import ArticleList from '../components/Articles/Article_List/ArticleList';
import articles from '../database/articlesData.json';
import Footer from "../components/Navigation/Footer/Footer";
import MonthBest from "../components/Main/Main_MonthBest/MonthBest";

export default function ArticlesPage() {
	return (
		<div className="LandingBox">
			<Navbar />
			<TopSections sections={[
				{
					title: "ПОСМЕЯТЬСЯ",
					articleId: 87
				},
				{
					title: "ПОУМНИЧАТЬ",
					articleId: 88
				}
			]} />


			<ArticleList
				articles={articles.articles}
				renderStyle="catalog"
				tagFilter={true}
			/>

			<MonthBest/>
			<Footer />
		</div>
	);
}