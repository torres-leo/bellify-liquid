import { useState } from 'react';
import Link from 'next/link';
import { iconCaretDown } from '@/icons/caret';

const Dropdown = ({ options = [], text = '', links, onSelect, isToggle = false }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(options[0]);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleSelect = (option) => {
		setSelectedOption(option);
		onSelect(option);
		setIsOpen(false);
	};

	const renderButtonList = () => {
		if (!isOpen) return null;

		return (
			<div className='dropdown-menu'>
				{options.map((option, index) => (
					<button key={index} onClick={() => handleSelect(option)}>
						{option}
					</button>
				))}
			</div>
		);
	};

	const renderSublist = () => {
		return links.map((link) => (
			<Link key={crypto.randomUUID()} href={link.path}>
				{link.title}
			</Link>
		));
	};

	const renderDropdown = () => {
		if (isToggle) {
			return (
				<div className='Dropdown'>
					<button className='Dropdown__toggle' onClick={toggleDropdown}>
						{selectedOption} {iconCaretDown}
					</button>

					{renderButtonList()}
				</div>
			);
		}

		return (
			<div className='Dropdown'>
				<div className='Dropdown__hover'>
					{text} {iconCaretDown}
				</div>
				<div className='Dropdown__links'>{renderSublist()}</div>
			</div>
		);
	};

	return <>{renderDropdown()}</>;
};

export default Dropdown;
