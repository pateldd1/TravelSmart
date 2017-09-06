import { merge } from 'lodash';

import {
  RECEIVED_HOMES,
  RECEIVED_HOME,
  // RECEIVED_HOME_REVIEW,
  // RECEIVED_DELETION,
} from '../actions/home_actions';

const defaultState = {};


const HomeReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVED_HOME:

      newState = merge({}, state, {[action.home.id]: action.home});
      return newState;

    case RECEIVED_HOMES:
      return action.homes;
    default:
      return state;
  }
};

export default HomeReducer;
