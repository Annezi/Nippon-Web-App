import "./Sub_Form.css";

export default function SubForm({ name, email, setName, setEmail }) {
	return (
		<div className="input-container">
			<input
				type="text"
				className="input-field"
				placeholder="Введите имя"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<input
				type="email"
				className="input-field"
				placeholder="Введите почту"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
		</div>
	);
}