import React, { Component } from 'react';
import { Route } from 'react-router';
import firebase from 'firebase';
import { signIn } from './firebase';

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
		const result = signIn();
		console.log(result)
	}

	render() {
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

export default Routes;
