'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './QuizComponent.module.css';

export default function QuizComponent({ quiz }) {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState([]);
	const [showResult, setShowResult] = useState(false);
	const [result, setResult] = useState(null);
	const [progress, setProgress] = useState(0);

	const currentQuestion = quiz.questions[currentQuestionIndex];
	const isFirstQuestion = currentQuestionIndex === 0;
	const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

	// Функция для расчета прогресса
	const calculateProgress = () => {
		return ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
	};

	// Функция для определения результата
	const calculateResult = () => {
		const points = {};

		// Собираем все баллы из ответов
		answers.forEach((answerId, index) => {
			const question = quiz.questions[index];
			const selectedOption = question.options.find(opt => opt.id === answerId);

			if (selectedOption?.points) {
				for (const [key, value] of Object.entries(selectedOption.points)) {
					points[key] = (points[key] || 0) + value;
				}
			}
		});

		// Находим результат с максимальным совпадением условий
		const bestResult = quiz.results.reduce((best, current) => {
			let currentMatch = 0;

			for (const [key, requiredValue] of Object.entries(current.conditions || {})) {
				if (points[key] >= requiredValue) {
					currentMatch++;
				}
			}

			return currentMatch > (best.match || 0)
				? { result: current, match: currentMatch }
				: best;
		}, { result: quiz.results[0], match: 0 });

		return bestResult.result;
	};

	const handleOptionSelect = (optionId) => {
		const newAnswers = [...answers];
		newAnswers[currentQuestionIndex] = optionId;
		setAnswers(newAnswers);
		setProgress(calculateProgress());
	};

	const handleNext = () => {
		if (isLastQuestion) {
			const finalResult = calculateResult();
			setResult(finalResult);
			setShowResult(true);
		} else {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setProgress(calculateProgress());
		}
	};

	const handlePrev = () => {
		setCurrentQuestionIndex(currentQuestionIndex - 1);
		setProgress(calculateProgress());
	};

	const restartQuiz = () => {
		setCurrentQuestionIndex(0);
		setAnswers([]);
		setShowResult(false);
		setResult(null);
		setProgress(0);
	};

	if (showResult && result) {
		return (
			<div className={styles.resultContainer}>
				<h2 className={styles.resultTitle}>Результат</h2>
				<h3 className={styles.resultName}>ВЫ – {result.title}</h3>
				<div className={styles.resultImage}>
					{result.image && <img src={result.image} alt={result.title} />}
				</div>
				<p className={styles.resultDescription}>{result.description}</p>
				<div className={styles.resultButtons}>
					<button onClick={restartQuiz} className={`${styles.restartButton} text-button`}>
						Перепройти тест
					</button>
					<Link href="/quiz">
						<div className={`${styles.allTestsButton} text-button`}>Ко всем тестам</div>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.quizContainer}>
			<div className={styles.progressBar}>
				<div
					className={styles.progressFill}
					style={{ width: `${progress}%` }}
				></div>
			</div>

			<div className={styles.progressText}>
				Вопрос {currentQuestionIndex + 1}/{quiz.questions.length}
			</div>

			<h3 className={styles.questionText}>{currentQuestion.text}</h3>

			<div className={styles.optionsContainer}>
				{currentQuestion.options.map((option) => (
					<div
						key={option.id}
						className={`${styles.option} ${answers[currentQuestionIndex] === option.id ? styles.selected : ''
							}`}
						onClick={() => handleOptionSelect(option.id)}
					>
						{option.text}
						{option.image && (
							<img
								src={option.image}
								alt={option.text}
								className={styles.optionImage}
							/>
						)}
					</div>
				))}
			</div>

			<div className={styles.navigationButtons}>
				{!isFirstQuestion && (
					<button onClick={handlePrev} className={`${styles.prevButton} text-button`}>
						Назад
					</button>
				)}
				<button
					onClick={handleNext}
					className={`${styles.nextButton} text-button`}
					disabled={answers[currentQuestionIndex] === undefined}
				>
					{isLastQuestion ? 'Узнать результат' : 'Далее'}
				</button>
			</div>
		</div>
	);
}