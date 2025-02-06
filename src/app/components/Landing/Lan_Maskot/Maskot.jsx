import './Maskot.css';

export default function Maskot() {
	return (
		<div className="Maskot-container">
			<div className="Maskot-info">
				<div className="text-title-1">знакомьтесь, это танака-сан</div>
				<div className="text-paragraph">Вы, наверное, успели обратить на него внимание. Это главное лицо нашего бренда и, главное, верный друг. Он с удовольствием поможет вам разобраться в Японии, можете называть его сенсей.</div>
			</div>
			<div className="maskot-img">
				<img src="./Landing/big-tanaka-san.png" alt="-" />
			</div>
		</div>
	)
}