import React, { Component } from 'react';
import Friend from './Friend';
import MessageContainer from '../containers/MessageContainer';
import { Route } from 'react-router';
import firebase, { referenceMessages, database } from '../firebase';

class FriendList extends Component {
	constructor() {
		super();
		this.state = {
			isMessageViewShowing: false,
			locationInput: '',
		};
	}

	componentWillReceiveProps(nextProps) {
		const { id: currentId } = this.props.messageFriendData;
		const { id: nextId } = nextProps.messageFriendData;

		console.log('not equal', currentId !== nextId);

		if (currentId !== nextId) {
			this.setState({
				locationInput: '',
			});
			return true;
		}

		return false;
	}

	fetchFriends(location) {
		const { fetchFriends } = this.props;
		return location ? fetchFriends({ userID: 10152786482452059, location }) : this.resetLocation();
	}

	// use messageFriendData to show MesssgeView instead of state (when that exists in store, render messageViewContainer)
	// return location ? fetchFriends() : compose()
	// compose(this.renderFriends(), resetState(''))

	resetLocation() {
		this.setState(
			{
				locationInput: '',
			},
			this.renderFriends
		);
	}

	renderFriends() {
		const { friends, messageFriend, loggedInUser, userDataFacebook } = this.props;
		const imgURL = 'assets/user-picture.png';
		let profileImg;

		if (this.state.locationInput) {
			return friends.map((friend, i) => {
				// currentLocation = friend.location ? friend.location.name : 'unknown';
				profileImg = friend.picture ? friend.picture.data.url : imgURL;
				return (
					<Friend
						key={i}
						name={friend.name}
						profileImg={profileImg}
						currentLocation={friend.location.name}
						messageFriend={messageFriend}
						friendID={friend.id}
					/>
				);
			});
		}
		return (
			<div className="default-message-individual">Please enter a valid Location to Search</div>
		);
	}

	render() {
		const { isMessageViewShowing, locationInput } = this.state;
		const { name: friendName } = this.props.messageFriendData;
		const displayLocation = friendName ? 'transition1' : 'display-center';

		return (
			<div className={`friend-message-container ${displayLocation}`}>
				<div className="friend-list-container">
					<h3>Friends</h3>
					<div className="search-container">
						<input
							className="username-input search-input"
							type="text"
							placeholder="Search a Location"
							value={this.state.locationInput}
							onChange={e => {
								this.setState({ locationInput: e.target.value });
							}}
						/>
						<button
							className="search-friends-btn"
							onClick={() => {
								this.fetchFriends(locationInput);
							}}
						>
							Search
						</button>
					</div>
					<ul className="friend-list">{this.renderFriends()}</ul>
				</div>
				{friendName && <MessageContainer />}
			</div>
		);
	}
}

export default FriendList;
