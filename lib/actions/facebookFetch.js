export const fetchFriendsSuccess = (friendArray, location) => {
	return {
		type: 'FETCH_FRIENDS_SUCCESS',
		friends: friendArray,
		location,
	};
};

export const fetchFriendsIsLoading = bool => {
	return {
		type: 'FETCH_FRIENDS_IS_LOADING',
		fetchFriendsIsLoading: bool,
	};
};

export const fetchFriendsHasErred = bool => {
	return {
		type: 'FETCH_FRIENDS_HAS_ERRED',
		fetchFriendsHasErred: bool,
	};
};

export const userDataFromFacebook = userData => {
	return {
		type: 'USER_DATA_FROM_FACEBOOK',
		userDataFacebook: userData,
	};
};

export const loggedInUser = userData => {
	return {
		type: 'LOGGED_IN_USER',
		loggedInUser: userData,
	};
};

export const fetchFriends = ({ userID, location }) => {
	return dispatch => {
		dispatch(fetchFriendsIsLoading(true));
		fetch(
			'https://graph.facebook.com/v2.10/10152786482452059?fields=about,name,hometown,location,email,friends.limit(200){name,hometown,location,about,picture{url}}&access_token=EAACEdEose0cBADkQTwaNRCLdVw3vktXapRcjGS52Sy9lA0FdneBHvIUCbVx5dypMMstJfIeUi8JlAA6zjYU8MJTlGGPdKt5a9fcxYYHjOSxeVQjZCfiOLZC4ZCwNkIe15mQLjPzfcBD0qxZAsKm0R71EjCnL8ewmdXAAUVfoxuJNl9MVGLnETfk3LPOsLhdZBjP8y9cfeZBQZDZD'
		)
			.then(response => {
				if (response.status !== 200) {
					dispatch(fetchFriendsHasErred(true));
				}

				dispatch(fetchFriendsIsLoading(false));

				return response;
			})
			.then(response => {
				return response.json();
			})
			.then(parsedResponse => {
				dispatch(fetchFriendsSuccess(parsedResponse.friends.data, location));
				console.log('fetch location', location);
				dispatch(
					userDataFromFacebook(
						Object.assign(
							{},
							{ hometown: parsedResponse.hometown },
							{ currentLocation: parsedResponse.location },
							{ fullName: parsedResponse.name },
							{ id: userID }
						)
					)
				);
			})
			.catch(e => {
				dispatch(fetchFriendsHasErred(true));
				console.log('erred 2', e);
			});
	};
};
