'use client';
import { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navigation/Navbar/Navbar';
import Footer from '../components/Navigation/Footer/Footer';
import MonthBest from '../components/Main/Main_MonthBest/MonthBest';
import ArticleList from '../components/Articles/Article_List/ArticleList';
import styles from './search.module.css';

// Импортируем все данные напрямую
import animeData from '../database/animeData.json';
import mangaData from '../database/mangaData.json';
import placeManga from '../database/placeData.json';
import articlesData from '../database/articlesData.json';
import newsData from '../database/newsData.json';
import quizData from '../database/quizData.json';

export default function SearchPage() {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	// Мемоизированные данные
	const allData = useMemo(() => ({
		articles: articlesData.articles || [],
		anime: animeData.anime || [],
		manga: mangaData.manga || [],
		news: newsData.news || [],
		quiz: quizData.quiz || [],
		placeManga: placeManga.placeManga || []
	}), []);

	// Мемоизированная функция поиска
	const searchInData = useMemo(() => (query) => {
		if (!query.trim()) return [];

		const searchTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 0);

		let allResults = [];

		Object.entries(allData).forEach(([type, items]) => {
			const results = items.filter(item => {
				if (!item.title) return false;
				const title = item.title.toLowerCase();
				return searchTerms.some(term => title.includes(term));
			}).map(item => ({
				...item,
				contentType: type === 'articles' ? 'articles' :
					type === 'anime' ? 'anime' :
						type === 'manga' ? 'manga' :
							type === 'news' ? 'news' :
								type === 'quiz' ? 'quiz' : 'placeManga'
			}));

			allResults = [...allResults, ...results];
		});

		return allResults;
	}, [allData]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchQuery.trim()) {
				setIsLoading(true);
				const results = searchInData(searchQuery);
				setSearchResults(results.length > 0 ? results : []);
				setIsLoading(false);
			} else {
				setSearchResults(null);
			}
		}, 500);

		return () => clearTimeout(timer);
	}, [searchQuery, searchInData]);

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	const handleSearch = () => {
		if (!searchQuery.trim()) {
			setSearchResults(null);
			return;
		}

		setIsLoading(true);
		setTimeout(() => {
			const results = searchInData(searchQuery);
			setSearchResults(results.length > 0 ? results : []);
			setIsLoading(false);
		}, 300);
	};

	return (
		<div className="ContainerBox">
			<Navbar />

			<main className={styles.searchPage}>
				<div className={styles.searchWrapper}>
					<div className={`${styles.searchContainer} ${searchQuery ? styles.active : ''}`}>
						<input
							type="text"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							onKeyPress={handleKeyPress}
							className={`${styles.searchInput} text-placeholder ${searchQuery ? styles.hasText : ''}`}
							placeholder="Введите поисковый запрос"
						/>
						<button
							onClick={handleSearch}
							className={`${styles.searchButton} text-button`}
							disabled={!searchQuery.trim() || isLoading}
						>
							{isLoading ? (
								<span className={styles.spinner}></span>
							) : (
								'Найти'
							)}
						</button>
					</div>
				</div>

				{/* Контент с фиксированной минимальной высотой */}
				<div className={styles.contentArea}>
					{!searchQuery && (
						<div className={styles.defaultContent}>
							<MonthBest />
						</div>
					)}

					{isLoading && (
						<div className={styles.skeletonContainer}>
							{[...Array(5)].map((_, i) => (
								<div key={i} className={styles.skeletonItem}></div>
							))}
						</div>
					)}

					{!isLoading && searchQuery && searchResults?.length === 0 && (
						<div className={styles.noResults}>
							<img src="/OtherImg/no-results.png" alt="Ничего не найдено" />
							<p className="text-subtitle-1">По запросу "{searchQuery}" ничего не найдено</p>
						</div>
					)}

					{!isLoading && searchResults && searchResults.length > 0 && (
						<div className={styles.resultsContainer}>
							<h2 className={`${styles.resultsTitle} text-subtitle-1`}>
								Найдено {searchResults.length} результатов по запросу "{searchQuery}"
							</h2>

							<ArticleList
								articles={searchResults}
								renderStyle="catalog"
								contentType="search"
								shadow={true}
							/>
						</div>
					)}
				</div>
			</main>

			<Footer />
		</div>
	);
}