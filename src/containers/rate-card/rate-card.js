import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './rate-card.css';
import RateTable from '../../components/RateTable/RateTable';
import { rateCard } from '../../mock/ratecard';

const RateCard = () => {
	return (
		<div id='rate-card' className='rate-wrapper'>
			<div className='rate-title'>Rate card</div>
			<div className='rate-content'>
				<Accordion defaultExpanded>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
						aria-controls='panel1-content'
						id='panel1-header'
						style={{ background: '#312f5e', color: 'white', fontWeight: 600 }}
					>
						Service rate card
					</AccordionSummary>
					<AccordionDetails style={{ padding: 0 }}>
						<RateTable data={rateCard} />
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	);
};

export default RateCard;
