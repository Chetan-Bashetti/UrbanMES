import React from 'react';
import './index.css';

// Components
import Banner from './banner/banner';
import Services from './services/services';
import Reviews from './reviews/reviews';
import AboutUs from './about-us/about-us';
import ClientInfo from './client-Info/client-info';
import FabIcon from './fab/fab';

const Wrapper = () => {
	return (
		<div className='main-wrapper'>
			<Banner />
			<Services />
			<Reviews />
			<AboutUs />
			<ClientInfo />
			<FabIcon />
		</div>
	);
};

export default Wrapper;
