import ArticleList from '../../Articles/Article_List/ArticleList';
import articles from "../../../database/articlesData.json";
import news from "../../../database/newsData.json";
import './TopSections.css';

export default function TopSections({
	sections,
	contentType = "articles" // Добавляем параметр типа контента
}) {
	// Выбираем нужный массив данных
	const data = contentType === "news" ? news.news : articles.articles;

	return (
		<div className='TopSections-container'>
			<div className="TopSections-info-plate">
				{sections.map((section, index) => (
					<div key={`${section.articleId}-${index}`} className="TopSections-card">
						<div className="TopSections-card-text text-subtitle-1">
							{section.title}
						</div>
						<div className="TopSections-article-list-wrapper">
							<ArticleList
								articles={data}
								renderStyle="manual"
								manualConfig={[{
									id: section.articleId,
									variant: "custom",
									basePath: `/${contentType}/` // Передаем правильный базовый путь
								}]}
								filteredIds={[section.articleId]}
								contentType={contentType} // Пробрасываем тип контента
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}