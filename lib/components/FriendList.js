import React, { Component } from 'react';
import Friend from './Friend';
import MessageContainer from '../containers/MessageContainer';
import { Route } from 'react-router';

class FriendList extends Component {
	constructor() {
		super();
		this.state = {
			friendsOfLocation: [],
			isMessageViewShowing: false,
			locationInput: '',
		};
	}

	// shouldComponentUpdate(nextProps) {
	// 	if (nextProps.friends.length !== this.props.friends.length) {
	// 		console.log('update true');
	// 		return true;
	// 	}
	// 	console.log('update false');
	// 	return false;
	// }

	fetchFriends(location) {
		const { fetchFriends } = this.props;
		if (location) {
			fetchFriends({ userID: 10152786482452059, location });
			return true;
		}
		return alert('enter a location to search');
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
		let profileImg;

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
		const { isMessageViewShowing, locationInput } = this.state;
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
					<ul className="friend-list" />
				</div>
				{isMessageViewShowing && <MessageContainer />}
			</div>
		);
	}
}

export default FriendList;
