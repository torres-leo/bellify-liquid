import Link from 'next/link';
import React from 'react';

function Form() {
	return (
		<div className='Form'>
			<div className='Form__container'>
				<div className='Form__wrapper'>
					<form className='Form__user'>
						<div className='Form__user--info'>
							<input className='Form__input' type='text' placeholder='Nombre *' />
							<input className='Form__input' type='text' placeholder='Correo electrónico *' />
							<input className='Form__input' type='text' placeholder='Teléfono' />
							<input className='Form__input' type='text' placeholder='Lorem ipsum*' />
						</div>

						<textarea className='Form__user--comment' name='comments' id='comment' placeholder='Comentarios'></textarea>
					</form>

					<div className='Form__footer'>
						<button className='Form__footer--btn'>Enviar</button>

						<form className='Form__footer--terms'>
							<label htmlFor='terms'>
								Confirmo que haber leído y estar conforme con los <a href='#'>términos y condiciones</a> generales y la
								política de privacidad de Bellify.
							</label>
							<input type='checkbox' id='terms' name='terms' />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Form;
