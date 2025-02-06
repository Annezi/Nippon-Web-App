import './Marquee.css';

export default function Marquee({ text, className = '' }) {
	const repeatedText = text.repeat(10);
  
	return (
		<div className={`marquee-container ${className}`}>
		  <div className="marquee-content text-title-1">{repeatedText}</div>
		</div>
	);
  }