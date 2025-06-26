'use client';
import Header from "../../../components/Navigation/Navbar/Navbar";
import Banner from "../../../components/Articles/Art_Banner/Banner";
import Essay from "../../../components/Articles/Art_Essay/Essay";
import ShareButtons from "../../../components/UI/SocialMadiaLinks/SocialMadiaLinks";
import ReadMore from "../../../components/Articles/Art_ReadMore/ReadMore";
import Footer from "../../../components/Navigation/Footer/Footer";

export default function WTDPageDetailClient({ WTDPage }) {
	return (
		<div className="ContainerBox">
			<div className="header-section-box">
				<Header />
				<Banner
					tags={WTDPage.tags}
					title={WTDPage.title}
					description={WTDPage.description}
					cover={WTDPage.cover}
					readTime={WTDPage.readTime || "~3 минуты"}
					publishDate={WTDPage.publishDate || "Дата публикации не указана"}
				/>
			</div>
			<Essay content={WTDPage.content} />
			<ShareButtons url={`${window.location.origin}/WTDPage/${WTDPage.id}`} />
			<ReadMore currentArticleId={WTDPage.id} contentType="WTDPage" />
			<Footer />
		</div>
	);
}