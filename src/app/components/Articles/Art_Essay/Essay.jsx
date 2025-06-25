"use client";
import './Essay.css';
import ScrollReveal from '../../Utils/ScrollReveal';

export default function Essay({ content }) {
	return (
			<div className="essay-MainInfo">
				{content.map((block, index) => {
					if (block.type === "heading") {
						return (
							<ScrollReveal key={index}>
								<div key={index} className="text-title-m">{block.text}</div>
							</ScrollReveal>
						);
					} else if (block.type === "text") {
						return (
							<ScrollReveal key={index}>
								<div key={index} className="text-paragraph-m" dangerouslySetInnerHTML={{ __html: block.text }} />
							</ScrollReveal>
						);
					} else if (block.type === "image") {
						return (
							<ScrollReveal key={index}>
								<div key={index} className="img-container">
									<img src={block.src} alt={block.alt} className="img-container" />
									<div className="img-description text-paragraph-s">{block.description}</div>
								</div>
							</ScrollReveal>
						);
					}
					return null;
				})}
			</div>
	);
}