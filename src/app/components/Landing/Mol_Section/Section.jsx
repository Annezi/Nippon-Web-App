import './Section.css';

export default function Section({ img, description, isAnimating, onNext }) {
	return (
		<div className="section-container shadow">
			<div className={`section-img ${isAnimating ? 'animate' : ''}`}>
				<img src={img} alt="Section" />
			</div>
			<div className={`section-description ${isAnimating ? 'animate' : ''}`}>
				<div className="section-text text-paragraph-m">{description}</div>
				<div className="section-arrow" onClick={onNext}>
					<img src="./Landing/Section_arrow.svg" alt="arrow" />
				</div>
			</div>
		</div>
	);
}