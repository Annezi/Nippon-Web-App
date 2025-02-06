"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './Navbar.css';
import AlarmPopup from '../../UI/Popups/Alarm/Alarm_Popup';

export default function Navigation() {
  const [isAlarmPopupOpen, setIsAlarmPopupOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.pathname;
    if (
      currentPath === '/study' ||
      currentPath === '/where-to-go' ||
      currentPath === '/travelling' ||
      currentPath === '/about' ||
      currentPath === '/profile'
    ) {
      setIsAlarmPopupOpen(true);
    } else {
      setIsAlarmPopupOpen(false);
    }
  }, [router.pathname]);

  const handleAlarmPopupClose = () => {
    setIsAlarmPopupOpen(false);
  };

  return (
    <div className="headers-container">
      <div className="header shadow">
        <div className="header-logo">
          <Link href="/" className="header-logo">
            <img src="/logo_short-menu.svg" alt="Logo" />
          </Link>
        </div>
        <div className="navbar">
          <div className="nav-links text-subtitle-s">
            <Link href="/where-to-go">Что делать</Link>
          </div>
          <div className="nav-links text-subtitle-s">
            <Link href="/study">Тесты</Link>
          </div>
          <div className="nav-links text-subtitle-s">
            <Link href="/articles">Статьи</Link>
          </div>
          <div className="nav-links text-subtitle-s">
            <Link href="/travelling">Новости</Link>
          </div>
          <div className="nav-links text-subtitle-s">
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
            <div className="menu-button">
              <img src="/Icons/WhatToDo.svg" alt="img" />
              <div className="text-subtitle-l">Что делать</div>
            </div>
          </Link>
          <Link href="/study">
            <div className="menu-button">
              <img src="/Icons/Test.svg" alt="img" />
              <div className="text-subtitle-l">Тесты</div>
            </div>
          </Link>
          <Link href="/articles">
            <div className="menu-button">
              <img src="/Icons/Articles.svg" alt="img" />
              <div className="text-subtitle-l">Статьи</div>
            </div>
          </Link>
          <Link href="/travelling">
            <div className="menu-button">
              <img src="/Icons/News.svg" alt="img" />
              <div className="text-subtitle-l">Новости</div>
            </div>
          </Link>
          <Link href="/about">
            <div className="menu-button">
              <img src="/Icons/AboutUs.svg" alt="img" />
              <div className="text-subtitle-l">О нас</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}