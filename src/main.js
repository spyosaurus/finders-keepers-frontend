import React from 'react';
import { render as renderDom } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import io from 'socket.io-client';

import App from './components/app/app';
import reducers from './reducer/';
import thunk from './lib/redux-thunk';
import './styles/main.scss';


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const socket = io('http://localhost:3000');

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

renderDom(<Provider store={store}><App socket = { socket } /></Provider>, appContainer);
