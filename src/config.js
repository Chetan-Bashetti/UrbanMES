import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyB8QP0qkQAB5Z5Kcbx5zukKyz82gJnRTAs',
	authDomain: 'authapp-9b5cb.firebaseapp.com',
	projectId: 'authapp-9b5cb',
	storageBucket: 'authapp-9b5cb.appspot.com',
	messagingSenderId: '121577890451',
	appId: '1:121577890451:web:6963d8a795cd760aa8a366',
	measurementId: 'G-5Z64DPGLNP'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
