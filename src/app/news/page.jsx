'use client';
import "../globals.css";
import Navbar from "../components/Navigation/Navbar/Navbar";
import TopSections from '../components/Main/Top_Sections_box/TopSections';
import ArticleList from '../components/Articles/Article_List/ArticleList'; 
import news from '../database/newsData.json';
import Footer from "../components/Navigation/Footer/Footer";
import MonthBest from "../components/Main/Main_MonthBest/MonthBest";

export default function NewsPage() {
	return (
		<div className="LandingBox">
			<Navbar />
			<TopSections
				sections={[
					{ title: "ПОВСЕДНЕВНОСТЬ", articleId: "zemletryasenie-u-fudzi-4-6" },
					{ title: "КРИМИНАЛ", articleId: "napavshij-na-kisidu-osuzhden" }
				]}
				contentType="news"
			/>

			<ArticleList
				articles={news.news}
				renderStyle="catalog"
				contentType="news"
				tagFilter={true}
			/>

			<MonthBest />
			<Footer />
		</div>
	);
}