import React, { Component } from 'react';
import FacebookContainer from '../containers/FacebookContainer'

class FriendList extends Component {
	constructor() {
		super();
		this.state = {
			friends: [],
			friendLocations: [],
			friendsOfLocation: []
		};
	}

	renderFriends() {
		const { friends } = this.state;

		return friends.map(friend => {
			return <li>{friend.name}</li>
		});
	}

	renderFriendsOfLocation(location) {

  }

	render() {
		return <ul>{this.renderFriends()}<ul />
	}
}

export default FacebookContainer(FriendList);
