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
		return [
			...state,
			...Object.keys(action.retrievedMessages).map(key => {
				return action.retrievedMessages[key];
			}),
		];
	case 'RESET_MESSAGES':
		return action.reset;

	default:
		return state;
	}
};
