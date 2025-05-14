import './StackTags.css';
import Tag from "../../UI/Tags/Tag/Tag"

export default function StackTags() {
	return(
		<div className="stackTags-container">
			<div className="text-title-1">и ещё...</div>
			<div className="stackTags-stack">
				<Tag text='свежая публикация' size='large' theme='red'/>
				<Tag text='микрорубрики' size='large' theme='red'/>
				<Tag text='слово дня' size='large' theme='red'/>
				<Tag text='мемы' size='large' theme='red'/>
				<Tag text='подборки' size='large' theme='red'/>
				<Tag text='история' size='large' theme='red'/>
				<Tag text='искусство' size='large' theme='red'/>
				<Tag text='рецепты' size='large' theme='red'/>
				<Tag text='музыка' size='large' theme='red'/>
			</div>
		</div>
	)
}