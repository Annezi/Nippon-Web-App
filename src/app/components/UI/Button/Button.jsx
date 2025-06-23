import Link from "next/link";
import './Button.css';

export default function Button({ text, theme = 'white', onClick, link }) {
	const buttonClass = `button button-${theme}`;

	if (link) {
        return (
            <Link href={link} className={buttonClass}>
				<span className="text-button">{text}</span>
			</Link>
        );
    }

	return (
		<button className={buttonClass} onClick={onClick}>
			<span className="text-button">{text}</span>
		</button>
	);
}