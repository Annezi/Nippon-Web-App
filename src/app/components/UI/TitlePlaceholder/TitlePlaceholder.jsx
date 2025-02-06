import "./TitlePlaceholder.css"

export default function TitlePlaceholder({ text }){
	return (
		<div className="title-placeholder-box">
			<div className="text-title-1">{text}</div>
		</div>
	)
}