"use client";
import Header from "../../components/Navigation/Navbar/Navbar";
import Banner from "../../components/Articles/Art_Banner/Banner";
import Essay from "../../components/Articles/Art_Essay/Essay";
import ShareButtons from "../../components/UI/SocialMadiaLinks/SocialMadiaLinks";
import ReadMore from "../../components/Articles/Art_ReadMore/ReadMore";
import Footer from "../../components/Navigation/Footer/Footer";

export default function ArticleDetailClient({ article }) {
	return (
		<div className="ContainerBox">
			<div className="header-section-box">
				<Header />
				<Banner
					tags={article.tags}
					title={article.title}
					description={article.description}
					cover={article.cover}
					readTime={article.readTime || "~5 минут"}
					publishDate={article.publishDate || "Дата публикации не указана"}
				/>
			</div>
			<Essay content={article.content} />
			<ShareButtons url={`${window.location.origin}/articles/${article.id}`} />
			<ReadMore currentArticleId={article.id} />
			<Footer />
		</div>
	);
}