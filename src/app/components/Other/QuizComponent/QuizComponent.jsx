'use client';
import { useState } from 'react';
import styles from './QuizComponent.module.css';

export default function QuizComponent({ quiz }) {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState([]);
	const [showResult, setShowResult] = useState(false);
	const [result, setResult] = useState(null);

	const currentQuestion = quiz.questions[currentQuestionIndex];
	const isFirstQuestion = currentQuestionIndex === 0;
	const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

	const handleOptionSelect = (optionId) => {
		const newAnswers = [...answers];
		newAnswers[currentQuestionIndex] = optionId;
		setAnswers(newAnswers);
	};

	const handleNext = () => {
		if (isLastQuestion) {
			// В реальном приложении здесь была бы логика определения результата
			setResult(quiz.results[0]); // Просто берем первый результат для примера
			setShowResult(true);
		} else {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	};

	const handlePrev = () => {
		setCurrentQuestionIndex(currentQuestionIndex - 1);
	};

	const restartQuiz = () => {
		setCurrentQuestionIndex(0);
		setAnswers([]);
		setShowResult(false);
		setResult(null);
	};

	if (showResult && result) {
		return (
			<div className={styles.resultContainer}>
				<h2 className={styles.resultTitle}>Результат</h2>
				<h3 className={styles.resultName}>## ВЫ – {result.title}</h3>
				<div className={styles.resultImage}>
					{result.image && <img src={result.image} alt={result.title} />}
				</div>
				<p className={styles.resultDescription}>{result.description}</p>
				<div className={styles.resultButtons}>
					<button onClick={restartQuiz} className={styles.restartButton}>
						Перепройти тест
					</button>
					<button className={styles.allTestsButton}>Ко всем тестам</button>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.quizContainer}>
			<div className={styles.progress}>
				ВОПРОС {currentQuestionIndex + 1}/{quiz.questions.length}
			</div>
			<h3 className={styles.questionText}>{currentQuestion.text}</h3>

			<div className={styles.optionsContainer}>
				{currentQuestion.options.map((option) => (
					<div
						key={option.id}
						className={`${styles.option} ${answers[currentQuestionIndex] === option.id ? styles.selected : ''}`}
						onClick={() => handleOptionSelect(option.id)}
					>
						{option.text}
					</div>
				))}
			</div>

			<div className={styles.navigationButtons}>
				{!isFirstQuestion && (
					<button onClick={handlePrev} className={styles.prevButton}>
						Назад
					</button>
				)}
				<button
					onClick={handleNext}
					className={styles.nextButton}
					disabled={answers[currentQuestionIndex] === undefined}
				>
					{isLastQuestion ? 'Узнать результат' : 'Далее'}
				</button>
			</div>
		</div>
	);
}