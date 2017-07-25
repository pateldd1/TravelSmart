import { merge } from 'lodash';

import {
  RECEIVED_TRIPS,
  RECEIVED_TRIP,
  RECEIVED_DELETION,
} from '../actions/trip_actions';

const defaultState = {};


const TripReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVED_TRIP:

      newState = merge({}, state, {[action.trip.id]: action.trip})
      return newState;

    case RECEIVED_TRIPS:
      return action.trips;

    case RECEIVED_DELETION:
      newState = Object.assign({}, state);
      delete newState[action.trip.id];
      return newState;
    default:
      return state;
  }
};
