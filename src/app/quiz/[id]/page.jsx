import QuizDetailClient from "./QuizDetailClient";
import quizData from "../../database/quizData.json";

async function getQuizById(id) {
	const quizItem = quizData.quiz.find(item => item.id === id);
	return quizItem || null;
}

export async function generateMetadata({ params }) {
	const quiz = await getQuizById(params.id);
	return {
		title: quiz?.title || "Тест не найден",
		description: quiz?.description || "",
		openGraph: {
			images: quiz?.cover ? [{ url: quiz.cover }] : []
		}
	};
}

export default async function QuizDetail({ params }) {
	const quiz = await getQuizById(params.id);
	if (!quiz) return <div>Тест не найден</div>;

	return <QuizDetailClient quiz={quiz} />;
}