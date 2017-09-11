import { connect } from 'react-redux';
import Message from '../components/Message';


export const mapStateToProps = store => {
	return {
		messageFriendData: store.messageFriendData,
		loggedInUser: store.loggedInUser,
	};
};

// export const mapDispatchToProps = dispatch => {
// 	return {
// 		fetchFriends: userID => {
// 			dispatch(fetchFriends(userID));
// 		},
// 	};
// };

export default connect(mapStateToProps)(Message);
