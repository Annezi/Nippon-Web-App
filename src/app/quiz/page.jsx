'use client';
import "../globals.css";
import ScrollReveal from "../components/Utils/ScrollReveal";
import TopSections from '../components/Main/Top_Sections_box/TopSections';
import ArticleList from '../components/Articles/Article_List/ArticleList';
import quiz from '../database/quizData.json';
import Footer from "../components/Navigation/Footer/Footer";
import MonthBest from "../components/Main/Main_MonthBest/MonthBest";

export default function QuizPage() {
	return (
		<div className="LandingBox">
			<TopSections
				sections={[
					{ title: "кто я?", articleId: "test-kem-by-vy-bili-v-srednevekovoy-yaponii" },
					{ title: "самый умный", articleId: "test-na-znanie-yaponskoy-kultury" }
				]}
				contentType="quiz"
			/>

			<ScrollReveal index={2}>
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
			</ScrollReveal>

			<ScrollReveal index={3}>
				<MonthBest />
			</ScrollReveal>
			<Footer />
		</div>
	);
}