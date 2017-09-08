import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { friends, fetchFriendsHasErred, fetchFriendsIsLoading } from './facebookReducers';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
	routing: routerReducer,
	friends,
	fetchFriendsIsLoading,
	fetchFriendsHasErred,
  firebaseStateReducer,
});

export default rootReducer;
