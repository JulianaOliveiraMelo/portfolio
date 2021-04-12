import firebase from 'firebase';
// My Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: 'AIzaSyAVS-ByXJfuunvvqrW4yUQ0QvBmMNO6Us0',
	authDomain: 'portfoliojulianamelo.firebaseapp.com',
	databaseURL: 'https://portfoliojulianamelo-default-rtdb.firebaseio.com',
	projectId: 'portfoliojulianamelo',
	storageBucket: 'portfoliojulianamelo.appspot.com',
	messagingSenderId: '343326697270',
	appId: '1:343326697270:web:3ba0b977f3fb2500003597',
	measurementId: 'G-2KZZCRD3MW',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
