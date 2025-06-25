import ArticleList from '../../Articles/Article_List/ArticleList';
import articles from "../../../database/articlesData.json"
import ScrollReveal from '../../Utils/ScrollReveal';
import './MainInfo.css';

export default function Info() {
	return (
		<div className='mainBanner-container'>
			<ScrollReveal index={0}>
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
				<div className="lan-main-card">
					<div className="lan-main-card-text text-subtitle-1">СТАТЬЯ ДНЯ</div>
					<ArticleList
						articles={articles.articles}
						renderStyle="manual"
						manualConfig={[{ id: "populyarnye-yaponskie-blyuda", variant: "custom" }]}
					/>
				</div>
				<div className="lan-right-card">
					<div className="text-subtitle-1">СЛОВО ДНЯ</div>
					<div className="banner-r-card-img">
						<img src="./Landing/tanaka-san-smart.png" alt="tanaka-san" />
					</div>
					<div className="banner-r-card-title text-subtitle-1">ясураги (яп. 安らぎ)</div>
					<div className="text-paragraph">нежное чувство ощущения внутреннего покоя. ваше сердце спокойно и непринуждённо находится в гармонии с самим собой</div>
				</div>
			</div>
			</ScrollReveal>
		</div>
	);
}