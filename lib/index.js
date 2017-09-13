import React from 'react';
import ReactDOM from 'react-dom';
import RoutesContainer from './containers/RoutesContainer';
import Routes from './Routes';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import createHistory from '../node_modules/history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Router } from 'react-router';
import firebase from './firebase';

const history = createHistory();

const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = configureStore(devTools);

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Routes />
		</Router>
	</Provider>
);

ReactDOM.render(router, document.getElementById('main'));
