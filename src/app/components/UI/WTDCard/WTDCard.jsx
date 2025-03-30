import Link from "next/link";
import "./WTDCard.css";

export default function WTDCard({ id, cover, description, url }) {
	return (
		<Link href={url} className="wtd-card-link">
			<div className="wtd-card">
				<img src={cover} alt={description} className="wtd-card-image" />
				<p className="wtd-card-description">{description}</p>
			</div>
		</Link>
	);
}