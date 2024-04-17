import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ cardKey, title, desc, icon, onClick }) => {
	return (
		<div
			className='service-card'
			key={cardKey}
			onClick={() => onClick(title, cardKey)}
		>
			<div className='service-icon'>{icon}</div>
			<div className='service-card-text'>
				<div className='service-card-title'>{title}</div>
				<div className='service-card-desc'>{desc}</div>
			</div>
		</div>
	);
};

export default ServiceCard;
