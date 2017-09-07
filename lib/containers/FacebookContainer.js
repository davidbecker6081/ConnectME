import { connect } from 'react-redux';
import { fetchFriends } from '../actions/facebookFetch';

export const mapStateToProps = store => {
	return {
		friends: store.friends,
	};
};

export const mapDispatchToProps = dispatch => {
	return {
		fetchFriends: userID => {
			dispatch(fetchFriends(userID));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps);
