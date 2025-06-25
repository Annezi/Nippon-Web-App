"use client"

import { useState, useEffect } from 'react';
import './SocialMadiaLinks.css'
import ScrollReveal from '../../Utils/ScrollReveal';

export default function SocialMadiaLinks() {
	const [showModal, setShowModal] = useState(false);
	const [currentUrl, setCurrentUrl] = useState('');
	const [isCopied, setIsCopied] = useState(false);

	const handleLinkClick = () => {
		const url = window.location.href;
		setCurrentUrl(url);
		setShowModal(true);
		setIsCopied(false);
	};

	const handleCopyClick = () => {
		navigator.clipboard.writeText(currentUrl).then(() => {
			setIsCopied(true);
		});
	};

	const handleVKClick = () => {
		const url = encodeURIComponent(window.location.href);
		const title = encodeURIComponent('Первое апреля в Японии');
		const vkShareUrl = `https://vk.com/share.php?url=${url}&title=${title}`;
		window.open(vkShareUrl, '_blank');
	};

	
    const handleTgClick = () => {
        window.open('https://t.me/nip_pon', '_blank');
    };
	
	useEffect(() => {
		if (showModal) {
		  document.body.classList.add('no-scroll');
		} else {
		  document.body.classList.remove('no-scroll');
		}
	  }, [showModal]);

	return (
		<ScrollReveal index={1}>
		<div className="share-buttons">
			<div className="share-button" onClick={handleLinkClick}>
				<img src="/Icons/Icon-link.svg" alt="Link" />
			</div>
			<div className="share-button" onClick={handleVKClick}>
				<img src="/Icons/Icon-vk.svg" alt="VK" />
			</div>
			<div className="share-button" onClick={handleTgClick}>
				<img src="/Icons/Icon-tg.svg" alt="Telegram" />
			</div>

			{showModal && (
				<div className="modal">
					<div className="modalLink-content">
						<div className="modalClose" onClick={() => setShowModal(false)}>
							<img src="/Icons/Cross.svg" alt="Close" />
						</div>
						<div className="modalLink-info">
							<div className="modalLink-text">
								<div className='modalLink-title text-title-m'>無知は至福ではない</div>
								<div className='modalLink-description text-subtitle-s'>Незнание - не блаженство, спасибо, что делитесь знаниями с другими!</div>
							</div>
							<div className='modalLink-input'>
								<input type="text" value={currentUrl} readOnly />
							</div>
							<div className='modalLink-button'>
								<button
									onClick={handleCopyClick}
									className={`${isCopied ? 'copied' : ''} text-subtitle-s`}
								>
									{isCopied ? 'Ссылка скопирована' : 'Скопировать ссылку'}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
		</ScrollReveal>
	);
}