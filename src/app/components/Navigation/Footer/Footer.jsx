import "./Footer.css"
import Link from 'next/link';

export default function Footer() {

	return (
		<div className="footer-container">
			<div className="footer-content-wrapper">
				<div className="footer-content-img">
					<Link href="/"><img src="/logo_short-menu.svg" alt="-" /></Link>
				</div>
				<div className="footer-content-links">
					<div className="text-subtitle-2" >
						<Link href="/what-to-do">Что делать</Link>
					</div>
					<div className="text-subtitle-2" >						
						<Link href="/quiz">Тесты</Link>
					</div>
					<div className="text-subtitle-2" >
						<Link href="/articles">Статьи</Link>
					</div>
					<div className="text-subtitle-2" >						
						<Link href="/news">Новости</Link>
					</div>
					<div className="text-subtitle-2" >
						<Link href="/about">О нас</Link>
					</div>
				</div>
			</div>
		</div>
	)
}