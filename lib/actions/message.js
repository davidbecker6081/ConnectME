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
};

export const retrieveMessagesFromFirebase = retrievedMessages => {
	return {
		type: 'RETRIEVE_MESSAGES',
		retrievedMessages,
	};
};

export const resetMessages = () => {
	return {
		type: 'RESET_MESSAGES',
		reset: [],
	};
};
