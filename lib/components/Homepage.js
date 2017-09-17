import React, { Component } from 'react';
import FacebookContainer from '../containers/FacebookContainer';
import MessageContainer from '../containers/MessageContainer';
import { Link } from 'react-router-dom';

class Homepage extends Component {
	render() {
		const { displayName } = this.props.loggedInUser;
		const logoSrc = 'assets/Logo.png';
		const friendSrc = 'assets/friend.png';
		const messageSrc = 'assets/chat.png';

		if (displayName) {
			return <FacebookContainer />;
		}

		return (
			<div className="homepage-container">
				<div className="friends-teaser">
					Search Friends In Your Location Here
					<div className="teaser"><img src={friendSrc}/></div>
				</div>
				<div className="homepage">
					<Link className="homepage-link-login" to="/login">
						Click Here to Login With Facebook
					</Link>
					<img className="homepage-logo" src={logoSrc} alt="logo" />
					<p className="homepage-text">You Must Be Logged In To Send Messages to Friends</p>
				</div>
				<div className="messages-teaser">
					Send Messages Here
					<div className="teaser"><img src={messageSrc}/></div>
				</div>
			</div>
		);
	}
}

export default Homepage;
