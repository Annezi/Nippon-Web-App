import './RButton.css';

export default function RButton({ label, value, checked, onChange }) {
	return (
		<label className={`custom-radio ${checked ? 'active' : ''}`}>
			<input
				type="radio"
				value={value}
				checked={checked}
				onChange={onChange}
			/>
			<span className="custom-radio-label text-subtitle-s">{label}</span>
		</label>
	);
}