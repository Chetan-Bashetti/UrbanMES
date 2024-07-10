import React from 'react';
import './payment.css';

const Payment = () => {
	React.useEffect(() => {
		const Script = document.createElement('script');
		const Form = document.getElementById('donateForm');
		Script.setAttribute(
			'src',
			'https://checkout.razorpay.com/v1/payment-button.js'
		);
		Script.setAttribute('data-payment_button_id', 'pl_O2oF3wJhTrlp8F');
		if (Form && !Form.hasChildNodes()) {
			Form.appendChild(Script);
		}
	}, []);

	return (
		<div className='payment-wrapper'>
			Payment
			<div>
				<form id='donateForm'></form>
			</div>
		</div>
	);
};

export default Payment;
