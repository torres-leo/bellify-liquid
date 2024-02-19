import Image from 'next/image';

function Hero({ imgDesk = '', imgMob = '', imgTablet = '', title = '', description = '' }) {
	return (
		<div className='Hero'>
			<div className='Hero__wrapper'>
				<Image className='Hero__image desk' src={imgDesk} width={0} height={500} alt='hero image' />

				<Image className='Hero__image tablet' src={imgTablet} width={0} height={630} alt='hero image' />
				<Image className='Hero__image mob' src={imgMob} width={0} height={550} alt='hero image' />

				<div className='Hero__backdrop'></div>

				<ul className='Hero__breadcrumb'>
					<li className='Hero__breadcrumb--item'>Home</li>
					<li className='Hero__breadcrumb--item'>Bodas</li>
				</ul>

				<div className='Hero__info'>
					<h3 className='Hero__info--title'>{title}</h3>
					<p className='Hero__info--description'>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
