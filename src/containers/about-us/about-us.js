import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

import MuiButton from '../../components/Button/MuiButton';

import './about-us.css';
import MuiModal from '../../components/Modal/MuiModal';
import ContactUs from '../../components/ContactUs/ContactUs';
const AboutUs = () => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	return (
		<div className='about-us-wrapper' id='about_us'>
			<div className='about-us-title'>About us</div>
			<div className='about-us-content-map'>
				<div className='map'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8783630235766!2d77.5881115762125!3d12.97963088733652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae166dd8fee8b7%3A0xa3112775dc579453!2sVidhana%20Soudha%2C%20Ambedkar%20Veedhi%2C%20Sampangi%20Rama%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560001%2C%20India!5e0!3m2!1sen!2smy!4v1712745568271!5m2!1sen!2smy'
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
							Monday to Friday 10:00 am to 07:00 pm
						</div>
					</div>
					<div className='each-info'>
						<div className='about-us-content-title'>Get in touch</div>
						<div style={{ marginTop: '1em', display: 'flex' }}>
							<WhatsAppIcon
								style={{ fontSize: '3em', color: '#01e676' }}
								onClick={() => {
									window.open(
										`https://wa.me/+919060003573?text=Hi, I wanted to check if this UrbanMES?`,
										'_blank'
									);
								}}
							/>
							<div style={{ width: 40 }} />
							<a href='tel:+919060003573'>
								<CallIcon
									style={{
										fontSize: '3em',
										color: '#1469e7'
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
