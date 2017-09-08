import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
	routing: routerReducer,
	firebaseStateReducer,
});

export default rootReducer;
