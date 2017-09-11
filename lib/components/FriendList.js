import React, { Component } from 'react';
import Friend from './Friend';
import MessageContainer from '../containers/MessageContainer';
import { Redirect } from 'react-router';

class FriendList extends Component {
	constructor() {
		super();
		this.state = {
			friendLocations: [],
			friendsOfLocation: [],
		};
	}

	fetchFriends() {
		const { fetchFriends } = this.props;

		fetchFriends(10152786482452059);
	}

	renderFriends() {
		const { friends, messageFriend } = this.props;
		const imgURL = 'assets/user-picture.png';
		const openMessageView = () => {
			return <Redirect to='/message' />;
		};
		let currentLocation;
		let profileImg;

		return friends.map((friend, i) => {
			currentLocation = friend.location ? friend.location.name : 'unknown';
			profileImg = friend.picture ? friend.picture.data.url : imgURL;

			return (
				<Friend
					key={i}
					name={friend.name}
					profileImg={profileImg}
					currentLocation={currentLocation}
					messageFriend={messageFriend}
					friendID={friend.id}
					openMessageView={openMessageView}
				/>
			);
		});
	}

	renderFriendsOfLocation(location) {}

	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.fetchFriends();
					}}
				>
					fetch
				</button>
				<ul>{this.renderFriends()}</ul>
			</div>
		);
	}
}

export default FriendList;
