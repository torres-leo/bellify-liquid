import Input from '@/components/Input';
import Image from 'next/image';
import { iconsList } from '../../../../../constants/footerList';
import { GoArrowRight } from 'react-icons/go';
const FooterForms = ({ title }) => {
	const submitButton = (
		<button className='Footer-button'>
			<GoArrowRight />
		</button>
	);
	return (
		<div className='Footer-form'>
			<div className='Footer-formImputs'>
				<h2 className='FooterForms-secondtitle'>{title}</h2>
				<Input placeholder='Nombre' type='text' id='firstId' inptClass='Input-firstInpt' />
				<Input
					placeholder='Correo electrónico'
					type='text'
					id='secondId'
					button={submitButton}
					inptClass='Input-secondInpt'
				/>
			</div>
			<div className='FooterForms-icons'>
				<figure className='FooterForms-icon'>
					<Image
						className='FooterForms-logo'
						src={iconsList[0].visaLogo}
						width={iconsList[0].width}
						height={iconsList[0].height}
						alt={iconsList[0].visaAlt}
					/>
				</figure>
				<figure className='FooterForms-icon'>
					<Image
						className='FooterForms-logo'
						src={iconsList[0].maestrocardLogo}
						width={iconsList[0].width}
						height={iconsList[0].height}
						alt={iconsList[0].visaAlt}
					/>
				</figure>
				<figure className='FooterForms-icon'>
					<Image
						className='FooterForms-logo'
						src={iconsList[0].maestroLogo}
						width={iconsList[0].width}
						height={iconsList[0].height}
						alt={iconsList[0].visaAlt}
					/>
				</figure>
				<figure>
					<Image
						className='FooterForms-icon'
						src={iconsList[0].americanexpressLogo}
						width={iconsList[0].width}
						height={iconsList[0].height}
						alt={iconsList[0].visaAlt}
					/>
				</figure>
			</div>
		</div>
	);
};
export default FooterForms;
