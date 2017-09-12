import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
	friends,
	fetchFriendsHasErred,
	fetchFriendsIsLoading,
	userDataFacebook,
	loggedInUser,
} from './facebookReducers';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import { messageFriendData, messages } from './messageReducers';

const rootReducer = combineReducers({
	routing: routerReducer,
	friends,
	fetchFriendsIsLoading,
	fetchFriendsHasErred,
	firebaseStateReducer,
	userDataFacebook,
	messageFriendData,
	loggedInUser,
	messages,
});

export default rootReducer;
