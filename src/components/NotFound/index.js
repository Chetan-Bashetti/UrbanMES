import React from 'react';
import { Link } from 'react-router-dom';
import MuiButton from '../Button/MuiButton';

const NotFound = () => {
	return (
		<div className='not-found-wrapper'>
			<div className='basic-header'>Sorry invalid search key !!</div>
			<Link to='/'>
				<MuiButton title='Book a visit' onClick={() => {}} />
			</Link>
		</div>
	);
};
export default NotFound;
