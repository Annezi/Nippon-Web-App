import WTDDetailClient from "./WTDDetailClient";
import data from "../../database/wtd/whatToDoSectionsData.json";

const whatToDoSections = data.sections ? data : { sections: [] };

export async function generateStaticParams() {
	return whatToDoSections.sections.map((section) => ({
		id: section.id.toString(),
	}));
}

async function getSectionById(id) {
	if (!id) {
		console.error('No id provided');
		return null;
	}

	const sectionId = parseInt(id);
	const section = whatToDoSections.sections.find(s => s.id === sectionId);

	console.log('Searching for section id:', sectionId);
	console.log('Available sections:', whatToDoSections.sections);
	console.log('Found section:', section);

	return section || null;
}

export async function generateMetadata({ params }) {
	const section = await getSectionById(params?.id);

	if (!section) {
		return {
			title: "Раздел не найден",
			description: "Извините, но запрошенный раздел не существует.",
		};
	}

	return {
		title: `Что делать: ${section.contentType}`,
		description: section.description,
	};
}

export default async function WTDDetail({ params }) {
	if (!params?.id) {
		console.error('No id in params:', params);
		return <div>Ошибка: ID раздела не указан</div>;
	}

	const section = await getSectionById(params.id);

	if (!section) {
		console.error('Section not found for id:', params.id);
		return <div>Раздел не найден</div>;
	}

	return <WTDDetailClient section={section} />;
}