"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';
import AlarmPopup from '../../UI/Popups/Alarm/Alarm_Popup';

export default function Navigation() {
	const [isAlarmPopupOpen, setIsAlarmPopupOpen] = useState(false);
	const [isInitialRender, setIsInitialRender] = useState(true);
	const pathname = usePathname();

	const isActive = (path) => pathname === path;

	useEffect(() => {
		if (isInitialRender) {
			setIsInitialRender(false);
			return;
		}

		const shouldOpenPopup =
			pathname === '/study' ||
			pathname === '/what-to-do' ||
			pathname === '/quizes' ||
			pathname === '/about';

		if (shouldOpenPopup) {
			setIsAlarmPopupOpen(true);
		} else {
			setIsAlarmPopupOpen(false);
		}
	}, [pathname]);

	useEffect(() => {
		const scrollableElements = document.querySelectorAll('.scrollable');
		if (isAlarmPopupOpen) {
			document.body.style.overflow = 'hidden';
			document.documentElement.style.overflow = 'hidden';
			scrollableElements.forEach((el) => {
				el.style.overflow = 'hidden';
			});
		} else {
			document.body.style.overflow = 'auto';
			document.documentElement.style.overflow = 'auto';
			scrollableElements.forEach((el) => {
				el.style.overflow = 'auto';
			});
		}

		return () => {
			document.body.style.overflow = 'auto';
			document.documentElement.style.overflow = 'auto';
			scrollableElements.forEach((el) => {
				el.style.overflow = 'auto';
			});
		};
	}, [isAlarmPopupOpen]);

	const handleAlarmPopupClose = () => {
		setIsAlarmPopupOpen(false);
	};

	const handleLogoClick = () => {
		if (typeof ym !== 'undefined') {
			ym(100267604, 'reachGoal', 'logo_click');
		}
	};

	return (
		<div className="headers-container">
			<div className="header shadow">
				<div className="header-logo">
					<Link href="/" className="header-logo" onClick={handleLogoClick}>
						<img src="/logo_short-menu.svg" alt="Logo" />
					</Link>
				</div>
				<div className="navbar">
					<div className={`nav-links text-subtitle-s ${isActive('/what-to-do') ? 'active' : ''}`}>
						<Link href="/what-to-do">Что делать</Link>
					</div>
					<div className={`nav-links text-subtitle-s ${isActive('/quizes') ? 'active' : ''}`}>
						<Link href="/quizes">Тесты</Link>
					</div>
					<div className={`nav-links text-subtitle-s ${isActive('/articles') ? 'active' : ''}`}>
						<Link href="/articles">Статьи</Link>
					</div>
					<div className={`nav-links text-subtitle-s ${isActive('/news') ? 'active' : ''}`}>
						<Link href="/news">Новости</Link>
					</div>
					<div className={`nav-links text-subtitle-s ${isActive('/about') ? 'active' : ''}`}>
						<Link href="/about">О нас</Link>
					</div>
				</div>
				<div className="search">
					<Link href="/profile">
						<img src="/Icons/Search.svg" alt="search" />
					</Link>
				</div>
				{isAlarmPopupOpen && <AlarmPopup onClose={handleAlarmPopupClose} />}
			</div>
			<div className="mobile-navbar">
				<div className="mobile-line"></div>
				<div className="mobile-bar">
					<Link href="/where-to-go">
						<div className={`menu-button ${isActive('/what-to-do') ? 'active' : ''}`}>
							<img src="/Icons/WhatToDo.svg" alt="img" />
							<div className="text-subtitle-l">Что делать</div>
						</div>
					</Link>
					<Link href="/quizes">
						<div className={`menu-button ${isActive('/quizes') ? 'active' : ''}`}>
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
	);
}