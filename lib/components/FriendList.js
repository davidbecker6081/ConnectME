import React, { Component } from 'react';
import Friend from './Friend';
import MessageContainer from '../containers/MessageContainer';

class FriendList extends Component {
	constructor() {
		super();
		this.state = {
			friendLocations: [],
			friendsOfLocation: [],
			isMessageViewShowing: false,
		};
	}

	fetchFriends() {
		const { fetchFriends } = this.props;

		fetchFriends(10152786482452059);
	}

	openMessageView() {
		this.setState({
			isMessageViewShowing: true,
		});
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
					openMessageView={this.openMessageView.bind(this)}
				/>
			);
		});
	}

	renderFriendsOfLocation(location) {}

	render() {
		const { isMessageViewShowing } = this.state;
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
				{isMessageViewShowing && <MessageContainer />}
			</div>
		);
	}
}

export default FriendList;
