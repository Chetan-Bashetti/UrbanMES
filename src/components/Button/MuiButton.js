import React from 'react';
import { Button } from '@mui/material';
import { PRIMARY_COLOR } from '../../mock/style';

const MuiButton = ({ title = '', onClick, type, disabled }) => {
	return (
		<Button
			variant='contained'
			style={{
				fontFamily: "'Montserrat', sans-serif",
				background: `${PRIMARY_COLOR}`,
				letterSpacing: '1px',
				fontWeight: 600
			}}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{title}
		</Button>
	);
};

export default MuiButton;
