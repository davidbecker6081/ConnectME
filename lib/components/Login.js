import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import firebase from 'firebase';
import { signIn } from '../firebase';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			user: null,
		};
	}

	login() {
		const provider = new firebase.auth.FacebookAuthProvider();
		const { storeLoggedInUserData } = this.props;

		provider.addScope('user_friends');
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(response => {
				console.log(response, storeLoggedInUserData);
				const userData = Object.assign(
					{},
					{ displayName: response.user.displayName },
					{ photo: response.user.photoURL },
					{ location: response.additionalUserInfo.profile.location.name }
				);
				storeLoggedInUserData(userData);
			});

		firebase.auth().onAuthStateChanged(user => {
			this.setState({
				user,
			});
		});
	}

	render() {
		if (this.state.user) {
			return <Redirect to="/" />;
		}

		return (
			<form
				onSubmit={e => {
					e.preventDefault();
					this.login();
				}}
			>
				<input
					type="text"
					placeholder="email"
					onChange={e => {
						this.setState({ email: e.target.value });
					}}
				/>
				<input
					type="text"
					placeholder="password"
					onChange={e => {
						this.setState({ password: e.target.value });
					}}
				/>
				<input type="submit" />
			</form>
		);
	}
}

export default Login;
