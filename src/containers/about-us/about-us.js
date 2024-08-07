import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

import MuiButton from '../../components/Button/MuiButton';

import './about-us.css';
import MuiModal from '../../components/Modal/MuiModal';
import ContactUs from '../../components/ContactUs/ContactUs';
import { PRIMARY_COLOR } from '../../mock/style';
const AboutUs = () => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	return (
		<div className='about-us-wrapper' id='contact_us'>
			<div className='about-us-title'>Contact us</div>
			<div className='about-us-content-map'>
				<div className='map'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.377989584736!2d77.6790041!3d13.0115845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110034629701%3A0xe694ad774e05f3a7!2sUrbanMES!5e0!3m2!1sen!2smy!4v1718812424836!5m2!1sen!2smy'
						width='100%'
						height='450'
						style={{ border: 0, outline: 'none' }}
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						title='Shop address'
					></iframe>
				</div>
				<div className='about-us-content'>
					<div className='each-info'>
						<div className='about-us-content-title'>Schedule a visit</div>
						<div className='about-us-content-desc'>
							Please fill the form to schedule the visit for services
						</div>
						<div style={{ marginTop: '1em' }}>
							<MuiButton title='Book a visit' onClick={handleOpen} />
						</div>
					</div>
					<div className='each-info'>
						<div className='about-us-content-title'>Timings</div>
						<div className='about-us-content-desc'>
							Monday to Saturday 09:30 am to 08:00 pm
						</div>
					</div>
					<div className='each-info'>
						<div className='about-us-content-title'>Get in touch</div>
						<div style={{ marginTop: '1em', display: 'flex' }}>
							<WhatsAppIcon
								style={{ fontSize: '3em', color: '#01e676', cursor: 'pointer' }}
								onClick={() => {
									window.open(
										`https://wa.me/+919019201221?text=Hi, I wanted to check if this UrbanMES?`,
										'_blank'
									);
								}}
							/>
							<div style={{ width: 20 }} />
							<a href='tel:+919019201221'>
								<CallIcon
									style={{
										fontSize: '3em',
										color: `${PRIMARY_COLOR}`
									}}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<MuiModal
				children={<ContactUs handleClose={handleClose} />}
				open={open}
				handleClose={handleClose}
			/>
		</div>
	);
};

export default AboutUs;
