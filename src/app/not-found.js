"use client";
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Header from "./components/Navigation/Navbar/Navbar";
import './components/UI/SocialMadiaLinks/SocialMadiaLinks.css';

const InProgress = dynamic(() => import("./components/InProgress/InProgress"), { ssr: false });
const AlarmPopup = dynamic(() => import('./components/UI/Popups/Alarm/Alarm_Popup'), { ssr: false });

export default function NotFound() {
	const [isAlarmPopupOpen, setIsAlarmPopupOpen] = useState(true);

	const handleAlarmPopupClose = () => {
		setIsAlarmPopupOpen(false);
	};

	return (
		<div className="ContainerBox">
			{isAlarmPopupOpen && <AlarmPopup onClose={handleAlarmPopupClose} />}
			<Header />
			<InProgress />
		</div>
	);
}