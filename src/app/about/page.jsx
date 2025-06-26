'use client';
import "../globals.css";
import ScrollReveal from "../components/Utils/ScrollReveal";
import LanInfo from "../components/Landing/Lan_Info/Info";
import LanNews from '../components/Landing/Lan_News/News';
import LanAbout from '../components/Landing/Lan_About/About';
import StackTags from "../components/Landing/Lan_StackTags/StackTags";
import TestBanner from "../components/Landing/Lan_TestBanner/TestBanner";
import LanMaskot from '../components/Landing/Lan_Maskot/Maskot';
import Subscrib from "../components/Landing/Lan_Subscribtion/Subscrib";
import Footer from "../components/Navigation/Footer/Footer";

export default function AboutPage() {
	return (
		<div className="LandingBox">
			<LanInfo />
			<LanNews />

			<ScrollReveal index={0}>
				<LanAbout />
			</ScrollReveal>

			<ScrollReveal index={1}>
				<StackTags />
			</ScrollReveal>

			<TestBanner />

			<ScrollReveal index={3}>
				<LanMaskot />
			</ScrollReveal>

			<ScrollReveal index={4}>
				<Subscrib text="следите за нашими новостями!" />
			</ScrollReveal>

			<Footer />
		</div>
	);
}