'use client';
import "../globals.css";
import "./what-to-do.css";
import "../components/Main/Main_ToDo/ToDo.css"
import Navbar from "../components/Navigation/Navbar/Navbar";
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
			<Navbar />
			<TopSections
				displayMode="solo"
				soloImage="/OtherImg/cover-section-1.jpg"
				soloText="что делать — ваш персональный гид по миру японии. у нас есть крутой тест, который подскажет, чем именно заняться. Ответьте на несколько вопросов, и мы подберём для вас идеальное аниме, мангу или место, куда стоит отправиться прямо сейчас."
				button_text="узнать, что поделать"
				onButtonClick={() => {
					window.location.href = '/quiz/92';
				}}
			/>

			<div className="wtd-cards-container">
				{whatToDoSections.sections?.map((section) => (
					<WTDCard
						key={section.id}
						id={section.id}
						cover={section.cover}
						description={section.description}
						contentType={section.contentType}
						url={section.url}
					/>
				))}
			</div>

			<div className="month-best-box">
				<TitlePlaceholder text="лучшие японские места в россии" />
				<ArticleList
					articles={places.places}
					renderStyle="manual"
					filteredIds={[73, 74, 75, 76]}
					contentType="places"
				/>
			</div>

			<div className="todo-box">
				<TitlePlaceholder className="title-placeholder" text="подборки аниме" />
				<div className="todo-banners-wrapper">
					<SighBanner
						cover="./OtherImg/SignBanner-cover-1.png"
						description="спортивные аниме"
						button_text="Закинуть данк" />
					<SighBanner
						cover="./OtherImg/SignBanner-cover-2.png"
						description="аниме про волшебников"
						button_text="Наколдовать проду" />
					<SighBanner
						cover="./OtherImg/SignBanner-cover-3.png"
						description="аниме про попаданцев"
						button_text="Переродиться" />
					<SighBanner
						cover="./OtherImg/SignBanner-cover-4.png"
						description="романтические аниме"
						button_text="Покраснеть и попищать" />
				</div>
			</div>

			<div className="todo-box">
				<TitlePlaceholder className="title-placeholder" text="подборки манг" />
				<div className="todo-banners-wrapper">
					<SighBanner
						cover="./OtherImg/SignBanner-cover-5.png"
						description="психологические сёнены"
						button_text="Стать психом" />
					<SighBanner
						cover="./OtherImg/SignBanner-cover-6.png"
						description="исекай-манги"
						button_text="Стать магом 100lvl" />
					<SighBanner
						cover="./OtherImg/SignBanner-cover-7.png"
						description="сёдзе манги"
						button_text="Романтично поплакать" />
					<SighBanner
						cover="./OtherImg/SignBanner-cover-8.png"
						description="супергеройские манги"
						button_text="Спасти мир" />
				</div>
			</div>

			<Footer />
		</div>
	);
}