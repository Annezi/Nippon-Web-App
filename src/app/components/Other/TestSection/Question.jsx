import './Question.css'

export default function Question({ question, onAnswerSelect, selectedAnswerId }) {
	return (
		<div className="Question">
			<div className="question-title text-subtitle-1">{question.text}</div>
			<div className="options text-paragraph">
				{question.options.map((option) => (
					<div
						key={option.id}
						className={`option ${selectedAnswerId === option.id ? "selected" : ""}`}
						onClick={() => onAnswerSelect(option.id, option.points)}
					>
						{option.text}
					</div>
				))}
			</div>
		</div>
	);
}