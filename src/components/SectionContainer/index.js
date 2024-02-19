import Image from 'next/image';
import React from 'react';

function SectionContainer({ customClass = ' ', title = '', img = '', contentInfo = '', description = '', children }) {
	const renderImageSide = () => {
		if (!img) return;

		return (
			<figure className='Section__image'>
				<Image src={img} width={0} height={860} alt={`image ${title}`} />
			</figure>
		);
	};

	const renderContentHTML = () => {
		if (!contentInfo) return;

		return (
			<>
				<div className='Section__info--content' dangerouslySetInnerHTML={{ __html: contentInfo }} />
			</>
		);
	};

	return (
		<section className={`Section ${customClass}`}>
			<div className='Section__container'>
				<div className='Section__wrapper'>
					<div className='Section__row'>
						<div className='Section__info'>
							{title && <h3 className='Section__info--title'>{title}</h3>}

							{description && <p className='Section__info--description'>{description}</p>}

							{renderContentHTML()}
						</div>

						{renderImageSide()}
					</div>

					{children}
				</div>
			</div>
		</section>
	);
}

export default SectionContainer;
