import PropTypes from 'prop-types';
import FooterList from './components/FooterList';
import Image from 'next/image';
import { appsList, síguenosList } from '../../../constants/footerList';
import FooterForms from './components/FooterForms';
function Footer() {
	return (
		<footer className='Footer'>
			<section className='Footer-content '>
				<div className='Footer-main'>
					<h2 className='Footer-title'>Apps</h2>
					<div className='Footer-images'>
						<figure className='Footer-appImage'>
							<Image
								src={appsList[0].googleplayImg}
								width={appsList[0].width}
								height={appsList[0].height}
								alt={appsList[0].googleplayAlt}
							/>
						</figure>
						<figure>
							<Image
								className='Footer-appImage'
								src={appsList[0].appstoreImg}
								width={appsList[0].width}
								height={appsList[0].height}
								alt={appsList[0].appstoreAlt}
							/>
						</figure>
					</div>
				</div>
				<div>
					<FooterList />
				</div>
				<div className='FooterList-social'>
					<h2 className='FooterList-social-title'>Síguenos</h2>
					<div className='Footer-logos'>
						<figure>
							<Image
								className='FooterList-logo'
								src={síguenosList[0].twitterImg}
								width={25}
								height={20}
								alt={síguenosList[0].twitterAlt}
							/>
						</figure>
						<figure>
							<Image
								className='Footer-logos-spacing FooterList-logo'
								src={síguenosList[0].faceboockImg}
								width={12}
								height={26}
								alt={síguenosList[0].faceboockAlt}
							/>
						</figure>
						<figure>
							<Image
								className='FooterList-logo'
								src={síguenosList[0].instagramImg}
								width={27}
								height={27}
								alt={síguenosList[0].instagramrAlt}
							/>
						</figure>
					</div>
				</div>
				<hr className='FooterList-hr' />
			</section>
			<section className='FooterList-form'>
				<FooterForms title='Newsletter' />
			</section>
			<div className='Footer-policy'>
				<p className='Footer-policy-title'>© 2019. Bellify. All rights reserved.</p>
				<figure>
					<Image className='Footer-policy-image' src='/Grupo-footer.png' width={172} height={20} alt='policy-Img' />
				</figure>
			</div>
		</footer>
	);
}
Footer.propTypes = {};
export default Footer;
