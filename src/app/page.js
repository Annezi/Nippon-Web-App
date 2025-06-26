"use client";

import "./globals.css";
import ScrollReveal from "./components/Utils/ScrollReveal";
import MainInfo from "./components/Main/Main_Info/MainInfo";
import MonthBest from "./components/Main/Main_MonthBest/MonthBest";
import TestBanner from "./components/Landing/Lan_TestBanner/TestBanner";
import ToDo from "./components/Main/Main_ToDo/ToDo";
import Subscrib from "./components/Landing/Lan_Subscribtion/Subscrib";
import Footer from "./components/Navigation/Footer/Footer";

export default function Home() {
	return (
		<div className="LandingBox">
			<MainInfo />

			<ScrollReveal index={0}>
				<MonthBest />
			</ScrollReveal>

			<TestBanner id="test-banner" />

			<ScrollReveal index={2}>
				<ToDo />
			</ScrollReveal>

			<ScrollReveal index={3}>
				<Subscrib text="следите за нашими новостями!" />
			</ScrollReveal>
			<Footer />
		</div>
	);
}
