import React from 'react';
import { Link } from 'react-router-dom';

const NavHeader = () => {
	const imgSRC = 'assets/user-picture.png';

	return (
		<header>
			<img src={imgSRC} alt="Connect Me Logo" />
			<h1>ConnectME</h1>
			<Link to="/login">Login</Link>
			<Link to="/friends">Friends</Link>
			<Link to="/message">Message</Link>
		</header>
	);
};

export default NavHeader;
