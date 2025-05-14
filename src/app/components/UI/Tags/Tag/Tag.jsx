import './Tag.css';

export default function Tag({
	text,
	size = 'medium',
	theme = 'white',
	isActive = true,
	isClicked = false
}) {
	const tagClass = `tag tag-${size} tag-${theme} ${isClicked ? 'tag-clicked' : ''} ${!isActive ? 'tag-inactive' : ''}`;

	let textClass = '';
	if (size === 'small') {
		textClass = 'text-placeholder';
	} else if (size === 'medium') {
		textClass = 'text-button';
	} else if (size === 'large') {
		textClass = 'text-subtitle-1';
	}

	return (
		<div className={tagClass}>
			<span className={textClass}>{text}</span>
			{isClicked && (
				<span className="tag-cross">×</span>
			)}
		</div>
	);
}