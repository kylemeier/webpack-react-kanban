import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

//redux
import { createStore } from 'redux';
import kanbanApp from './reducers';
import { Provider } from 'react-redux'

// persist(alt, storage, 'app');
let store = createStore(kanbanApp);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
		document.getElementById('app')
);