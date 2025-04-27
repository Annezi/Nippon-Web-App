"use client";
import "./ArticleCard.css";
import Tag from "../../UI/Tags/Tag";
import Image from "next/image";

export default function ArticleCard({
	article,
	variant = "mini",
	shadow = variant !== 'custom',
	className = "",
	imageSizes = null
}) {
	const { cover, tags, title, description } = article;
	const hasTags = tags && tags.length > 0;

	// Размеры контейнера для изображения
	const containerSizes = {
		mini: { width: 284, height: 284 },
		large: { width: 630, height: 284 },
		custom: { width: '100%', height: 284 }
	};

	return (
		<div className={`article-card article-card-${variant} ${shadow ? "shadow" : ""} ${className}`}>
			<div className="article-cover-container" style={{
				width: containerSizes[variant].width,
				height: containerSizes[variant].height
			}}>
				<Image
					src={cover}
					alt={title}
					fill
					sizes={variant === 'large' ? "(max-width: 491px) 100vw, 50vw" : "100vw"}
					style={{
						objectFit: 'cover',
						objectPosition: 'center'
					}}
					quality={85}
					priority={variant === 'custom'}
				/>
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