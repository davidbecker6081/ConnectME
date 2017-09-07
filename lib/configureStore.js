import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createHistory from '../node_modules/history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { reduxFirebase } from 'react-redux-firebase';

const history = createHistory();
const middleware = routerMiddleware(history);

const configureStore = initialState => {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk),
		applyMiddleware(middleware)
	);
};

export default configureStore;
