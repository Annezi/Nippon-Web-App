'use client';
import "../globals.css";
import "../components/Main/Main_MonthBest/MonthBest.css";
import "./what-to-do.css";
import "../components/Main/Main_ToDo/ToDo.css"

import ScrollReveal from "../components/Utils/ScrollReveal";
import TopSections from '../components/Main/Top_Sections_box/TopSections';
import Footer from "../components/Navigation/Footer/Footer";
import SighBanner from "../components/Other/SignBanner/SignBanner";
import places from "../database/placeData.json";
import ArticleList from "../components/Articles/Article_List/ArticleList";
import TitlePlaceholder from "../components/UI/TitlePlaceholder/TitlePlaceholder";
import WTDCard from "../components/UI/WTDCard/WTDCard";
import data from "../database/whatToDoData.json";

const whatToDoSections = data?.sections ? data : { sections: [] };

export default function WhatToDoPage() {
	return (
		<div className="LandingBox">
			<TopSections
				displayMode="solo"
				soloImage="/OtherImg/cover-section-1.jpg"
				soloText="что делать — ваш персональный гид по миру японии. у нас есть крутой тест, который подскажет, чем именно заняться. Ответьте на несколько вопросов, и мы подберём для вас идеальное аниме, мангу или место, куда стоит отправиться прямо сейчас."
				button_text="узнать, что поделать"
				onButtonClick={() => {
					window.location.href = '/quiz/test-chto-delat-v-yaponii';
				}}
			/>
			<ScrollReveal index={1}>
				<div className="wtd-cards-container">
					{whatToDoSections.sections
						?.filter(section => [1, 2, 3].includes(Number(section.id)))
						.map((section) => (
							<WTDCard
								key={section.id}
								id={section.id}
								cover={section.cover}
								buttonText={section.buttonText}
								contentType={section.contentType}
								onButtonClick={() => {
									window.location.href = section.url;
								}}
							/>
						))}
				</div>
			</ScrollReveal>

			<ScrollReveal index={2}>
				<div className="month-best-box">
					<TitlePlaceholder text="лучшие японские места в россии" />
					<ArticleList
						articles={places.places}
						renderStyle="manual"
						filteredIds={["yaponskiy-sad", "sad-druzhby", "alleya-sakury", "gorodskoy-sad-pushkina"]}
						contentType="places"
					/>
				</div>
			</ScrollReveal>

			<div className="todo-box">
				<ScrollReveal index={3}>
					<TitlePlaceholder className="title-placeholder" text="подборки аниме" />
				</ScrollReveal>
				<ScrollReveal index={4}>
					<div className="todo-banners-wrapper">
						<SighBanner
							cover="./collections/1/SignBanner-cover-1.png"
							description="спортивные аниме"
							button_text="Закинуть данк"
							url="/what-to-do/collections/sportivnye-anime" />
						<SighBanner
							cover="./collections/2/SignBanner-cover-2.png"
							description="аниме про волшебников"
							button_text="Наколдовать проду"
							url="/what-to-do/collections/anime-pro-volshebnikov" />
						<SighBanner
							cover="./collections/3/SignBanner-cover-3.png"
							description="аниме про попаданцев"
							button_text="Переродиться"
							url="/what-to-do/collections/anime-pro-popadancev" />
						<SighBanner
							cover="./collections/4/SignBanner-cover-4.png"
							description="романтические аниме"
							button_text="Покраснеть и попищать"
							url="/what-to-do/collections/romanticheskie-anime" />
					</div>
				</ScrollReveal>
			</div>

			<div className="todo-box">
				<ScrollReveal index={5}>
					<TitlePlaceholder className="title-placeholder" text="подборки манг" />
				</ScrollReveal>
				<ScrollReveal index={6}>
					<div className="todo-banners-wrapper">
						<SighBanner
							cover="./collections/5/SignBanner-cover-5.png"
							description="психологические сёнены"
							button_text="Стать психом"
							url="/what-to-do/collections/psihologicheskie-seneny" />
						<SighBanner
							cover="./collections/6/SignBanner-cover-6.png"
							description="исекай-манги"
							button_text="Стать магом 100lvl"
							url="/what-to-do/collections/isekai-mangi" />
						<SighBanner
							cover="./collections/7/SignBanner-cover-7.png"
							description="сёдзе манги"
							button_text="Романтично поплакать"
							url="/what-to-do/collections/sedze-mangi" />
						<SighBanner
							cover="./collections/8/SignBanner-cover-8.png"
							description="супергеройские манги"
							button_text="Спасти мир"
							url="/what-to-do/collections/supergerojskie-mangi" />
					</div>
				</ScrollReveal>
			</div>

			<Footer />
		</div>
	);
}