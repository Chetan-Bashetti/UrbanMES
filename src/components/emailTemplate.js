import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
	const form = useRef();
	const [houseNumber, setHouseNumber] = React.useState('');
	const [street, setStreet] = React.useState('');
	const [area, setArea] = React.useState('');
	const [typeofService, setTypeofService] = React.useState('');
	const [location, setLocation] = React.useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		let message = document.getElementsByName('message');
		let name = document.getElementsByName('to_name');
		let contactNumber = document.getElementsByName('contact_number');

		message[0].value += `New Service request recieved, Details below <br/> <br/> 
    Name : <b>${name[0].value},</b> <br/> 
    Contact Number : <b><a href='+91'${contactNumber[0].value}'>${contactNumber[0].value}</a></b> <br/> 
    Address : <b>${houseNumber}, ${street}, ${area},</b> <br/>
    Service type requested : <b>${typeofService},</b> <br/>
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
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	const handleLocationPush = () => {
		let textArea = document.getElementsByName('message');
		console.log(textArea[0].value, 'TEXT AREA');
		textArea[0].value += 'hello';
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				alignItems: 'center',
				marginTop: '5em'
			}}
		>
			<form
				ref={form}
				onSubmit={sendEmail}
				style={{ display: 'flex', flexDirection: 'column' }}
			>
				<input
					type='text'
					name='to_name'
					placeholder='Name'
					style={{ margin: '1em', padding: '1em' }}
				/>
				<input
					type='email'
					name='from_name'
					placeholder='Email'
					style={{ margin: '1em', padding: '1em' }}
				/>
				<input
					type='phone'
					name='contact_number'
					placeholder='Phone number'
					style={{ margin: '1em', padding: '1em' }}
				/>
				<input
					type='text'
					placeholder='House number/ Flat number'
					style={{ margin: '1em', padding: '1em' }}
					onChange={(e) => {
						setHouseNumber(e.target.value);
					}}
				/>
				<input
					type='text'
					placeholder='Street/ Colony'
					style={{ margin: '1em', padding: '1em' }}
					onChange={(e) => {
						setStreet(e.target.value);
					}}
				/>
				<input
					type='phone'
					placeholder='Area/ locality'
					style={{ margin: '1em', padding: '1em' }}
					onChange={(e) => {
						setArea(e.target.value);
					}}
				/>
				<input
					placeholder='Location'
					style={{ margin: '1em', padding: '1em' }}
					onChange={(e) => {
						setLocation(e.target.value);
					}}
				/>
				<select
					name='cars'
					id='cars'
					onChange={(e) => setTypeofService(e.target.value)}
				>
					<option value='AC repair'>Ac repair</option>
					<option value='Washing Machine repair'>Washing Machine repair</option>
					<option value='TV repair'>TV repair</option>
					<option value='Microwave oven repair'>Microwave oven repair</option>
					<option value='Fridge repair'>Fridge repair</option>
					<option value='Painting'>Painting</option>
				</select>
				<textarea
					name='message'
					placeholder='Address'
					style={{ margin: '1em', padding: '1em', display: 'none' }}
				/>
				<input
					type='submit'
					value='Send'
					style={{ margin: '1em', padding: '1em' }}
				/>
			</form>
			<button
				onClick={() => handleLocationPush()}
				style={{ margin: '1em', padding: '1em' }}
			>
				Get location
			</button>
		</div>
	);
};
