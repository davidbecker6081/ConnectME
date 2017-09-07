import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyDIWqOP5S7PwVPmOEIzCCeT0gVnaDhFAuE',
	authDomain: 'personal-project-turing-mod3.firebaseapp.com',
	databaseURL: 'https://personal-project-turing-mod3.firebaseio.com',
	projectId: 'personal-project-turing-mod3',
	storageBucket: 'personal-project-turing-mod3.appspot.com',
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const signIn = () => {
	auth.signInWithPopup(provider);
};
export const signOut = () => {
	auth.signOut();
};
export default firebase;
