import React from 'react';
import { Button } from '@mui/material';

const MuiButton = ({ title = '', onClick, type }) => {
	return (
		<Button
			variant='contained'
			style={{
				fontFamily: "'Montserrat', sans-serif",
				background: '#1469e7',
				letterSpacing: '1px',
				fontWeight: 600
			}}
			onClick={onClick}
			type={type}
		>
			{title}
		</Button>
	);
};

export default MuiButton;
