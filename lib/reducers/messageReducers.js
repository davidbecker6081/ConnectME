export const messageFriendData = (state = {}, action) => {
	switch (action.type) {
	case 'MESSAGE_FRIEND':
		return Object.assign({}, { name: action.name }, { id: action.id });
	default:
		return state;
	}
};
