import './Subscrib.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Subscrib({ text }) {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm();

	const onSubmit = (data) => {
		console.log('Подписка:', data);

		// Отправка события в Яндекс.Метрику
		if (typeof ym !== 'undefined') {
			ym(100267604, 'reachGoal', 'subscribe');
			ym(100267604, 'reachGoal', 'subscribe_button_click');
		}

		setIsSubmitted(true);
		reset();

		setTimeout(() => {
			setIsSubmitted(false);
		}, 3000);
	};

	return (
		<div className="subscribtion-container">
			<div className="sub-info-left text-title-1">{text}</div>
			<div className="sub-info-right">
				{isSubmitted ? (
					<div className="success-message">
						Вы успешно подписались, Аригато!
					</div>
				) : (
					<form onSubmit={handleSubmit(onSubmit)} className="subscription-form">
						
						<div className="input-group">
							<input
								type="text"
								placeholder="Введите имя"
								{...register("name", {
									required: "Имя обязательно",
									minLength: {
										value: 2,
										message: "Минимум 2 символа"
									}
								})}
								className={`input-field ${errors.name ? 'input-error' : ''}`}
							/>
							{errors.name && <span className="error-message">{errors.name.message}</span>}
						</div>

						<div className="input-group">
							<input
								type="email"
								placeholder="Введите почту"
								{...register("email", {
									required: "Почта обязательна",
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
										message: "Неверный формат email"
									}
								})}
								className={`input-field ${errors.email ? 'input-error' : ''}`}
							/>
							{errors.email && <span className="error-message">{errors.email.message}</span>}
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							className={`subscribe-button`}
						>
							<div className="text-subtitle-s">
								Коничива
							</div>
						</button>
					</form>
				)}
			</div>
		</div>
	);
}