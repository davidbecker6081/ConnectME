import { connect } from 'react-redux';
import NavHeader from '../components/NavHeader';


export const mapStateToProps = store => {
	return {
		userDataFacebook: store.userDataFacebook,
	};
};

// export const mapDispatchToProps = dispatch => {
// 	return {
// 		fetchFriends: userID => {
// 			dispatch(fetchFriends(userID));
// 		},
// 	};
// };

export default connect(mapStateToProps)(NavHeader);
