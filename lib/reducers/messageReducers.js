export const messageFriendData = (state = {}, action) => {
	switch (action.type) {
	case 'MESSAGE_FRIEND':
		return Object.assign({}, { name: action.name }, { id: action.id });
	default:
		return state;
	}
};

export const messages = (state = [], action) => {
	switch (action.type) {
	case 'SEND_MESSAGE':
		return [...state, action.message];

	case 'RETRIEVE_MESSAGES':
		return Object.keys(action.retrievedMessages).map(key => {
			return action.retrievedMessages[key];
		});

	default:
		return state;
	}
};
