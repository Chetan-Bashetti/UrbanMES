import React from 'react';
import './index.css';

// Components
import Banner from './banner/banner';
import Services from './services/services';
import Reviews from './reviews/reviews';
import AboutUs from './about-us/about-us';
import ClientInfo from './client-Info/client-info';
import FabIcon from './fab/fab';
import { Snackbar } from '@mui/material';

const Wrapper = () => {
	const [snackBar, setSnackBar] = React.useState(false);

	const handleCloseSnack = () => setSnackBar(false);

	return (
		<div className='main-wrapper'>
			<Banner setSnackBar={() => setSnackBar(true)} />
			<Services />
			<Reviews />
			<AboutUs />
			<ClientInfo />
			<FabIcon />
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={snackBar}
				onClose={handleCloseSnack}
				autoHideDuration={5000}
				message='Message sent, Thank you, we will contact you shortly'
			/>
		</div>
	);
};

export default Wrapper;
