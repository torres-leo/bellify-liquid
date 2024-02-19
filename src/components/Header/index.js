'use client';
import { useState } from 'react';
import Image from 'next/image';

import BellilyLogo from '@/assets/images/bellily-logo.png';

import Dropdown from '@/components/Dropdown';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { iconCart, iconHeart } from '@/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
	const [_, setSelectedValue] = useState(null);
	const serviceLinks = [
		{ title: 'Item 1', path: '#' },
		{ title: 'Item 2', path: '#' },
	];

	const links = [
		{ title: 'Productos', path: '#' },
		{ title: 'Bodas', path: '#' },
		{ title: 'Estilos', path: '#' },
		{ title: 'Blog', path: '#' },
	];

	const handleSelect = (value) => {
		setSelectedValue(value);
	};

	const renderLinks = () => {
		return links.map((link) => (
			<li className='Header__menu--item' key={crypto.randomUUID()}>
				<Link className='Header__menu--link' href={link.path}>
					{link.title}
				</Link>
			</li>
		));
	};

	return (
		<header className='Header'>
			<Navbar />
			<div className='Header__container'>
				<div className='Header__wrapper'>
					<figure className='Header__logo'>
						<Image className='Header__logo--img' src={BellilyLogo} width={0} height={0} alt='Bellily Logo' />
					</figure>

					<div className='Header__menu--mob'>
						<label className='Header__hamburger me-2' htmlFor='menuCheck'>
							<FontAwesomeIcon icon={faBars} />
						</label>
						<input type='checkbox' name='menuCheck' id='menuCheck' className='Header__hamburger--check d-none' />
						<span className='Header__options--item me-3'>{iconHeart}</span>
						<p className='Header__options--item mb-0'>
							{iconCart}
							<span className='Header__options--carttext'>6</span>
						</p>
					</div>

					<ul className='Header__menu'>
						<Dropdown links={serviceLinks} text='Servicios' />
						{renderLinks()}
					</ul>

					<ul className='Header__options'>
						<li className='Header__options--item'>
							<Link className='Header__options--link' href='#'>
								Iniciar sesión
							</Link>
						</li>
						<li className='Header__options--item'>
							<Link className='Header__options--link' href='#'>
								Reserva
							</Link>
						</li>
						<li className='Header__options--item language'>
							<Dropdown options={['ES', 'EN', 'CAT']} onSelect={handleSelect} isToggle={true} />
						</li>
						<li className='Header__options--item me-5'>{iconHeart}</li>
						<li className='Header__options--item'>
							{iconCart}
							<span className='Header__options--carttext'>6</span>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
