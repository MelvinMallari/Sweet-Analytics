import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './components/root';

// parses user's session token
import jwt_decode from 'jwt-decode';

import { setAuthToken } from './util/session_api_util';
import { logout } from '.actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  
});