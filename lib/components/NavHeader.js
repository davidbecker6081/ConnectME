import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavHeader extends Component {
	render() {
		const profileSrc = this.props.loggedInUser.photo
			? this.props.loggedInUser.photo
			: 'assets/user-silhouette (2).png';
		const logoSrc = 'assets/Logo.png';
		const friendSrc = 'assets/friend.png';
		const messageSrc = 'assets/chat.png';
		const connectMe = 'assets/ConnectME.png';

		return (
			<header>
				<img className="nav-logo" src={logoSrc} alt="logo" />
				<h1>
					<img className="connect-me" src={connectMe} alt="connect me title" />
				</h1>
				<div className="navlink-container">
					<div className="link-container">
						<img className="navlink-img" src={profileSrc} alt="Profile Photo" />
						<Link className="Link" to="/login">
							Login
						</Link>
					</div>
					<div className="link-container">
						<img className="navlink-img" src={friendSrc} alt="friend logo" />
						<Link className="Link" to="/friends">
							Friends
						</Link>
					</div>
					<div className="link-container">
						<img className="navlink-img" src={messageSrc} alt="message logo" />
						<Link className="Link" to="/message">
							Message
						</Link>
					</div>
				</div>
			</header>
		);
	}
}

export default NavHeader;
