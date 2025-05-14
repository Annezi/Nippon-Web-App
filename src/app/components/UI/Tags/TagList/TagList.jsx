import { useState } from 'react';
import Tag from '../Tag/Tag';
import Button from '../../Button/Button';
import "./TagList.css";

export default function TagList({
	articles,
	size = 'medium',
	theme = 'white',
	isActive = true,
	onTagFilterChange
}) {
	const allTags = articles.flatMap(article => article.tags || []);
	const uniqueTags = [...new Set(allTags)];

	const [activeTags, setActiveTags] = useState({});

	const handleTagClick = (tag) => {
		const newActiveTags = {
			...activeTags,
			[tag]: !activeTags[tag]
		};
		setActiveTags(newActiveTags);
		// Передаем массив активных тегов в родительский компонент
		const selectedTags = Object.keys(newActiveTags).filter(tag => newActiveTags[tag]);
		onTagFilterChange(selectedTags);
	};

	const resetFilters = () => {
		setActiveTags({});
		onTagFilterChange([]); // Сбрасываем фильтрацию по тегам
	};

	const hasActiveTags = Object.values(activeTags).some(Boolean);

	return (
		<div className="tag-list">
			{uniqueTags.map(tag => (
				<div key={tag} onClick={() => handleTagClick(tag)}>
					<Tag
						text={tag}
						size={size}
						theme={theme}
						isActive={isActive}
						isClicked={activeTags[tag]}
					/>
				</div>
			))}

			{hasActiveTags && (
				<div className="reset-filters-wrapper">
					<Button
						text="Сбросить фильтры"
						theme={theme}
						onClick={resetFilters}
					/>
				</div>
			)}
		</div>
	);
}