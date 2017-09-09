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

export const fetchFriends = userID => {
	return dispatch => {
		dispatch(fetchFriendsIsLoading(true));
		fetch(
			'https://graph.facebook.com/v2.10/10152786482452059?fields=friends&access_token=EAACEdEose0cBALZC3VL4KfEeEUCvf1o200xxtK5AyzLJrlMseb3fCZA52bq6nGLRMQxKmU8c4PiZAEgmk2l5w8Sb58lvKaEdVtT5MacGK3yJopGpVp7YKZC7ojePI2qFF1TEJZA9qIDWqDVYTE7CqjKFp7d3ZAlzZAr9oL9nnw4u8JAfj5eruJIGUQwEyDhZCuEZD'
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
				dispatch(fetchFriendsSuccess(parsedResponse.friends.data))
				console.log(parsedResponse);
			// 	fetch(
			// 		'https://graph.facebook.com/v2.10/me?fields=about%2Cemail&access_token=EAACEdEose0cBAMBmWl8ad2KexJpRlO6UaWGq9vi4eXxvdZA4abO7QNYejyE7sIrYJcbhux2kYIo1tmciJMkHXCvUy1TFqrVuhZCP5gtr2MgPUsokzXyyLxTp6g75ucG0MdrrrVDNZC3UkPDsbGJZAnvVsEclPPx58jbZAyE4gcAeP2J098iLT9bQGajUCW2EZD'
			// 	);
			// })
			// .then(response => {
			// 	return response.json();
			// })
			// .then(parsedResponse => {
			// 	console.log(parsedResponse);
			})
			.catch(e => {
				dispatch(fetchFriendsHasErred(true));
				console.log('erred 2', e);
			});
	};
};
