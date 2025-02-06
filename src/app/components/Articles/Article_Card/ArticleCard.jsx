"use client";
import "./ArticleCard.css";
import Tag from "../../UI/Tags/Tag";

export default function ArticleCard({ article, isLarge, shadow = true }) {
	const { cover, tags, title, description } = article;
	const hasTags = tags && tags.length > 0;

	return (
		<div className={`article-card ${isLarge ? "article-card-large" : "article-card-mini"} ${shadow ? "shadow" : ""}`}>
			<div className="article-cover">
				<img src={cover} alt={title} />
			</div>
			{hasTags && (
				<div className="article-tags">
					{tags.slice(0, 2).map((tag, index) => (
						<Tag key={index} text={tag} size="small" theme="red" />
					))}
				</div>
			)}
			<div className="article-title text-subtitle-2">{title}</div>
			<div className="article-description text-paragraph">{description}</div>
		</div>
	);
}