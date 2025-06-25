"use client";

import './Banner.css';
import ScrollReveal from '../../Utils/ScrollReveal';
import Tag from "../../UI/Tags/Tag/Tag";
import Breadcrumbs from "../../UI/Breadcrumbs/Breadcrumbs";
import { usePathname } from 'next/navigation';
import { generateBreadcrumbs } from '../../Utils/breadcrumbs';

export default function Banner({ tags, title, description, readTime, publishDate, cover }) {
	const pathname = usePathname();
	const breadcrumbItems = generateBreadcrumbs(pathname);

	return (
		<ScrollReveal index={0}>
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
								<Tag key={index} text={tag} size='small' theme='white' isActive={false} />
							))}
						</div>
						<div className="ArticleInfo-title text-title-l">{title}</div>
						<div className="ArticleInfo-description text-paragraph-m">{description}</div>
					</div>
					<div className="infoMain-publushDate text-paragraph-s">{publishDate}</div>
				</div>
				<div className="darken-bg"></div>
			</div>
		</ScrollReveal>
	);
}