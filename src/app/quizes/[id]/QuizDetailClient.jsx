'use client';
import Header from "../../components/Navigation/Navbar/Navbar";
import Banner from "../../components/Articles/Art_Banner/Banner";
import Essay from "../../components/Articles/Art_Essay/Essay";
import ShareButtons from "../../components/UI/SocialMadiaLinks/SocialMadiaLinks";
import ReadMore from "../../components/Articles/Art_ReadMore/ReadMore";
import Footer from "../../components/Navigation/Footer/Footer";

export default function QuizDetailClient({ quiz }) {
	return (
		<div className="ContainerBox">
			<Header />
			<Banner
				tags={quiz.tags}
				title={quiz.title}
				description={quiz.description}
				cover={quiz.cover}
				readTime={quiz.readTime || "~3 минуты"}
				publishDate={quiz.publishDate || "Дата публикации не указана"}
			/>
			<Essay content={quiz.content} />
			<ShareButtons url={`${window.location.origin}/quiz/${quiz.id}`} />
			<ReadMore currentArticleId={quiz.id} contentType="quiz" />
			<Footer />
		</div>
	);
}