import SighBanner from "../../Other/SignBanner/SignBanner"
import TitlePlaceholder from "../../UI/TitlePlaceholder/TitlePlaceholder"
import "./ToDo.css"

export default function ToDo() {
	return (
		<div className="todo-box">
			<TitlePlaceholder className="title-placeholder" text="что делать?" />
			<div className="todo-banners-wrapper">
				<SighBanner
					cover="./OtherImg/cover-section-5.jpg"
					description="популярные японские места в россии"
					button_text="Решить куда пойти" />
				<SighBanner
					cover="./OtherImg/cover-section-6.jpg"
					description="зимний сезон аниме"
					button_text="Посмотреть новинки" />
			</div>
		</div>
	)
}