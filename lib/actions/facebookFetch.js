export const fetchFriendsSuccess = friendArray => {
	return {
		type: 'FETCH_FRIENDS_SUCCESS',
		friends: friendArray,
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

export const fetchFriends = userID => {
	return dispatch => {
		dispatch(fetchFriendsIsLoading(true));
		fetch(
			'https://graph.facebook.com/v2.10/10152786482452059?fields=friends,hometown,location,name&access_token=EAACEdEose0cBAErxpKYFKhrVvUoD6wbOaqWUeaw9shxN6dDSPRlLVGwaMSRbrM6pZCg0OwbsdP8UijgQI43Mn4GgBHHPrgEQtnphIQaBkSTAWnroWWInPQB4wP92ZADeC7T1FP6xUwBsgk3JQ1dZAjs6ByzOcHs3PQe2ZColsKKFokN7DsoKaZB1CyUXHixUZD'
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
				dispatch(fetchFriendsSuccess(parsedResponse.friends.data));
				console.log(parsedResponse);
				dispatch(
					userDataFromFacebook(
						Object.assign(
							{},
							{ hometown: parsedResponse.hometown },
							{ currentLocation: parsedResponse.location },
							{ fullName: parsedResponse.name }
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
