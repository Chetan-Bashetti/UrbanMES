import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';

const NavBar = () => {
	const links = [
		{ title: 'home', id: '#home', icon: <HomeIcon /> },
		{ title: 'services', id: '#services', icon: <MiscellaneousServicesIcon /> },
		{ title: 'about us', id: '#about_us', icon: <SupervisorAccountIcon /> },
		{
			title: 'reviews',
			id: '#reviews',
			icon: <RateReviewOutlinedIcon />
		}
	];

	const [isMenuOpen, setMenuOpen] = React.useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<header>
			<div className='logo'>UrbanMES</div>

			<nav className={isMenuOpen ? 'open' : ''}>
				{isMenuOpen ? <div className='logo-sm'>UrbanMES</div> : ''}
				<ul>
					{links.map((eachLink, id) => (
						<li key={id} onClick={toggleMenu}>
							<a href={`${eachLink.id}`} className='links'>
								{isMenuOpen ? <div className='icons'>{eachLink.icon}</div> : ''}
								<div style={{ marginLeft: '4px', fontWeight: 600 }}>
									{eachLink.title}
								</div>
							</a>
						</li>
					))}
				</ul>
			</nav>

			{/* Mobile Menu Toggle Icon */}
			<div className='mobile-menu-icon' onClick={toggleMenu}>
				{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
			</div>
		</header>
	);
};

export default NavBar;
