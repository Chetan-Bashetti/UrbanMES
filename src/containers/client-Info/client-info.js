import React from 'react';
import './client-info.css';

const ClientInfo = () => {
	return (
		<div className='footer-wrapper'>
			<div className='footer'>
				Designed and developed by
				<a
					className='link'
					target='_blank'
					rel='noreferrer'
					href='https://tecnacy.netlify.app/'
					style={{
						marginLeft: '0.3em',
						color: 'white'
					}}
				>
					Tecnacy Solutions
				</a>
			</div>
			<div className='footer-logo'>
				<img
					src={require('../../assets/images/MES Logo.jpg')}
					alt='UrbanMES'
					style={{ height: 60, width: 150 }}
				/>
			</div>
		</div>
	);
};

export default ClientInfo;
