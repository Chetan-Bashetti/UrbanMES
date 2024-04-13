import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import MuiButton from '../Button/MuiButton';
import './Pricing.css';
import { PRIMARY_COLOR } from '../../mock/style';

const Pricing = ({ title = 'AC' }) => {
	const [visitingChanrges, setVisitingCharges] = React.useState({
		charges: 100,
		isSelected: false
	});
	const [installationCharges, setInstallationCharges] = React.useState({
		charges: 350,
		isSelected: false
	});
	const [serviceCharges, setServiceCharges] = React.useState({
		charges: 200,
		isSelected: false
	});
	const [totalCharges, setTotalCharges] = React.useState(0);

	const selectVisitingCharges = () => {
		setVisitingCharges({
			...visitingChanrges,
			isSelected: !visitingChanrges.isSelected
		});
	};

	const selectInstallationCharges = () => {
		setInstallationCharges({
			...installationCharges,
			isSelected: !installationCharges.isSelected
		});
	};

	const selectServiceCharges = () => {
		setServiceCharges({
			...serviceCharges,
			isSelected: !serviceCharges.isSelected
		});
	};

	React.useEffect(() => {
		let totalAmount = 0;
		if (visitingChanrges.isSelected)
			totalAmount = totalAmount + visitingChanrges.charges;
		if (installationCharges.isSelected)
			totalAmount = totalAmount + installationCharges.charges;
		if (serviceCharges.isSelected)
			totalAmount = totalAmount + serviceCharges.charges;
		setTotalCharges(totalAmount);
	}, [visitingChanrges, installationCharges, serviceCharges]);

	return (
		<div className='pricing-wrapper'>
			<div className='contact-us-title' style={{ margin: 0 }}>
				{title}
			</div>
			<div className='pricing-container'>
				<div
					className='each-service-price'
					style={{
						border: visitingChanrges.isSelected
							? `1px solid ${PRIMARY_COLOR}`
							: '1px solid transparent'
					}}
					onClick={() => selectVisitingCharges()}
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
						border: installationCharges.isSelected
							? `1px solid ${PRIMARY_COLOR}`
							: '1px solid transparent'
					}}
					onClick={() => selectInstallationCharges()}
				>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<CheckCircleIcon
							style={{
								color: installationCharges.isSelected
									? `${PRIMARY_COLOR}`
									: 'rgb(209 209 209)'
							}}
						/>
						<div style={{ marginLeft: '0.3em' }}>Installation charges</div>
					</div>
					<div className='service-price'>
						Rs {installationCharges.charges}/-
					</div>
				</div>
				<div
					className='each-service-price'
					style={{
						border: serviceCharges.isSelected
							? `1px solid ${PRIMARY_COLOR}`
							: '1px solid transparent'
					}}
					onClick={() => selectServiceCharges()}
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
				<div className='note'>
					Note: Please select the required service by clicking
				</div>
				<div className='total-service-price'>
					<div className='grand-total'>Total</div>
					<div className='grand-total-price'>
						<div className='grand-total'>Rs</div>
						<div className='total-amount'>{totalCharges}</div>
						<div className='grand-total'>only</div>
					</div>
				</div>
				<div>
					<MuiButton title='Pay now' disabled={totalCharges <= 0} />
				</div>
			</div>
		</div>
	);
};

export default Pricing;
