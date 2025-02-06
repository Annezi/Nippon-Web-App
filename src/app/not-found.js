"use client";
import { useState, useEffect } from 'react';
import Header from "./components/Navigation/Navbar/Navbar";
import InProgress from "./components/InProgress/InProgress";
import AlarmPopup from './components/UI/Popups/Alarm/Alarm_Popup';
import './components/UI/SocialMadiaLinks/SocialMadiaLinks.css'

export default function not_found() 
{
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