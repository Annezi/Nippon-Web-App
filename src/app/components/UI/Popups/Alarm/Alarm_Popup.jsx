export default function Popup({ onClose }) {
	return (
		<div className="modal">
			<div className="modalLink-content">
				<div className="modalClose" onClick={onClose}>
					<img src="./Icons/Cross.svg" alt="Close" />
				</div>
				<div className="modalLink-info">
					<div className="modalLink-text">
						<div className="modalLink-title text-title-m">注意</div>
						<div className="modalLink-description text-subtitle-s">
							Страница, на которую вы перешли, находится в разработке
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}