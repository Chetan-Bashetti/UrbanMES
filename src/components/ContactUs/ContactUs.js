import React from 'react';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './ContactUs.css';
import { appliancesData } from '../../mock/appliances';

const ContactUs = ({ handleClose, setSnackBar }) => {
	const form = React.useRef();
	const [houseNumber, setHouseNumber] = React.useState('');
	const [street, setStreet] = React.useState('');
	const [area, setArea] = React.useState('');
	const [typeofService, setTypeofService] = React.useState('');
	const [location, setLocation] = React.useState('');
	const [selectedServicekey, setSelectedServiceKey] = React.useState('');
	const [subKey, setSubKey] = React.useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		let message = document.getElementsByName('message');
		let name = document.getElementsByName('to_name');
		let contactNumber = document.getElementsByName('contact_number');

		message[0].value += `New Service request recieved, Details below <br/> <br/> 
    Name : <b>${name[0].value},</b> <br/> 
    Contact Number : <b><a href='+91'${contactNumber[0].value}'>${contactNumber[0].value}</a></b> <br/> 
    Address : <b>${houseNumber}, ${street}, ${area},</b> <br/>
    Service category requested : <b>${typeofService},</b> <br/>
    Service type requested : <b>${selectedServicekey},</b> <br/>
    Location: <b><a href=${location}>${location}</a></b> <br/><br/>

    Kindly contact me on given number`;

		emailjs
			.sendForm('service_bfgin47', 'template_ji5tiff', form.current, {
				publicKey: '2O3qUf1f8rBxFG_6N'
			})
			.then(
				() => {
					setStreet('');
					setArea('');
					setHouseNumber('');
					setTypeofService('');
					e.target.reset();
					setSnackBar();
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<div className='contact-us-wrapper'>
			<div className='contact-us-title'>Book a visit</div>
			<div>
				<form
					ref={form}
					onSubmit={sendEmail}
					style={{ display: 'flex', flexDirection: 'column' }}
				>
					<div
						style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
					>
						<TextField
							id='outlined-basic'
							label='Name'
							variant='outlined'
							name='to_name'
							placeholder='Name'
							className='contact-input'
						/>
						<TextField
							id='outlined-basic'
							label='Email'
							variant='outlined'
							name='from_name'
							placeholder='Email'
							className='contact-input'
						/>
						<TextField
							id='outlined-basic'
							label='Phone number'
							variant='outlined'
							name='contact_number'
							placeholder='Phone number'
							className='contact-input'
						/>
						<TextField
							id='outlined-basic'
							label='House number/ Flat number'
							variant='outlined'
							placeholder='House number/ Flat number'
							onChange={(e) => {
								setHouseNumber(e.target.value);
							}}
							className='contact-input'
						/>
						<TextField
							id='outlined-basic'
							label='Street/ Colony'
							variant='outlined'
							placeholder='Street/ Colony'
							onChange={(e) => {
								setStreet(e.target.value);
							}}
							className='contact-input'
						/>
						<TextField
							id='outlined-basic'
							label='Area/ locality'
							variant='outlined'
							placeholder='Area/ locality'
							onChange={(e) => {
								setArea(e.target.value);
							}}
							className='contact-input'
						/>
						<TextField
							id='outlined-basic'
							label='Location'
							variant='outlined'
							placeholder='Location'
							onChange={(e) => {
								setLocation(e.target.value);
							}}
							className='contact-input'
						/>
						<FormControl className='contact-input'>
							<InputLabel id='demo-simple-select-label'>
								Type of service
							</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={typeofService}
								label='Service'
								onChange={(e) => {
									let index = appliancesData.findIndex(
										(eachAppliance) => eachAppliance.key === e.target.value
									);
									setSubKey(index + 1);
									setTypeofService(e.target.value);
								}}
							>
								{appliancesData?.map((eachAppliance) => (
									<MenuItem value={eachAppliance.key} key={eachAppliance.key}>
										{eachAppliance.title}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						{subKey && appliancesData[subKey - 1].sub_services?.length ? (
							<FormControl className='contact-input'>
								<InputLabel id='demo-simple-select-label'>
									Sub service
								</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={selectedServicekey}
									label='Service'
									onChange={(e) => setSelectedServiceKey(e.target.value)}
								>
									{appliancesData[subKey - 1].sub_services?.map(
										(eachAppliance) => (
											<MenuItem
												value={eachAppliance.title}
												key={eachAppliance.key}
											>
												{eachAppliance.title}
											</MenuItem>
										)
									)}
								</Select>
							</FormControl>
						) : (
							''
						)}
						<textarea
							name='message'
							placeholder='Address'
							style={{ margin: '1em', padding: '1em', display: 'none' }}
						/>
					</div>
					<div className='actions-wrapper'>
						<input
							value={'cancel'}
							className='actions'
							onClick={() => {
								handleClose();
							}}
						/>
						<input type='submit' value='Send' className='actions' />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
