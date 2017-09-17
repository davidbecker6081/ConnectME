import React, { Component } from 'react';
import FacebookContainer from '../containers/FacebookContainer';
import MessageContainer from '../containers/MessageContainer';
import { Link } from 'react-router-dom';

class Homepage extends Component {
	render() {
		const { displayName } = this.props.loggedInUser;
    const logoSrc = 'assets/Logo.png';

		if (displayName) {
			return <FacebookContainer />;
		}

		return (
      <div className="homepage">
        <Link className="homepage-link-login" to='/login'>Click Here to Login With Facebook</Link>
        <img className="homepage-logo" src={logoSrc} alt="logo" />
        <p className="homepage-text">You Must Be Logged In To Send Messages to Friends</p>
      </div>
    )
	}
}

export default Homepage;
