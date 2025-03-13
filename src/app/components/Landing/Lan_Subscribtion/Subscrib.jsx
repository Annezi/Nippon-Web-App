import './Subscrib.css';
import Button from '../../UI/Sub_Button/Sub_Button';
import SubForm from '../../UI/Sub_Form/Sub_Form';
import { useState } from 'react';

export default function Subscrib({ text }) {
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubscribe = () => {
		if (!name.trim() || !email.trim()) {
			alert('Пожалуйста, заполните все поля!');
			return;
		}

		setIsSubscribed(true);
		console.log('Подписка:', { name, email });

		// Отправка события в Яндекс.Метрику
		if (typeof ym !== 'undefined') {
			ym(100267604, 'reachGoal', 'subscribe'); // Цель "Подписка"
			ym(100267604, 'reachGoal', 'subscribe_button_click'); // Цель "Клик по кнопке"
		}

		setName('');
		setEmail('');
	};

	return (
		<div className="subscribtion-container">
			<div className="sub-info-left text-title-1">{text}</div>
			<div className="sub-info-right">
				<SubForm
					name={name}
					email={email}
					setName={setName}
					setEmail={setEmail}
				/>
				<Button isSubscribed={isSubscribed} onClick={handleSubscribe} />
			</div>
		</div>
	);
}