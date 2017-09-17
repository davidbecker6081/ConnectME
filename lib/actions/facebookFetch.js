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

// https://graph.facebook.com/v2.10/10152786482452059?fields=friends,hometown,location,name&access_token=EAACEdEose0cBAKRKal7htacXm0CoIhbNXTsEL5uZAq6TMa4xIjVaUmIvVanJTL7ROXL8vRJGbyZAx0khNWmBCEgNLoM1XVDODFaZArxfF3mwmrbxhJrKeNILrc7GiBJZApjZATDOZARo4Q8SlWIIbWtYUPlZA3gzZAut6XtDAZAYz4SqSX3fpqtsyV8HrhG9szdIZD

//  "https://graph.facebook.com/v2.10/10152786482452059?fields=about,email,friends.limit(50),name,hometown,location,about,picture_url&access_token=EAACEdEose0cBAL13gGAbwndzjUGZBF64bLDGi6oek5qHUSj1pQOMHKnEvlPQeLiqjaS1OIktcQKk6edmRl4DEgMSkvlQbPsJXHs3nVopsTiA7HE0FZAWYvLJeI3Obwlufj8LBZBM1qAknsCfXWf5X19n2SpCuwXOTlIpayx0Nuv1s3n2kxWcmt3EcNxzN0ZD"
export const fetchFriends = ({ userID, location }) => {
	return dispatch => {
		dispatch(fetchFriendsIsLoading(true));
		fetch(
			'https://graph.facebook.com/v2.10/10152786482452059?fields=about,name,hometown,location,email,friends.limit(200){name,hometown,location,about,picture{url}}&access_token=EAACEdEose0cBADVYt8LRQxPgfh4s9jPqmZA6adlafBv5OFhS6Sy2ZB3MKMtpY228pYcxCI0KOb5mzMXEb8HN7wiMC15ftOyeMnCXfurnoZA7HdEthxv62yj6v2nGjhEi83Y75nQpAcQ9sJkq8nu104TtgvJpJZAcTkH2ZBfQrbZCCUYBtPJuKf81F7SeglprUZD'
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
