import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyDIWqOP5S7PwVPmOEIzCCeT0gVnaDhFAuE',
	authDomain: 'personal-project-turing-mod3.firebaseapp.com',
	databaseURL: 'https://personal-project-turing-mod3.firebaseio.com',
	projectId: 'personal-project-turing-mod3',
	storageBucket: 'personal-project-turing-mod3.appspot.com',
	messagingSenderId: '463229140891',
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
// export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const signIn = () => {
	firebase.auth()
		.signInWithPopup(provider)
		.then(response => {
			return response;
		});
};
export const signOut = () => {
	firebase.auth().signOut();
};
export const referenceMessages = firebase.database().ref('messages');
export const database = firebase.database();

export default firebase;
