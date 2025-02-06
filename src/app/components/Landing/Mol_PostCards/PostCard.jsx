import './PostCard.css';

export default function PostCard({ title, description, image, size, wide }) {
	return (
		<div className={`post-card shadow post-card-${size}`}>
			<div className={`post-card-content-${wide}`}>
				<div className="post-card-title text-title-s">{title}</div>
				<div className="post-card-description text-paragraph-s">{description}</div>
				<img src={image} alt={title} className="post-card-image" />
			</div>
		</div>
	);
}