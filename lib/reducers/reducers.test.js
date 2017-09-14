import * as facebookReducers from './facebookReducers';
import * as messageReducers from './messageReducers';

describe('reducer tests', () => {
	describe('facebook Reducers - Friends', () => {
		it('should give me a default state', () => {
			const action = { type: '' };
			const expectedReturn = [];
			expect(facebookReducers.friends(undefined, action)).toEqual(expectedReturn);
		});
		it('should return an array of friends', () => {
			const action = {
				type: 'FETCH_FRIENDS_SUCCESS',
				friends: [{ location: 'Memphis, Tennessee' }],
			};
			const expectedReturn = [{ location: 'Memphis, Tennessee' }];
			expect(facebookReducers.friends(undefined, action)).toEqual(expectedReturn);
		});
		it('should return an array of friends with a location added if missing', () => {
			const action = {
				type: 'FETCH_FRIENDS_SUCCESS',
				friends: [{ location: 'Memphis, Tennessee' }, { friend: 'David' }],
			};
			const expectedReturn = [
				{ location: 'Memphis, Tennessee' },
				{ friend: 'David', location: { name: 'unknown' } },
			];
			expect(facebookReducers.friends(undefined, action)).toEqual(expectedReturn);
		});
	});

	describe('facebook Reducers - fetchFriendsIsLoading', () => {
		it('should give me a default state', () => {
			const action = { type: '' };
			const expectedReturn = false;
			expect(facebookReducers.fetchFriendsIsLoading(undefined, action)).toEqual(expectedReturn);
		});
		it('should return true if loading', () => {
			const action = {
				type: 'FETCH_FRIENDS_IS_LOADING',
				fetchFriendsIsLoading: true,
			};
			const expectedReturn = true;
			expect(facebookReducers.fetchFriendsIsLoading(undefined, action)).toEqual(expectedReturn);
		});
	});

	describe('facebook Reducers - fetchFriendsHasErred', () => {
		it('should give me a default state', () => {
			const action = { type: '' };
			const expectedReturn = false;
			expect(facebookReducers.fetchFriendsHasErred(undefined, action)).toEqual(expectedReturn);
		});
		it('should return true if erred', () => {
			const action = {
				type: 'FETCH_FRIENDS_HAS_ERRED',
				fetchFriendsHasErred: true,
			};
			const expectedReturn = true;
			expect(facebookReducers.fetchFriendsHasErred(undefined, action)).toEqual(expectedReturn);
		});
	});

	describe('facebook Reducers - user data', () => {
		it('should give me a default state', () => {
			const action = { type: '' };
			const expectedReturn = {};
			expect(facebookReducers.userDataFacebook(undefined, action)).toEqual(expectedReturn);
		});
		it('should return data if present', () => {
			const action = {
				type: 'USER_DATA_FROM_FACEBOOK',
				userDataFacebook: { name: 'David', location: { name: 'Denver, CO', id: '123123123213' } },
			};
			const expectedReturn = {
				name: 'David',
				location: { name: 'Denver, CO', id: '123123123213' },
			};
			expect(facebookReducers.userDataFacebook(undefined, action)).toEqual(expectedReturn);
		});
	});

	describe('facebook Reducers - logged in user', () => {
		it('should give me a default state', () => {
			const action = { type: '' };
			const expectedReturn = {};
			expect(facebookReducers.loggedInUser(undefined, action)).toEqual(expectedReturn);
		});
		it('should return data if present', () => {
			const action = {
				type: 'LOGGED_IN_USER',
				loggedInUser: { name: 'David', location: { name: 'Denver, CO', id: '123123123213' } },
			};
			const expectedReturn = {
				name: 'David',
				location: { name: 'Denver, CO', id: '123123123213' },
			};
			expect(facebookReducers.loggedInUser(undefined, action)).toEqual(expectedReturn);
		});
	});

	describe('message reducers - message friend data', () => {
		it('should give me a default state', () => {
			const action = { type: '' };
			const expectedReturn = {};
			expect(messageReducers.messageFriendData(undefined, action)).toEqual(expectedReturn);
		});
		it('should return user data for recipient of message', () => {
			const action = {
				type: 'MESSAGE_FRIEND',
				name: 'David',
				location: { name: 'Denver, CO', id: '123123123213' },
				id: '1111',
			};
			const expectedReturn = {
				name: 'David',
				id: '1111',
			};
			expect(messageReducers.messageFriendData(undefined, action)).toEqual(expectedReturn);
		});
	});

	describe('message reducers - messages', () => {
		it('should give me a default state', () => {
			const action = { type: '' };
			const expectedReturn = [];
			expect(messageReducers.messages(undefined, action)).toEqual(expectedReturn);
		});
		it('should add a message to state if sending a message', () => {
			const state = [{ message: '1' }];
			const action = {
				type: 'SEND_MESSAGE',
				message: { message: '2' },
			};
			const expectedReturn = [{ message: '1' }, { message: '2' }];
			expect(messageReducers.messages(state, action)).toEqual(expectedReturn);
		});
		it('should retrieve mesages from the database and put them into store', () => {
			const action = {
				type: 'RETRIEVE_MESSAGES',
				retrievedMessages: {
					message1: { message: '1' },
					message2: { message: '2' },
					message3: { message: '3' },
				},
			};
			const expectedReturn = [{ message: '1' }, { message: '2' }, { message: '3' }];
			expect(messageReducers.messages(undefined, action)).toEqual(expectedReturn);
		});
	});
});
