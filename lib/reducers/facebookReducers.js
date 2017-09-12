export const friends = (state = [], action) => {
	switch (action.type) {
	case 'FETCH_FRIENDS_SUCCESS':
		return action.friends.map(friend => {
			if (!friend.location) {
				return Object.assign({}, friend, { location: { name: 'unknown' } });
			}
			return friend;
		});
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

export const userDataFacebook = (state = {}, action) => {
	switch (action.type) {
	case 'USER_DATA_FROM_FACEBOOK':
		return action.userDataFacebook;

	default:
		return state;
	}
};

export const loggedInUser = (state = {}, action) => {
	switch (action.type) {
	case 'LOGGED_IN_USER':
		return action.loggedInUser;

	default:
		return state;
	}
};
