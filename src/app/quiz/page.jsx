'use client';
import "../globals.css";
import Navbar from "../components/Navigation/Navbar/Navbar";
import TopSections from '../components/Main/Top_Sections_box/TopSections';
import ArticleList from '../components/Articles/Article_List/ArticleList';
import quiz from '../database/quizData.json';
import Footer from "../components/Navigation/Footer/Footer";
import MonthBest from "../components/Main/Main_MonthBest/MonthBest";

export default function QuizPage() {
	return (
		<div className="LandingBox">
			<Navbar />
			<TopSections
				sections={[
					{ title: "кто я?", articleId: 43 },
					{ title: "самый умный", articleId: 44 }
				]}
				contentType="quiz"
			/>

			<ArticleList
				articles={quiz.quiz}
				renderStyle="manual"
				tagFilter={true}
				manualConfig={
					quiz.quiz.map(item => ({
						id: item.id,
						variant: "large",
						basePath: "/quiz/"
					}))
				}
				contentType="quiz"
			/>

			<MonthBest />
			<Footer />
		</div>
	);
}