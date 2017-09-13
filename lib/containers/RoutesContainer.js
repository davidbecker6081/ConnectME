import { connect } from 'react-redux';
import Routes from '../Routes';

const mapStateToProps = store => {
	return {
		loggedInUser: store.loggedInUser,
	};
};

export default connect(mapStateToProps, null);
