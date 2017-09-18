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
		return () => {
			this.renderFriends();
			this.setState({
				locationInput: '',
			});
		};
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
						openMessageView={this.openMessageView.bind(this)}
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
				{isMessageViewShowing && <MessageContainer />}
			</div>
		);
	}
}

export default FriendList;
