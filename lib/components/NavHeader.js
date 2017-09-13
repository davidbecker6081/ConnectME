import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavHeader extends Component {
	render() {
		const profileSrc = this.props.loggedInUser.photo
			? this.props.loggedInUser.photo
			: 'assets/user-silhouette (2).png';
		const profileClass = this.props.loggedInUser.photo ? 'profile-photo' : '';
		const logoSrc = 'assets/Logo.png';
		const connectMe = 'assets/ConnectME.png';
		const friendSrc = 'assets/friend.png';
		const messageSrc = 'assets/chat.png';
		const loginLink = this.props.loggedInUser.userName ? 'Account' : 'Login';

		return (
			<header>
				<img className="nav-logo" src={logoSrc} alt="logo" />
				<h1>
					<img className="connect-me" src={connectMe} alt="connect me title" />
				</h1>
				<div className="navlink-container">
					<div className="link-container">
						<img
							className={`navlink-img ${profileClass}`}
							src={profileSrc}
							alt="Profile Photo"
						/>
						<Link className="Link login-link" to="/login">
							{loginLink}
						</Link>
					</div>
					<div className="link-container">
						<img className="navlink-img" src={friendSrc} alt="friend logo" />
						<Link className="Link friends-link" to="/friends">
							Friends
						</Link>
					</div>
					<div className="link-container">
						<img className="navlink-img" src={messageSrc} alt="message logo" />
						<Link className="Link message-link" to="/message">
							Message
						</Link>
					</div>
				</div>
			</header>
		);
	}
}

export default NavHeader;
