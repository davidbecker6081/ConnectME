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
		const { friends } = this.props;
		const imgURL = 'assets/user-picture.png';
		const currentLocation = 'Denver, CO';

		return friends.map((friend, i) => {
			return (
				<Friend key={i} name={friend.name} imageURL={imgURL} currentLocation={currentLocation} />
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
