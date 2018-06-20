import React from 'react';
import { render as renderDom } from 'react-dom';
import io from 'socket.io-client';

import App from './components/app/app';
import './styles/_base.scss';
import './styles/_vars.scss';
import './styles/_normalize.scss';
import './styles/main.scss';

const socket = io('http://localhost:3000');

console.log('MAIN SOCKET', socket)

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

renderDom(<App socket={socket} />, appContainer);
