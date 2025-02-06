import './Tag.css'

export default function Tag({ text, size = 'medium', theme = 'white' }) {
	const tagClass = `tag tag-${size} tag-${theme}`;

	let textClass = '';
	if (size === 'small') {
		textClass = 'text-placeholder';
	} else if (size === 'medium') {
		textClass = 'text-paragraph-l';
	} else if (size === 'large') {
		textClass = 'text-subtitle-1';
	}

	return (
		<div className={tagClass}>
			<span className={textClass}>{text}</span>
		</div>
	);
}