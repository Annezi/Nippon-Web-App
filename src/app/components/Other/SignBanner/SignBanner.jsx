import Link from "next/link";
import Button from "../../UI/Button/Button";
import "./SignBanner.css";

export default function SighBanner({ button_text, description, cover, url }) {
	return (
		<div className="sign-banner-box">
			<div
				className="sign-banner-cover"
				style={{ backgroundImage: `url(${cover})` }}
			>
				<div className="text-subtitle-1">{description}</div>
			</div>

			<Button theme="white" text={button_text} link={url}/>
		</div>
	);
}