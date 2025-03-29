import placeData from '../../database/wtd/placeData.json';
import animeData from '../../database/wtd/animeData.json';
import mangaData from '../../database/wtd/mangaData.json';

export const getDataByContentType = (contentType) => {
	try {
		console.log(`Getting data for ${contentType}`);

		switch (contentType) {
			case 'places':
				return Array.isArray(placeData?.places) ? placeData.places : [];
			case 'anime':
				return Array.isArray(animeData?.anime) ? animeData.anime : [];
			case 'manga':
				return Array.isArray(mangaData?.manga) ? mangaData.manga : [];
			default:
				console.warn(`Unknown contentType: ${contentType}`);
				return [];
		}
	} catch (error) {
		console.error('Error in getDataByContentType:', error);
		return [];
	}
};