import React, { useState } from 'react';
import './Category.css';
import Section from "../Mol_Section/Section";
import StackRButton from "../Mol_RButton/StackRButton";
import sectionData from '../../../database/sectionData.json';

export default function Category() {
	const [selectedSection, setSelectedSection] = useState(sectionData.data[0]);
	const [isAnimating, setIsAnimating] = useState(false);

	const handleSectionChange = (value) => {
		setIsAnimating(true);
		setTimeout(() => {
			const section = sectionData.data.find(item => item.id === value);
			setSelectedSection(section);
			setIsAnimating(false);
		}, 400);
	};

	const handleNextSection = () => {
		const currentIndex = sectionData.data.findIndex(item => item.id === selectedSection.id);
		const nextIndex = (currentIndex + 1) % sectionData.data.length;
		handleSectionChange(sectionData.data[nextIndex].id);
	};

	return (
		<div className="category-container">
			<div className="category-info">
				<div className="category-info-top text-title-m">
					Наши разделы интересов
				</div>
				<div className="category-info-bottom">
					<StackRButton 
						onChange={handleSectionChange} 
						selectedSection={selectedSection}
					/>
				</div>
			</div>
			<div className="category-card">
				<Section
					img={selectedSection.img}
					description={selectedSection.description}
					isAnimating={isAnimating}
					onNext={handleNextSection}
				/>
			</div>
		</div>
	);
}