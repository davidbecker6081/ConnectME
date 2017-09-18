import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import firebase from 'firebase';
import { signIn, signOut } from '../firebase';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
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
				const userData = Object.assign(
					{},
					{ displayName: response.user.displayName },
					{ userName: this.state.username },
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
		const logoSrc = 'assets/Logo.png';
		const connectMe = 'assets/ConnectME.png';
		const loginLogout = this.props.loginUserExists
			? () => {
				signOut();
			}
			: () => {
				this.login();
			};
		const loginLogoutText = this.props.loginUserExists ? 'Logout' : 'Login';
		const isDisabled = !this.state.username;

		if (this.state.user) {
			return <Redirect to="/" />;
		}

		return (
			<form
				onSubmit={e => {
					e.preventDefault();
					loginLogout();
				}}
			>
				<img className="login-logo" src={logoSrc} alt="logo" />
				<img className="login-title" src={connectMe} alt="connect me" />
				<div className="username-container">
					<h4>Username: </h4>
					<input
						className="username-input"
						type="text"
						placeholder="Select A Username"
						onChange={e => {
							this.setState({ username: e.target.value });
						}}
					/>
				</div>
				<input className="login-btn" type="submit" value={loginLogoutText} disabled={isDisabled} />
			</form>
		);
	}
}

export default Login;
