export const messageFriend = (name, id) => {
	return {
		type: 'MESSAGE_FRIEND',
		name,
		id,
	};
};

export const sendMessageToStore = message => {
	return {
		type: 'SEND_MESSAGE',
		message,
	};
};

export const sendMessageToFirebase = message => {
	return dispatch => {
		dispatch(sendMessageToStore(message));
	};
	// dispatch to firebase?
	// dispatch to sendMessageToStore
};

export const messagesFromFirebase = retrievedMessages => {
	return {
		type: 'RETRIEVE_MESSAGES',
		retrievedMessages,
	};
};

export const retrieveMessagesFromFirebase = user => {
	return true;
	// dispatch to firebase?
	// dispatch messagesFromFirebase with response
};
