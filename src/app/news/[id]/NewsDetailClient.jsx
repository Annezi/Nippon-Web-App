'use client';
import Header from "../../components/Navigation/Navbar/Navbar";
import Banner from "../../components/Articles/Art_Banner/Banner";
import Essay from "../../components/Articles/Art_Essay/Essay";
import ShareButtons from "../../components/UI/SocialMadiaLinks/SocialMadiaLinks";
import ReadMore from "../../components/Articles/Art_ReadMore/ReadMore";
import Footer from "../../components/Navigation/Footer/Footer";

export default function NewsDetailClient({ news }) {
	return (
		<div className="ContainerBox">
			<div className="header-section-box">
				<Header />
				<Banner
					tags={news.tags}
					title={news.title}
					description={news.description}
					cover={news.cover}
					readTime={news.readTime || "~3 минуты"}
					publishDate={news.publishDate || "Дата публикации не указана"}
				/>
			</div>
			<Essay content={news.content} />
			<ShareButtons url={`${window.location.origin}/news/${news.id}`} />
			<ReadMore currentArticleId={news.id} contentType="news" />
			<Footer />
		</div>
	);
}