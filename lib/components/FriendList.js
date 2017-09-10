import React, { Component } from 'react';
import Friend from './Friend';

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
