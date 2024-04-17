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
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import PaletteIcon from '@mui/icons-material/Palette';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
import ChaletIcon from '@mui/icons-material/Chalet';
import LivingIcon from '@mui/icons-material/Living';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import FoundationIcon from '@mui/icons-material/Foundation';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';

import { appliancesData } from '../../mock/appliances';

import './services.css';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import MuiModal from '../../components/Modal/MuiModal';
import Pricing from '../../components/Pricing/Pricing';

const Services = () => {
	const [open, setOpen] = React.useState(false);
	const [selectedKey, setSelectedKey] = React.useState('');
	const [pricingModel, setPricingModel] = React.useState(false);
	const [selectedSubService, setSelectedSubService] = React.useState({});

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
		wood_painting: <HighlightIcon style={{ fontSize: '6em' }} />,
		cctv_services: <CameraOutdoorIcon style={{ fontSize: '6em' }} />,
		interear_designers: <AddHomeWorkIcon style={{ fontSize: '6em' }} />,
		full_home_painting: <FormatColorFillIcon style={{ fontSize: '6em' }} />,
		few_walls_painting: <PaletteIcon style={{ fontSize: '6em' }} />,
		water_proofing: <FormatColorResetIcon style={{ fontSize: '6em' }} />,
		interior_and_exterior: <ChaletIcon style={{ fontSize: '6em' }} />,
		interior_decorators: <LivingIcon style={{ fontSize: '6em' }} />,
		site_preparation_phase: (
			<LocalConvenienceStoreIcon style={{ fontSize: '6em' }} />
		),
		foundation_phase: <FoundationIcon style={{ fontSize: '6em' }} />,
		framing_phase: <AgricultureIcon style={{ fontSize: '6em' }} />,
		exterior_phase: <HouseSidingIcon style={{ fontSize: '6em' }} />,
		interior_phase: <MeetingRoomIcon style={{ fontSize: '6em' }} />
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
										onClick={(title, key) => {
											setPricingModel(true);
											setSelectedSubService(eachAppliance);
										}}
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
			<MuiModal
				children={
					<div
						style={{
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						<Pricing
							title={selectedSubService.title}
							appliaceData={selectedSubService}
						/>
					</div>
				}
				open={pricingModel}
				handleOpen={() => setPricingModel(true)}
				handleClose={() => setPricingModel(false)}
			/>
		</div>
	);
};

export default Services;
