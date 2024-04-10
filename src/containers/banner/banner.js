import React from 'react';
import './banner.css';
import NavBar from '../../components/Navbar/NavBar';
import MuiButton from '../../components/Button/MuiButton';
import MuiModal from '../../components/Modal/MuiModal';
import ContactUs from '../../components/ContactUs/ContactUs';

const BannerDescription = ({ name = '', handleOpen }) => {
	return (
		<>
			<div className={name}>
				<div className='product-name'>UrbanMES</div>
				<div className='product-desc'>Get quality services on demand</div>
				<div className='product-desc-2'>
					Experienced, hand-picked Professionals to serve you at your doorstep
				</div>
				<div style={{ marginTop: '3em' }}>
					<MuiButton title='Book a visit' onClick={handleOpen} />
				</div>
			</div>
		</>
	);
};

const Banner = () => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = (key) => setOpen(true);

	const handleClose = () => setOpen(false);

	return (
		<div className='banner-wrapper' id='home'>
			<NavBar />
			<div className='banner-content'>
				<div className='banner-image'>
					<BannerDescription
						name={'banner-product-description-mobile'}
						handleOpen={handleOpen}
					/>
				</div>
				<BannerDescription
					name={'banner-product-description'}
					handleOpen={handleOpen}
				/>
			</div>

			<MuiModal
				children={<ContactUs handleClose={handleClose} />}
				open={open}
				handleClose={handleClose}
			/>
		</div>
	);
};

export default Banner;
