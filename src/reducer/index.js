import { combineReducers } from 'redux';
import auth from './auth';
import socket from './socket';
import room from './room';
import host from './host';

export default combineReducers({ 
  auth, socket, room, host,
});
