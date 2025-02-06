"use client";

import './Banner.css';
import Tag from "../../UI/Tags/Tag";
import Breadcrumbs from "../../UI/Breadcrumbs/Breadcrumbs";

export default function Banner({ tags, title, description, readTime, publishDate, cover }) {
	const breadcrumbItems = [
		{ label: 'Статьи', url: 'Articles' },
		{ label: 'Культура', url: 'Culture' },
		{ label: 'Праздники', url: 'Culture/Holidays' }
	];

	return (
		<div className="banner-container" style={{ backgroundImage: `url(${cover})` }}>
			<div className="ban-infoSub">
				<div className="ban-breadcrumbs">
					<Breadcrumbs items={breadcrumbItems} />
				</div>
				<div className="ban-readTime">
					<div className="readTime-title text-paragraph-m">Время чтения:</div>
					<div className="readTime-time text-paragraph-m">{readTime}</div>
				</div>
			</div>
			<div className="ban-infoMain">
				<div className="infoMain-ArticleInfo">
					<div className="ArticleInfo-tags">
						{tags.map((tag, index) => (
							<Tag key={index} text={tag} size='small' theme='white' />
						))}
					</div>
					<div className="ArticleInfo-title text-title-l">{title}</div>
					<div className="ArticleInfo-description text-paragraph-m">{description}</div>
				</div>
				<div className="infoMain-publushDate text-paragraph-s">{publishDate}</div>
			</div>
			<div className="darken-bg"></div>
		</div>
	);
}