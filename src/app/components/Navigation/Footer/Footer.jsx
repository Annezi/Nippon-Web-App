import "./Footer.css"
import "../Navbar/Navbar.css"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Footer() {
	const pathname = usePathname();
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [isSearchPage, setIsSearchPage] = useState(false);

    const isActive = (path) => pathname === path;

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

			{/* Mobile navbar */}
            <div className="mobile-navbar shadow">
                <div className="mobile-line"></div>
                <div className="mobile-bar">
                    <Link href="/what-to-do">
                        <div className={`menu-button ${isActive('/what-to-do') ? 'active' : ''}`}>
                            <img src="/Icons/WhatToDo.svg" alt="img" />
                            <div className="text-subtitle-l">Что делать</div>
                        </div>
                    </Link>
                    <Link href="/quiz">
                        <div className={`menu-button ${isActive('/quiz') ? 'active' : ''}`}>
                            <img src="/Icons/Test.svg" alt="img" />
                            <div className="text-subtitle-l">Тесты</div>
                        </div>
                    </Link>
                    <Link href="/articles">
                        <div className={`menu-button ${isActive('/articles') ? 'active' : ''}`}>
                            <img src="/Icons/Articles.svg" alt="img" />
                            <div className="text-subtitle-l">Статьи</div>
                        </div>
                    </Link>
                    <Link href="/news">
                        <div className={`menu-button ${isActive('/news') ? 'active' : ''}`}>
                            <img src="/Icons/News.svg" alt="img" />
                            <div className="text-subtitle-l">Новости</div>
                        </div>
                    </Link>
                    <Link href="/about">
                        <div className={`menu-button ${isActive('/about') ? 'active' : ''}`}>
                            <img src="/Icons/AboutUs.svg" alt="img" />
                            <div className="text-subtitle-l">О нас</div>
                        </div>
                    </Link>
                </div>
            </div>
		</div>
	)
}