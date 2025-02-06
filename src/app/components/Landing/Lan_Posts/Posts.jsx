import './Posts.css';
import PostCard from '../Mol_PostCards/PostCard';

export default function Posters() {
	return (
		<div className="posters-container">
			<div className="posters-first-line">
				<div className="poster-first-line-content">
					<div className="pfl-title text-title-m">Разбираем сложные и не очень темы вместе</div>
					<div className="pfl-links">
						<div className='links-text text-title-s'>ЧИТАЙ ТУТ</div>
						<div className='links-logo'>
							<a href="https://t.me/michi_jp" target="_blank" rel="noreferrer"><img className='posts-logo' src="./Landing/tg_logo.svg" alt="tg" /></a>
							<img className='posts-logo' src="./Landing/tt_logo.svg" alt="tt" />
						</div>
					</div>
				</div>
				<PostCard
					title="ХРАМЫ И РЕЛИГИЯ. ВО ЧТО ВЕРЯТ СОВРЕМЕННЫЕ ЯПОНЦЫ"
					description="Как японцы внедрили свою культуру в вероисповедание и кто их современные божества"
					image="./Landing/Post_L.png"
					size="large"
					wide="large"
				/>
			</div>
			<div className="poster-second-line">
				<div className="poster-second-line-right">
					<div>
						<PostCard
							title="МММ ЯПОНСКАЯ ЕДА! ОЙ!"
							description="Отвечаем на вопросы, почему вы будете не в восторге от настоящей японской еды"
							image="./Landing/Post_S1.png"
							size="small"
							wide="small"
						/>
					</div>
					<div className='psl-low'>
						<PostCard
							title="КОШКИ НЕКО"
							description="Как милые котики стали частью культуры и жизни каждого японца"
							image="./Landing/Post_M.png"
							size="medium"
							wide="medium"
						/>
					</div>
				</div>
				<div className="poster-second-line-left">
					<div>
						<PostCard
							title="КАРПЫ КОИ И ГДЕ ИХ НАЙТИ"
							description="Нашли 12 мест, где вы сможете познакомится с прелестными карпами Кои не только в Японии"
							image="./Landing/Post_S2.png"
							size="small"
							wide="small"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}