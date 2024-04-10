import React from 'react';
import HandymanIcon from '@mui/icons-material/Handyman';
import ImagesearchRollerIcon from '@mui/icons-material/ImagesearchRoller';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TvIcon from '@mui/icons-material/Tv';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import HighlightIcon from '@mui/icons-material/Highlight';

import { appliancesData } from '../../mock/appliances';

import './services.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import MuiModal from '../../components/Modal/MuiModal';

const Services = () => {
	const [open, setOpen] = React.useState(false);
	const [selectedKey, setSelectedKey] = React.useState('');

	const icons = {
		painting: <ImagesearchRollerIcon style={{ fontSize: '6em' }} />,
		appliances: <HandymanIcon style={{ fontSize: '6em' }} />,
		key_project: <ManageAccountsIcon style={{ fontSize: '6em' }} />,
		tv: <TvIcon style={{ fontSize: '6em' }} />,
		ac: <HeatPumpIcon style={{ fontSize: '6em' }} />,
		fridge: <KitchenIcon style={{ fontSize: '6em' }} />,
		microwave_oven: <MicrowaveIcon style={{ fontSize: '6em' }} />,
		washing_machine: <LocalLaundryServiceIcon style={{ fontSize: '6em' }} />,
		laptop: <LaptopMacIcon style={{ fontSize: '6em' }} />,
		wall_painting: <FormatPaintIcon style={{ fontSize: '6em' }} />,
		wood_painting: <HighlightIcon style={{ fontSize: '6em' }} />
	};

	const handleOpen = (key) => {
		setSelectedKey(key);
		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	return (
		<div className='services-wrapper' id='services'>
			<div className='services-title'>Services</div>
			<div className='services-content'>
				{appliancesData?.map((eachAppliance, id) => (
					<ServiceCard
						key={eachAppliance.key}
						title={eachAppliance.title}
						desc={eachAppliance.desc}
						icon={icons[eachAppliance.key]}
						onClick={
							eachAppliance.sub_services.length
								? () => handleOpen(id)
								: () => {}
						}
					/>
				))}
			</div>
			<MuiModal
				children={
					<div
						style={{
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						<div className='contact-us-title'>
							{appliancesData[selectedKey]?.title}
						</div>
						<div
							style={{
								display: 'flex',
								flexWrap: 'wrap',
								flexDirection: 'row',
								justifyContent: 'center'
							}}
						>
							{appliancesData[selectedKey]?.sub_services?.map(
								(eachAppliance) => (
									<ServiceCard
										key={eachAppliance.key}
										title={eachAppliance.title}
										desc={eachAppliance.desc}
										icon={icons[eachAppliance.key]}
									/>
								)
							)}
						</div>
					</div>
				}
				open={open}
				handleOpen={handleOpen}
				handleClose={handleClose}
			/>
		</div>
	);
};

export default Services;
