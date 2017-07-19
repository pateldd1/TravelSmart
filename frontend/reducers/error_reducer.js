import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type)
  {
    case RECEIVE_CURRENT_USER:
      return merge({}, {currentUser: action.currentUser, errors: []});
    case RECEIVE_ERRORS:
      return merge({}, {currentUser: null, errors: action.errors});
    default:
      return state;
  }
};

export default SessionReducer;
