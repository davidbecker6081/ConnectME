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

export const loggedInUser = userData => {
	return {
		type: 'LOGGED_IN_USER',
		loggedInUser: userData,
	};
};

// https://graph.facebook.com/v2.10/10152786482452059?fields=friends,hometown,location,name&access_token=EAACEdEose0cBAKRKal7htacXm0CoIhbNXTsEL5uZAq6TMa4xIjVaUmIvVanJTL7ROXL8vRJGbyZAx0khNWmBCEgNLoM1XVDODFaZArxfF3mwmrbxhJrKeNILrc7GiBJZApjZATDOZARo4Q8SlWIIbWtYUPlZA3gzZAut6XtDAZAYz4SqSX3fpqtsyV8HrhG9szdIZD

//  "https://graph.facebook.com/v2.10/10152786482452059?fields=about,email,friends.limit(50),name,hometown,location,about,picture_url&access_token=EAACEdEose0cBAL13gGAbwndzjUGZBF64bLDGi6oek5qHUSj1pQOMHKnEvlPQeLiqjaS1OIktcQKk6edmRl4DEgMSkvlQbPsJXHs3nVopsTiA7HE0FZAWYvLJeI3Obwlufj8LBZBM1qAknsCfXWf5X19n2SpCuwXOTlIpayx0Nuv1s3n2kxWcmt3EcNxzN0ZD"
export const fetchFriends = userID => {
	return dispatch => {
		dispatch(fetchFriendsIsLoading(true));
		fetch(
			'https://graph.facebook.com/v2.10/10152786482452059?fields=about,name,hometown,location,email,friends.limit(200){name,hometown,location,about,picture{url}}&access_token=EAACEdEose0cBAAcF9k1Rmea9M8ZCKBNod1ga9U2wFtmjhqGnRZAEFjfV0LEw5AlyKvFMBa54ZCE2L4I9ZBUaAkk0ZCujpAdv5zzCMAwDRyzClUuX8Gk07p18CAaFoUr2nmrMXUOLCa1BAJTIBT97bbjeMgDfpkU8B5Iq9AOGCpLk20Pe4Py5NXdCPjshjSC4ZD'
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
