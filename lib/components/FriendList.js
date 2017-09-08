import React, { Component } from 'react';
import FacebookContainer from '../containers/FacebookContainer'

class FriendList extends Component {
	constructor() {
		super();
		this.state = {
			friendLocations: [],
			friendsOfLocation: [],
		};
	}

  componentWillMount() {
    const { fetchFriends } = this.props

    fetchFriends(10152786482452059)
  }

	renderFriends() {
		const { friends } = this.props;

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
