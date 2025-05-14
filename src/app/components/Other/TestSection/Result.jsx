import Tag from "../../UI/Tags/Tag/Tag";
import Button from "../../UI/Button/Button";
import "./Result.css"

export default function Result({ score }) {
	let resultText = "";
	let imageSrc = "";
	let title = "";

	if (score <= 1) {
		resultText = "Ты совсем юнец! Тебе еще многое предстоит пройти, скорее подписывайся и читай наши статьи";
		imageSrc = "./Landing/test-low-score.png";
		title = "Кохай";
	} else if (score <= 3) {
		resultText = "Ого! Кажется, ты уже можешь что-то сказать и знаешь, что Япония — это не только аниме и манга!";
		imageSrc = "./Landing/test-mid-score.png";
		title = "Сэмпай";
	} else {
		resultText = "Да ты просветленный ум! Почти как сэнсэй, который освоил тайные техники ниндзюцу. Делись своими тайнами!";
		imageSrc = "./Landing/test-high-score.png";
		title = "сэнсэй";
	}

	return (
		<div className="Result">
			<Tag text="ТЕСТ" size="small" theme="white" />
			<div className="result-content">
				<img src={imageSrc} alt="Результат теста" />
				<div className="result-text">
					<div className="text-subtitle-1">{title}</div>
					<div className="text-paragraph">{resultText}</div>
				</div>
			</div>
			<Button text="ПОДЕЛИТЬСЯ ТЕСТОМ" theme="white" />
		</div>
	);
}