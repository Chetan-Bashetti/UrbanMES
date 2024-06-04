import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './fab.css';
import { Fab } from '@mui/material';

const FabIcon = () => {
	return (
		<div className='fab-wrapper'>
			<Fab
				style={{ background: '#01e676' }}
				children={
					<WhatsAppIcon
						style={{ fontSize: '3em', color: 'white' }}
						onClick={() => {
							window.open(
								`https://wa.me/+919019201221?text=Hi, I wanted to check if this UrbanMES?`,
								'_blank'
							);
						}}
					/>
				}
			/>
		</div>
	);
};

export default FabIcon;
