import './News.css';
import Marquee from '../../UI/Marquee/Marquee';

export default function News() {
	const news_text1 = 'За последний месяц в Японии погибло 200 человек по причине переутомления на работе. Дальше — больше. '; // Текст для первой строки
	const news_text2 = 'Обычная аниме-сходка в токио на самом деле оказалась гэнг-бэнг вечеринкой. ';

	return (
		<div className="news-container">
			<div className="alarm-news">
				<Marquee text={news_text1} />
				<Marquee text={news_text2} />
			</div>
			<div className="news-info">
				<div className="news-text">
					<div className="news-head text-subtitle-1">больше типичных японских новостей вы можете почитать у нас</div>
					<div className="news-description text-paragraph">Мы тщательно отбираем новости для публикации, чтобы вам не было скучно их читать.</div>
				</div>
				<div className="news-tanaka-san">
					<img src="./Landing/tanaka-san-happy.png" alt="tanaka-san" />
				</div>
			</div>
		</div>
	)
}