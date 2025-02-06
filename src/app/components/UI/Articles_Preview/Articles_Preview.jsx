import "./Articles_Preview.css"

export default function ArticlesPreview({ title, description, backgroundImage }) {
	const articlesPreviewStyle = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	};

	return (
		<div className="Articles_Preview-container" style={articlesPreviewStyle}>
			<div className="Articles_Preview-darken">
				<div className="ArtPrev-Title text-subtitle-m"> {title} </div>
				<div className="ArtPrev-Description text-paragraph-s"> {description} </div>
			</div>
		</div>
	)
}