import { connect } from 'react-redux';
import MessageView from '../components/MessageView';
import {
	sendMessageToFirebase,
	retrieveMessagesFromFirebase,
	resetMessages,
} from '../actions/message';

export const mapStateToProps = store => {
	return {
		messageFriendData: store.messageFriendData,
		loggedInUser: store.loggedInUser,
		messages: store.messages,
		userDataFacebook: store.userDataFacebook,
	};
};

export const mapDispatchToProps = dispatch => {
	return {
		sendMessage: message => {
			dispatch(sendMessageToFirebase(message));
		},
		retrieveMessagesFromFirebase: user => {
			dispatch(retrieveMessagesFromFirebase(user));
		},
		resetMessages: () => {
			dispatch(resetMessages());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageView);
