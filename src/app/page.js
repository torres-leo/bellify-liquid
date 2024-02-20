import heroImgDesk from '@/assets/images/hero-img-desk.png';
import heroImgMob from '@/assets/images/hero-img-mob.png';
import heroImgTablet from '@/assets/images/hero-img-tablet.png';
import paletImg from '@/assets/images/palet-img.png';

import Form from '@/components/Form';
import Hero from '@/components/Hero';
import SectionContainer from '@/components/SectionContainer';

function HomePage() {
	const heroDescription =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium aliquet orci, vitae imperdiet ante dignissim id. Vestibulum convallis sem mauris, eu vestibulum felis dignissim sit amet. Sed ligula arcu, vulputate eu ullamcorpella';

	const paletInfo = `
		<h3>Lorem ipsum</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium aliquet orci, vitae imperdiet ante dignissim id. Vestibulum convallis sem mauris, eu vestibulum felis dignissim sit amet. Sed ligula arcu, vulputate eu ullamcorpella diam leo, luctus et nibh vel, dictum pulvinar nisl. Nunc ut est aliquam, finibus mi vulputate, tincidunt nulla. Sed nisl metus, pulvinar vel scelerisque in, malesuada a ex.</p>
		
		<h3>Lorem ipsum</h3>
		<p>Donec et erat quis lectus pharetra ultricies at sed nisi. Aliquam non mollis magna. Sed rutrum eu tortor quis gravida. Sed eget conean elit augue, euismod vitae leo eget, egestas bibendum nibh. Praesent lacinia luctus eros sit amet feugiat. Etiam ut orci ornare, porta justo vel, molestie ex. Sed eget quam ut ipsum lacinia rhoncus vitae et urna.</p>

		<h3>Lorem ipsum</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium aliquet orci, vitae imperdiet ante dignissim id. Vestibs et nibh vel, dictum pulvinar nisl. Nunc ut est aliquam, finibus mi vulputate, tincidunt nulla. Sed nisl metus, pulvinar vel scelerisque in, malesuada a ex.</p>
		`;

	const formDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend orci vitae nisl tristique, eget vehicula lacus iaculis. Vivamus consequat et ligula ut luctus. Pellentesque maximus varius mi id accumsan`;

	return (
		<main>
			<Hero
				imgDesk={heroImgDesk}
				imgTablet={heroImgTablet}
				imgMob={heroImgMob}
				title='Servicio personalizado'
				description={heroDescription}
			/>

			<SectionContainer title='LOREM IPSUM DOLOR SIT AMET' contentInfo={paletInfo} img={paletImg} customClass='palet' />
			<SectionContainer title='¿TE INTERESA? CONTACTA CON NOSOTROS' description={formDescription} customClass='form'>
				<Form />
			</SectionContainer>
		</main>
	);
}

export default HomePage;
