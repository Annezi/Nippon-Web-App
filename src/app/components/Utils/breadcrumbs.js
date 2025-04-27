export const generateBreadcrumbs = (pathname) => {
	const pathWithoutQuery = pathname.split('?')[0];
	let pathArray = pathWithoutQuery.split('/');
	pathArray.shift();
	pathArray = pathArray.filter(path => path !== '');

	const customLabels = {
		'articles': 'Статьи',
		'news': 'Новости',
		'quiz': 'Тесты',
		'what-to-do': 'Что делать',
		
		'manga': 'Манга',
		'anime': 'Аниме',
		'places': 'Куда сходить'
	};

	const breadcrumbs = pathArray.map((path, index) => {
		const label = customLabels[path.toLowerCase()] ||
			path.replace(/[-_]/g, ' ')
				.split(' ')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');

		const url = '/' + pathArray.slice(0, index + 1).join('/');

		return {
			label,
			url: index < pathArray.length - 1 ? url : null
		};
	});

	breadcrumbs.unshift({ label: 'Главная', url: '/' });

	return breadcrumbs;
};