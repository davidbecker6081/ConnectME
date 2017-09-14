import * as facebookActions from './facebookFetch';
import * as messageActions from './message';

describe('actions', () => {
	describe('facebook actions', () => {
		it('should create an action to detect if fetching friend list was successful', () => {
			const friendArray = [{ friend: 1 }];
			const expectedAction = {
				type: 'FETCH_FRIENDS_SUCCESS',
				friends: friendArray,
			};
			expect(facebookActions.fetchFriendsSuccess(friendArray)).toEqual(expectedAction);
		});

		it('should create an action to detect if fetching friend list is loading', () => {
			const bool = true;
			const expectedAction = {
				type: 'FETCH_FRIENDS_IS_LOADING',
				fetchFriendsIsLoading: bool,
			};
			expect(facebookActions.fetchFriendsIsLoading(bool)).toEqual(expectedAction);
		});
		it('should create an action to detect if fetching friends has erred', () => {
			const bool = true;
			const expectedAction = {
				type: 'FETCH_FRIENDS_HAS_ERRED',
				fetchFriendsHasErred: bool,
			};
			expect(facebookActions.fetchFriendsHasErred(bool)).toEqual(expectedAction);
		});
		it('should create an action to grab user data from facebook', () => {
			const userData = { user: {} };
			const expectedAction = {
				type: 'USER_DATA_FROM_FACEBOOK',
				userDataFacebook: userData,
			};
			expect(facebookActions.userDataFromFacebook(userData)).toEqual(expectedAction);
		});
		it('should create an action to grab logged in user data', () => {
			const userData = { user: {} };
			const expectedAction = {
				type: 'LOGGED_IN_USER',
				loggedInUser: userData,
			};
			expect(facebookActions.loggedInUser(userData)).toEqual(expectedAction);
		});
	});
	describe('message actions', () => {
		it('should create an action to message a friend', () => {
			const name = 'David';
			const id = '0000000';
			const expectedAction = {
				type: 'MESSAGE_FRIEND',
				name,
				id,
			};
			expect(messageActions.messageFriend(name, id)).toEqual(expectedAction);
		});
		it('should create an action to send message to store', () => {
			const message = { message: '' };
			const expectedAction = {
				type: 'SEND_MESSAGE',
				message,
			};
			expect(messageActions.sendMessageToStore(message)).toEqual(expectedAction);
		});
		it('should create an action to retrieve messages from firebase', () => {
			const retrievedMessages = [{ message: '' }, { message: '' }];
			const expectedAction = {
				type: 'RETRIEVE_MESSAGES',
				retrievedMessages,
			};
			expect(messageActions.retrieveMessagesFromFirebase(retrievedMessages)).toEqual(
				expectedAction
			);
		});
	});
});
