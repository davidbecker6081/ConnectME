import { connect } from 'react-redux';
import { loggedInUser } from '../actions/facebookFetch';
import Login from '../components/Login';

export const mapDispatchToProps = dispatch => {
	return {
		storeLoggedInUserData: userData => {
			dispatch(loggedInUser(userData));
		},
	};
};

export default connect(null, mapDispatchToProps)(Login);
