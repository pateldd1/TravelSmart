import React from 'react';
import ReactDOM from 'react-dom';
//YOu need to import these from the session_actions, NOT the api_util file
import { signup, login, logout } from "./actions/session_actions"
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if ( window.currentUser )
  {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  //This grabs the id of root and then sends the Root component in there
  ReactDOM.render(<Root store={store}/>, root);
});
