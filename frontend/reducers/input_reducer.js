import { merge } from 'lodash';

import { RECEIVE_INPUT } from '../actions/input_actions';

const defaultState = {
  startDate: null,
  endDate: null,
  num_guests: 0,
  maxGuests: 1
};


const UserInputReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_INPUT:
      return newState = merge({}, state, action)
    default:
      return state;
  }
};

export default UserInputReducer;
