import { useState, useEffect } from 'react';
import RButton from './RButton';

const valueToIdMap = {
	'01/ история': '1',
	'02/ мифология': '2',
	'03/ искусство': '3',
	'04/ поп-культура': '4',
	'05/ язык и культура': '5',
};

const idToValueMap = {
	'1': '01/ история',
	'2': '02/ мифология',
	'3': '03/ искусство',
	'4': '04/ поп-культура',
	'5': '05/ язык и культура',
  };

export default function StackRButton({ onChange, selectedSection }) {
	const [selectedOption, setSelectedOption] = useState('01/ история');

	useEffect(() => {
		const value = idToValueMap[selectedSection.id];
		setSelectedOption(value);
	  }, [selectedSection]);

	const handleOptionChange = (event) => {
		const value = event.target.value;
		setSelectedOption(value);
		const id = valueToIdMap[value];
		onChange(id);
	};

	const options = [
		{ value: '01/ история', label: '01/ история' },
		{ value: '02/ мифология', label: '02/ мифология' },
		{ value: '03/ искусство', label: '03/ искусство' },
		{ value: '04/ поп-культура', label: '04/ поп-культура' },
		{ value: '05/ язык и культура', label: '05/ язык и культура' },
	];

	return (
		<div className='RButton-stack'>
			{options.map((option) => (
				<RButton
					key={option.value}
					label={option.label}
					value={option.value}
					checked={selectedOption === option.value}
					onChange={handleOptionChange}
				/>
			))}
		</div>
	);
}