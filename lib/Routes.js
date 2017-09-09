import React, { Component } from 'react';
import { Route } from 'react-router';
import firebase from 'firebase';
import { signIn } from './firebase';
import FacebookContainer from './containers/FacebookContainer';
import MessageContainer from './containers/MessageContainer';

class Routes extends Component {
	constructor() {
		super();
		this.state = {
			user: null,
			email: '',
			password: '',
		};
	}

	login() {
		const provider = new firebase.auth.FacebookAuthProvider();
		provider.addScope('user_friends');
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(response => {
				console.log(response);
			});

		firebase.auth().onAuthStateChanged(user => {
			this.setState({
				user,
			});
		});
	}

	render() {
		return (
			<div>
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
				<FacebookContainer />
				<MessageContainer />
			</div>
		);
	}
}

export default Routes;
