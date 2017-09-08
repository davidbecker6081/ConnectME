export const friends = (state = [], action) => {
	switch (action.type) {
	case 'FETCH_FRIENDS_SUCCESS':
		return action.friends;
	default:
		return state;
	}
};

export const fetchFriendsIsLoading = (state = false, action) => {
	switch (action.type) {
	case 'FETCH_FRIENDS_IS_LOADING':
		return action.fetchFriendsIsLoading;

	default:
		return state;
	}
};

export const fetchFriendsHasErred = (state = false, action) => {
	switch (action.type) {
	case 'FETCH_FRIENDS_HAS_ERRED':
		return action.fetchFriendsHasErred;

	default:
		return state;
	}
};
