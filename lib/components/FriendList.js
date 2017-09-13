import React, { Component } from 'react';
import Friend from './Friend';
import MessageContainer from '../containers/MessageContainer';
import { Route } from 'react-router';

class FriendList extends Component {
	constructor() {
		super();
		this.state = {
			friendLocations: [],
			friendsOfLocation: [],
			isMessageViewShowing: false,
			locationInput: '',
		};
	}

	fetchFriends() {
		const { fetchFriends } = this.props;

		fetchFriends(10152786482452059);
	}

	openMessageView() {
		this.setState(
			{
				isMessageViewShowing: false,
			},
			() => {
				this.setState({
					isMessageViewShowing: true,
				});
			}
		);
	}

	renderFriends() {
		const { friends, messageFriend, loggedInUser, userDataFacebook } = this.props;
		const imgURL = 'assets/user-picture.png';
		let currentLocation;
		let profileImg;

		// const filteredFriends = friends.filter(friend => {
		// 	return friend.location.name === 'Memphis, Tennessee';
		// });

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
					openMessageView={this.openMessageView.bind(this)}
				/>
			);
		});
	}

	renderFriendsOfLocation(location) {}

	render() {
		const { isMessageViewShowing } = this.state;
		return (
			<div className="friend-message-container">
				<div className="friend-list-container">
					<h3>Search Friends</h3>
					<div className="search-container">
						<input
							className="username-input search-input"
							type="text"
							placeholder="Search a Location"
							onChange={e => {
								this.setState({ location: e.target.value });
							}}
						/>
						<button
							className="search-friends-btn"
							onClick={() => {
								this.fetchFriends();
							}}
						>
							Search
						</button>
					</div>
					<ul className="friend-list">{this.renderFriends()}</ul>
				</div>
				{isMessageViewShowing && <MessageContainer />}
			</div>
		);
	}
}

export default FriendList;
