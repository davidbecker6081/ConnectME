import React, { Component } from 'react';

class FriendList extends Component {
	constructor() {
		super();
		this.state = {
			friendLocations: [],
			friendsOfLocation: [],
		};
	}

	componentWillMount() {}

	fetchFriends() {
		const { fetchFriends } = this.props;

		fetchFriends(10152786482452059);
	}

	renderFriends() {
		const { friends } = this.props;

		return friends.map(friend => {
			return <li>{friend.name}</li>;
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
			</div>
		);
	}
}

export default FriendList;
