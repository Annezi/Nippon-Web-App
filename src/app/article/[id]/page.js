// page.tsx (Server Component)
import ArticleDetailClient from "./ArticleDetailClient";
import articlesData from "../../database/articlesData.json";
import articlesSection from "../../database/sectionData.json";

// Function to get article by ID
async function getArticleById(id) {
    const articleId = parseInt(id);
    // Ensure articlesData.articles is an array
    if (!Array.isArray(articlesData.articles)) {
      console.error("articlesData.articles is not an array:", articlesData.articles);
      return null;
    }
    // Find the article by ID
    const article = articlesData.articles.find((article) => article.id === articleId);
    if (article) {
      const section = articlesSection.data.find((section) => section.id === article.sectionId);
      return { ...article, section };
    }
  
    return null;
  }

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const id = parseInt(params.id);
  const article = await getArticleById(id);

  if (!article) {
    return {
      title: "Статья не найдена",
      description: "Извините, но запрошенная статья не существует.",
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      type: "article",
      images: [
        {
          url: article.cover,
          width: 1200,
          height: 630,
        },
      ],
      title: article.title,
      description: article.description,
    },
  };
}

// Server Component to fetch data and pass it to the Client Component
export default async function ArticleDetail({ params }) {
  const id = parseInt(params.id);
  const article = await getArticleById(id);

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  return <ArticleDetailClient article={article} />;
}