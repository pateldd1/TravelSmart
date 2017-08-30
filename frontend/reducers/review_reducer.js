import { merge } from 'lodash';

import {
  RECEIVED_REVIEWS,
  RECEIVED_REVIEW
} from '../actions/review_actions';

const defaultState = [];


const ReviewReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVED_REVIEWS:
      return action.reviews;
    case RECEIVED_REVIEW:
      return state.concat(action.review);
    default:
      return state;
  }
};

export default ReviewReducer;
