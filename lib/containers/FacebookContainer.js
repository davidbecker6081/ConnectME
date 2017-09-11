import { connect } from 'react-redux';
import { fetchFriends } from '../actions/facebookFetch';
import FriendList from '../components/FriendList';
import { messageFriend } from '../actions/message';

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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);
