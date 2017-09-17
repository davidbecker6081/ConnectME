import { connect } from 'react-redux';
import Homepage from '../components/Homepage';


export const mapStateToProps = store => {
	return {
		loggedInUser: store.loggedInUser,
	};
};

export default connect(mapStateToProps, null)(Homepage);
