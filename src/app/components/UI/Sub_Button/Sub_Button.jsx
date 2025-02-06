import './Sub_Button.css'

export default function SubscribeButton({ isSubscribed, onClick }) {
	return (
		<button
			className={`subscribe-button ${isSubscribed ? 'subscribed' : ''}`}
			onClick={onClick}
		>
			<div className='text-subtitle-s'>
				{isSubscribed ? 'Аригато!' : 'Коничива'}
			</div>
		</button>
	);
}