import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import Testimonial from '@/components/Testimonial';

const Carousel = ({ cards, customClass = '' }) => {
	const renderCards = () => {
		return cards.map((card) => (
			<SwiperSlide key={crypto.randomUUID()}>
				<Testimonial author={card.author} text={card.text} />
			</SwiperSlide>
		));
	};

	const breakpointsTestimonials = {
		576: {
			slidesPerView: 1,
			spaceBetween: 40,
		},
		991: {
			slidesPerView: 2,
			spaceBetween: 80,
		},
		1200: {
			slidesPerView: 2.5,
			spaceBetween: 80,
		},
		1400: {
			slidesPerView: 3,
			spaceBetween: 114,
		},
	};

	return (
		<Swiper
			className={customClass}
			modules={[Pagination]}
			slidesPerView={1}
			loop={true}
			centeredSlides={true}
			pagination={{
				clickable: true,
			}}
			breakpoints={breakpointsTestimonials}>
			{renderCards()}
		</Swiper>
	);
};

export default Carousel;
