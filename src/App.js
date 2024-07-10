import './App.css';
import { Routes, Route } from 'react-router-dom';

import Wrapper from './containers';
import NotFound from './components/NotFound';
import Payment from './containers/payment/payment';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Wrapper />} />
				<Route path='*' element={<NotFound />} />
				<Route path='/payment' element={<Payment />} />
			</Routes>
		</div>
	);
}

export default App;
