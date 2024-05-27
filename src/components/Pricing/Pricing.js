import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

import './Pricing.css';
import { PRIMARY_COLOR } from '../../mock/style';
import MuiButton from '../Button/MuiButton';

const Pricing = ({ title = 'AC', appliaceData, handleBookingDialogBox }) => {
	const [visitingChanrges] = React.useState({
		charges: 250,
		isSelected: false
	});

	const [serviceCharges] = React.useState({
		charges: 200,
		isSelected: false
	});
	const [cleaningCharges, setCleaningCharges] = React.useState([]);

	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => setMounted(true), []);

	React.useEffect(() => {
		const Script = document.createElement('script');
		//id should be same as given to form element
		const Form = document.getElementById('donateForm');
		Script.setAttribute(
			'src',
			'https://checkout.razorpay.com/v1/payment-button.js'
		);
		Script.setAttribute('data-payment_button_id', 'pl_O2oF3wJhTrlp8F');
		if (Form && !Form.hasChildNodes()) {
			Form.appendChild(Script);
		}
	}, [mounted]);

	React.useEffect(() => {
		if (appliaceData?.charges?.length) setCleaningCharges(appliaceData.charges);
	}, [appliaceData]);

	// const selectVisitingCharges = () => {
	// 	setVisitingCharges({
	// 		...visitingChanrges,
	// 		isSelected: !visitingChanrges.isSelected
	// 	});
	// };

	// const selectServiceCharges = () => {
	// 	setServiceCharges({
	// 		...serviceCharges,
	// 		isSelected: !serviceCharges.isSelected
	// 	});
	// };

	React.useEffect(() => {
		let totalAmount = 0;
		if (visitingChanrges.isSelected)
			totalAmount = totalAmount + visitingChanrges.charges;
		if (serviceCharges.isSelected)
			totalAmount = totalAmount + serviceCharges.charges;
		cleaningCharges?.map((eachCharge) =>
			eachCharge.isSelected ? (totalAmount += eachCharge.charge) : 0
		);
	}, [visitingChanrges, serviceCharges, cleaningCharges]);

	// const handleCleaningCharges = (id) => {
	// 	let localCharges = [...cleaningCharges];
	// 	localCharges[id].isSelected = !localCharges[id].isSelected;
	// 	console.log(localCharges);
	// 	setCleaningCharges(localCharges);
	// };

	return (
		<div className='pricing-wrapper'>
			<div className='contact-us-title' style={{ margin: 0 }}>
				{title}
			</div>
			<div className='note-wrapper'>
				<div className='note'>
					<ErrorIcon style={{ marginRight: '0.2em' }} />
					Note: Confirm the site visit by paying ₹250. On successful payment our
					representative will call you.
				</div>
			</div>
			<div className='pricing-container'>
				<div
					className='each-service-price'
					style={{
						border: visitingChanrges.isSelected
							? `1px solid ${PRIMARY_COLOR}`
							: '1px solid transparent'
					}}
					// onClick={() => selectVisitingCharges()}
				>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<CheckCircleIcon
							style={{
								color: visitingChanrges.isSelected
									? `${PRIMARY_COLOR}`
									: 'rgb(209 209 209)'
							}}
						/>
						<div style={{ marginLeft: '0.3em' }}>Visiting charges</div>
					</div>
					<div className='service-price'>Rs {visitingChanrges.charges}/-</div>
				</div>
				<div
					className='each-service-price'
					style={{
						border: serviceCharges.isSelected
							? `1px solid ${PRIMARY_COLOR}`
							: '1px solid transparent'
					}}
					// onClick={() => selectServiceCharges()}
				>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<CheckCircleIcon
							style={{
								color: serviceCharges.isSelected
									? `${PRIMARY_COLOR}`
									: 'rgb(209 209 209)'
							}}
						/>
						<div style={{ marginLeft: '0.3em' }}>Service charges</div>
					</div>
					<div className='service-price'>Rs {serviceCharges.charges}/-</div>
				</div>

				{cleaningCharges?.length ? (
					<div className='each-service-price cleaning-chages-header'>
						Cleaning services & charges
					</div>
				) : (
					''
				)}

				{cleaningCharges?.length ? (
					<>
						{cleaningCharges.map((eachCharge, id) => (
							<div
								key={id}
								className='each-service-price'
								style={{
									border: eachCharge.isSelected
										? `1px solid ${PRIMARY_COLOR}`
										: '1px solid transparent'
								}}
								// onClick={() => handleCleaningCharges(id)}
							>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									<CheckCircleIcon
										style={{
											color: eachCharge.isSelected
												? `${PRIMARY_COLOR}`
												: 'rgb(209 209 209)'
										}}
									/>
									<div style={{ marginLeft: '0.3em' }}>{eachCharge.title}</div>
								</div>
								<div className='service-price'>Rs {eachCharge.charge}/-</div>
							</div>
						))}
					</>
				) : (
					''
				)}
				<div className='footer-actions'>
					<MuiButton
						title='Continue without payment'
						onClick={handleBookingDialogBox}
					/>
					<div className='action-devider'></div>
					{mounted ? <form id='donateForm'></form> : null}
				</div>
			</div>
		</div>
	);
};

export default Pricing;
