import Link from "next/link";
import "./WTDCard.css";
import Button from "../Button/Button";

export default function WTDCard({ id, cover, description, onButtonClick, buttonText }) {
	return (
		<div className="wtd-card">
			<img src={cover} alt={description} className="wtd-card-image" />
			<Button theme="white-outline" text={buttonText} onClick={onButtonClick}/>
		</div>
	);
}