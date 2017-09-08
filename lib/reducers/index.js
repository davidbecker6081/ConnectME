import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { friends, fetchFriendsHasErred, fetchFriendsIsLoading } from './facebookReducers';

const rootReducer = combineReducers({
	routing: routerReducer,
	friends,
	fetchFriendsIsLoading,
	fetchFriendsHasErred,
});

export default rootReducer;
