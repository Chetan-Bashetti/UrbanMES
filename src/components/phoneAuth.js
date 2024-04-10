import React from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../config';

import { ContactUs } from './emailTemplate';

const PhoneAuth = () => {
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [user, setUser] = React.useState('');
	const [otp, setOtp] = React.useState('');

	const handlePhoneChange = (e) => {
		const { value } = e.target;
		setPhoneNumber(value);
	};

	const handleOtpChange = (e) => {
		const { value } = e.target;
		setOtp(value);
	};

	const handleSendOtp = async () => {
		try {
			const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
			const confirmation = await signInWithPhoneNumber(
				auth,
				phoneNumber,
				recaptcha
			);
			console.log(confirmation);
			setUser(confirmation);
		} catch (e) {
			console.log(e);
		}
	};

	const verifyOtp = async () => {
		try {
			const verification = await user.confirm(otp);
			console.log(verification, 'verification');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div>
			<div>
				<input
					type='phone'
					placeholder='Enter valid phone num'
					value={phoneNumber}
					onChange={(e) => {
						handlePhoneChange(e);
					}}
				/>
				<div id='recaptcha'></div>
				<button onClick={() => handleSendOtp()}>Send Otp</button>
			</div>
			<div>
				<input
					type='otp'
					placeholder='Enter otp'
					value={otp}
					onChange={(e) => {
						handleOtpChange(e);
					}}
				/>
				<button onClick={() => verifyOtp()}>Confirm</button>
			</div>
			<ContactUs />
		</div>
	);
};

export default PhoneAuth;
