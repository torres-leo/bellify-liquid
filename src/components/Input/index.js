const Input = ({ type, id, button, inptClass, placeholder }) => {
	return (
		<form className='Input'>
			<div className='Input-content'>
				<div className='Footer-form-content'>
					<input type={type} id={id} className={inptClass} placeholder={placeholder} />
					{button}
				</div>
			</div>
		</form>
	);
};
export default Input;
