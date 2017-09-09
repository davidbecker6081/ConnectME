export const messageFriend = (name, id) => {
	return {
		type: 'MESSAGE_FRIEND',
		name,
		id,
	};
};
