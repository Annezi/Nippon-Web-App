import { useState } from 'react';
import Tag from '../Tag/Tag';
import Button from '../../Button/Button';
import "./TagList.css";

export default function TagList({ articles, size = 'medium', theme = 'white', isActive = true }) {
	const allTags = articles.flatMap(article => article.tags || []);
	const uniqueTags = [...new Set(allTags)];

	// Состояние для хранения активных тегов
	const [activeTags, setActiveTags] = useState({});

	// Обработчик клика по тегу
	const handleTagClick = (tag) => {
		setActiveTags(prev => ({
			...prev,
			[tag]: !prev[tag]
		}));
	};

	// Сброс всех активных тегов
	const resetFilters = () => {
		setActiveTags({});
	};

	// Проверяем, есть ли активные теги
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