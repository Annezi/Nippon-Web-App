import './Breadcrumbs.css';
import Link from 'next/link';

export default function Breadcrumbs({ items }) {
	// Убираем последний элемент из отображения
	const visibleItems = items.slice(0, -1);

	return (
		<nav aria-label="Навигационная цепочка">
			<ul className="breadcrumbs">
				{visibleItems.map((item, index) => (
					<li key={index} className="text-breadcrumbs ">
						<Link href={item.url} className="breadcrumb-link">
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}