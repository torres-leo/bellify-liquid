import Image from 'next/image';
import React from 'react';

function SectionContainer({ customClass = ' ', title = '', img = '', contentInfo = '' }) {
	const renderTitle = () => {
		if (!title) return;

		return <h3 className='Section__info--title'>{title}</h3>;
	};

	return (
		<section className={`Section ${customClass}`}>
			<div className='Section__wrapper'>
				<div className='Section__info'>
					{renderTitle()}

					<>
						<div className='Section__info--content' dangerouslySetInnerHTML={{ __html: contentInfo }} />
					</>
				</div>
				<figure className='Section__image'>
					<Image src={img} width={0} height={0} alt={`image ${title}`} />
				</figure>
			</div>
		</section>
	);
}

export default SectionContainer;
