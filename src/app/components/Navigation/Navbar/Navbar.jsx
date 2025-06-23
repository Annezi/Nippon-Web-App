"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./Navbar.css";

export default function Navigation() {
    const pathname = usePathname();
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [isSearchPage, setIsSearchPage] = useState(false);

    const isActive = (path) => pathname === path;

    useEffect(() => {
        setIsSearchPage(pathname === '/search');
    }, [pathname]);

    useEffect(() => {
        const scrollableElements = document.querySelectorAll('.scrollable');

        if (!isInitialRender) {
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
            scrollableElements.forEach((el) => {
                el.style.overflow = 'auto';
            });
        };
    }, [isInitialRender]);

    const handleLogoClick = () => {
        if (typeof ym !== 'undefined') {
            ym(100267604, "reachGoal", "logo_click");
        }
    };

    return (
        <div className="headers-container">
            {/* Desktop navbar */}
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
                    <div className={`nav-links text-subtitle-s ${isActive('/quiz') ? 'active' : ''}`}>
                        <Link href="/quiz">Тесты</Link>
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
                    {isSearchPage ? (
                        <button onClick={() => window.history.back()} className="search-button">
                            <img src="/Icons/Cross.svg" alt="close" className="search-icon" />
                        </button>
                    ) : (
                        <Link href="/search">
                            <img src="/Icons/Search.svg" alt="search" className="search-icon" />
                        </Link>
                    )}
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
    );
}