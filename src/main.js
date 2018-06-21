import React from 'react';
import { render as renderDom } from 'react-dom';
import io from 'socket.io-client';

import App from './components/app/app';
import './styles/main.scss';

const socket = io(API_URL);

console.log('MAIN SOCKET', socket);

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

renderDom(<App socket={socket} />, appContainer);
