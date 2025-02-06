import './About.css'

export default function About() {
	return (
		<div className="about-container">
			<div className="about-title">
				<img src="./Landing/tanaka-san-strange.png" alt="-" />
				<div className="text-title-1">а еще...</div>
			</div>
			<div className="about-big-img">
				<img src="./Landing/About-pic-1.png" alt="-" />
				<img src="./Landing/About-pic-mobile.png" alt="-" />
			</div>
			<div className="about-text shadow">
				<div className="text-subtitle-1">Статьи</div>
				<div className="text-paragraph">У нас вы можете прочитать много статей про Японию по разным тематикам — культура, еда или язык. Стараемся писать не нудно, шутить шутки и просто веселиться.</div>
			</div>
			<div className="about-img">
				<img src="./Landing/About-pic-2.png" alt="-" />
			</div>
			<div className="about-text shadow">
				<div className="text-subtitle-1">что поделать</div>
				<div className="text-paragraph">В разделе «Что поделать» вы можете найти, какую мангу почитать или какое посмотреть аниме. Также, проведем вам тур по японским местечкам в России.</div>
			</div>
			<div className="about-img">
				<img src="./Landing/About-pic-3.png" alt="-" />
			</div>
			<div className="about-text shadow">
				<div className="text-subtitle-1">тесты</div>
				<div className="text-paragraph">У нас есть куча интересных тестов, связанных с Японией. Если вам всегда было интересно, каким бы вы были екаем или какой город вам подходит по вайбу, заходите сюда.</div>
			</div>
		</div>
	);
}