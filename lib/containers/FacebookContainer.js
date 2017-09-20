import { connect } from 'react-redux';
import { fetchFriends } from '../actions/facebookFetch';
import FriendList from '../components/FriendList';
import { messageFriend, retrieveMessagesFromFirebase } from '../actions/message';

export const mapStateToProps = store => {
	return {
		friends: store.friends,
		userDataFacebook: store.userDataFacebook,
		messageFriendData: store.messageFriendData,
		loggedInUser: store.loggedInUser,
	};
};

export const mapDispatchToProps = dispatch => {
	return {
		fetchFriends: userID => {
			dispatch(fetchFriends(userID));
		},
		messageFriend: (name, id) => {
			dispatch(messageFriend(name, id));
		},
		retrieveMessagesFromFirebase: (user) => {
			dispatch(retrieveMessagesFromFirebase(user));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);
