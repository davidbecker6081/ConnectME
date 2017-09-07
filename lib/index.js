import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import createHistory from '../node_modules/history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import firebase from './firebase';

const history = createHistory();
// const middleware = routerMiddleware(history);

const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = configureStore(devTools);

const router = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>
);

ReactDOM.render(router, document.getElementById('main'));
