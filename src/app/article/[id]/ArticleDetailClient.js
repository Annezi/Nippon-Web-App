"use client";
import Header from "../../components/Navigation/Navbar/Navbar";
import Banner from "../../components/Articles/Art_Banner/Banner";
import Essay from "../../components/Articles/Art_Essay/Essay";
import ShareButtons from "../../components/UI/SocialMadiaLinks/SocialMadiaLinks";
import ReadMore from "../../components/Articles/Art_ReadMore/ReadMore";
import Footer from "../../components/Navigation/Footer/Footer";

// Client Component to render the article detail page
export default function ArticleDetailClient({ article }) {
  return (
    <div className="ContainerBox">
      <Header />
      <Banner
        tags={article.tags}
        title={article.title}
        description={article.description}
        cover={article.cover}
        readTime={article.readTime || "~5 минут"}
        publishDate={article.publishDate || "Дата публикации не указана"}
      />
      <Essay content={article.content} />
      <ShareButtons />
      <ReadMore />
      <Footer />
    </div>
  );
}