import './Breadcrumbs.css';

export default function Breadcrumbs({ items }) {
  return (
    <ul className="breadcrumbs">
      {items.map((item, index) => (
        <li key={index}>
          {index < items.length - 1 ? (
            <div className="text-breadcrumbs text-paragraph-m" href={item.url}>{item.label}</div>
          ) : (
            <div className="text-breadcrumbs text-paragraph-m">{item.label}</div>
          )}
        </li>
      ))}
    </ul>
  );
}