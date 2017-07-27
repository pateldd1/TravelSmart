import React from 'react';
import ReactDOM from 'react-dom';
//YOu need to import these from the session_actions, NOT the api_util file
import { signup, login, logout } from "./actions/session_actions"
import configureStore from './store/store';
import Root from './components/root';
import {updateFilter} from './actions/filter_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if ( window.currentUser )
  {
    const preloadedState = {currentUser: window.currentUser};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }
  //These are for testing. Remember to remove these after producing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.updateFilter = updateFilter;

  //This grabs the id of root and then sends the Root component in there
  ReactDOM.render(<Root store={store}/>, root);
});
