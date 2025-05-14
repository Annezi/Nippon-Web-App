import "./TestBannerContent.css"
import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import Tag from "../../UI/Tags/Tag/Tag";
import Button from "../../UI/Button/Button";

const questions = [
	{
		id: 1,
		text: "1. Японская валюта?",
		options: [
			{ id: 1, text: "Йена", points: 1 },
			{ id: 2, text: "Вона", points: 0 },
			{ id: 3, text: "Донг", points: 0 },
			{ id: 4, text: "Юань", points: 0 },
		],
	},
	{
		id: 2,
		text: "2. религия в японии?",
		options: [
			{ id: 1, text: "Синтоизм", points: 1 },
			{ id: 2, text: "Даосизм", points: 0 },
			{ id: 3, text: "Христианство", points: 0 },
			{ id: 4, text: "Буддизм", points: 0 },
		],
	},
	{
		id: 3,
		text: "3. Япония знаменита:",
		options: [
			{ id: 1, text: "Играми", points: 0 },
			{ id: 2, text: "Литературой", points: 0 },
			{ id: 3, text: "Театром", points: 0 },
			{ id: 4, text: "Аниме", points: 1 },
		],
	},
	{
		id: 4,
		text: "4. японский поклон:",
		options: [
			{ id: 1, text: "Одгизи", points: 1 },
			{ id: 2, text: "Кайдзу", points: 0 },
			{ id: 3, text: "Огидзу", points: 0 },
			{ id: 4, text: "Суджд", points: 0 },
		],
	},
];

export default function TestBannerContent() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [selectedAnswerId, setSelectedAnswerId] = useState(null);
	const [selectedAnswerPoints, setSelectedAnswerPoints] = useState(null);
  
	const handleAnswerSelect = (answerId, points) => {
	  setSelectedAnswerId(answerId); 
	  setSelectedAnswerPoints(points); 
	};
  
	const handleNextQuestion = () => {
	  if (selectedAnswerId !== null) {
		setScore(score + selectedAnswerPoints); 
		setSelectedAnswerId(null); 
		setSelectedAnswerPoints(null);
		setCurrentQuestionIndex(currentQuestionIndex + 1); 
	  }
	};
  
	const currentQuestion = questions[currentQuestionIndex];

	return (
		<div className="Test">
			{currentQuestionIndex < questions.length ? (
				<>
					<Tag text="ТЕСТ" size="small" theme="white" />
					<Question
						question={currentQuestion}
						onAnswerSelect={handleAnswerSelect}
						selectedAnswerId={selectedAnswerId}
					/>
					<div className="number-button">
						<div className="text-subtitle-1">
							{currentQuestionIndex + 1}/{questions.length}
						</div>
						<Button
							text={currentQuestionIndex === questions.length - 1 ? "Результат" : "Далее"}
							theme="white"
							onClick={handleNextQuestion}
							disabled={selectedAnswerId === null}
						/>
					</div>
				</>
			) : (
				<Result score={score} />
			)}
		</div>
	);
}