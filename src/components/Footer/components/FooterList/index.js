'use client';

import { list } from '../../../../../constants/footerList';
import Image from 'next/image';
import React, { useState } from 'react';

const FooterList = () => {
	const [showDropdown, setShowDropdown] = useState(false);

	const renderedListDropdown = () => {
		const toggleDropdown = () => {
			setShowDropdown(!showDropdown);
		};
		return list.map((section) => (
			<div className=' FooterList FooterList-mobile' key={crypto.randomUUID()}>
				<div className='FooterList-header' onClick={toggleDropdown}>
					<h2 className='FooterList-title'>{section.title}</h2>
					<figure className='FooterList-Polígono'>
						<Image alt='Polígono-paragraph' src='/Polígono.png' height={4} width={9} />
					</figure>
				</div>
				{showDropdown && (
					<div className='FooterList-texts '>
						{section.items.map((item) => (
							<p className='FooterList-paragraph' key={crypto.randomUUID()}>
								{item}
							</p>
						))}
					</div>
				)}
			</div>
		));
	};

	const renderList = () => {
		return list.map((section) => (
			<div className='FooterList  FooterList-desktop' key={crypto.randomUUID()}>
				<div className='FooterList-header'>
					<h2 className='FooterList-title '>{section.title}</h2>
					<figure className='FooterList-Polígono'>
						<Image alt='Polígono-paragraph' src='/Polígono.png' height={4} width={9} />
					</figure>
				</div>
				<div className='FooterList-texts '>
					{section.items.map((item) => (
						<p className='FooterList-paragraph' key={crypto.randomUUID()}>
							{item}
						</p>
					))}
				</div>
			</div>
		));
	};
	return (
		<div className='Footer-list'>
			{renderList()}
			{renderedListDropdown()}
		</div>
	);
};
export default FooterList;
