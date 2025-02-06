import './Info.css';

export default function Info() {
	return (
		<div className='mainBanner-container'>
			<div className="mainBanner-info-plate">
				<div className='mainBanner'>
					<div className="black-dots">
						<div className="dot dot-top-left"></div>
						<div className="dot dot-top-right"></div>
						<div className="dot dot-bot-left"></div>
						<div className="dot dot-bot-right"></div>
					</div>
					<div className="nippon-logo">
						<img src="./logo_long.svg" alt="logo" className='custom-img' />
					</div>
					<div className="nippon-slogan text-title-1">МЕДИА О ЯПОНСКОЙ КУЛЬТУРЕ</div>
				</div>
				<div className="lan-card">
					<div className="banner-l-card-img">
						<img src="./Landing/article-photo.png" alt="preview" />
					</div>
					<div className="text-subtitle-1">мы любим кушать роллы и смотреть аниме, ня каваи</div>
					<div className="text-paragraph">А если серьезно, мы просто любим Японию и хотим рассказать о ней как можно больше, не превращая это в нудные лекции по культуре.</div>
				</div>
				<div className="lan-right-card">
					<div className="banner-r-card-img">
						<img src="./Landing/tanaka-san-smart.png" alt="tanaka-san" />
					</div>
					<div className="banner-r-card-title text-subtitle-1">НИППОН (яп. 日本)</div>
					<div className="text-paragraph">Одно из произношений слова Япония. Еще эти кандзи произносят как Нихон, что сейчас употребляется чаще. Однако Ниппон появился раньше, и, например, в Осаке до сих пор по названиям мест заметно, что тут Ниппон употребляли больше. </div>
				</div>
			</div>
		</div>
	);
}