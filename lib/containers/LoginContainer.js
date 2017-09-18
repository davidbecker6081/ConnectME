import { connect } from 'react-redux';
import { loggedInUser } from '../actions/facebookFetch';
import Login from '../components/Login';

export const mapStateToProps = store => {
	return {
		loginUserExists: store.loggedInUser.displayName,
	};
};

export const mapDispatchToProps = dispatch => {
	return {
		storeLoggedInUserData: userData => {
			dispatch(loggedInUser(userData));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
