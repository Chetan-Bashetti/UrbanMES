import { ReactComponent as VisionIcon } from '../../assets/icons/vision.svg';
import { ReactComponent as MissionIcon } from '../../assets/icons/mission.svg';

import './Vision.css';

const Vision = () => {
	return (
		<div className='vision-wrapper'>
			<div className='services-title'>Vision & Mission</div>
			<div className='vision-container'>
				<div className='each-idea'>
					<div className='idea-icon'>
						<VisionIcon />
					</div>
					<div className='idea-title'>Vision</div>
					<div className='vision-content'>
						<ul>
							<li>Joining hands together to grow together forever & ever</li>
						</ul>
					</div>
				</div>
				<div className='vm-devider' />
				<div className='each-idea mission'>
					<div className='idea-icon'>
						<MissionIcon />
					</div>
					<div className='idea-title'>Mission</div>
					<div className='vision-content'>
						<ul>
							<li>
								To acquire the market by attractive and satisfied customers.
							</li>
							<li>To be the best competitor in the Market area. </li>
							<li>
								To be an active participant in providing services to customers
								in best Quality with the help of Expertised team.
							</li>
							<li>
								Optimum utilization of resources to cut throat competition in
								the economy.
							</li>
							<li>
								Supportive economic development of the Brand with whom we joined
								hands to continue their Business operations.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Vision;
