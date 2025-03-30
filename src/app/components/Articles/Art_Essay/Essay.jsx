"use client";
import './Essay.css';

export default function Essay({ content }) {
	return (
		<div className="essay-MainInfo">
			{content.map((block, index) => {
				if (block.type === "heading") {
					return (
						<div key={index} className="text-title-m">{block.text}</div>
					);
				} else if (block.type === "text") {
					return (
						<div key={index} className="text-paragraph-m" dangerouslySetInnerHTML={{ __html: block.text }} />
					);
				} else if (block.type === "image") {
					return (
						<div key={index} className="img-container">
							<img src={block.src} alt={block.alt} className="img-container"/>
							<div className="img-description text-paragraph-s">{block.description}</div>
						</div>
					);
				}
				return null;
			})}
		</div>
	);
}