import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Testimonial = ({ text = '', author = '' }) => {
	return (
		<article className='Testimonial'>
			<div className='Testimonial__content'>
				<FontAwesomeIcon icon={faQuoteLeft} className='Testimonial__icon left' />
				<FontAwesomeIcon icon={faQuoteRight} className='Testimonial__icon right' />

				<p className='Testimonial__text'>{text}</p>
				<span className='Testimonial__author'>{author}</span>
			</div>
		</article>
	);
};

export default Testimonial;
