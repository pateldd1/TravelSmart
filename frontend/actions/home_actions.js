import * as APIUtil from '../util/home_api_util'

export const RECEIVED_HOMES = 'RECEIVED_HOMES';
// export const RECEIVED_HOMES = 'RECEIVED_HOMES';
// export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receivedHomes = homes => ({
  type: RECEIVED_HOMES,
  homes
});

// export const receivedHome = home => ({
//   type: RECEIVED_HOME,
//   home
// });

// export const receiveReview = review => ({
//   type: RECEIVE_REVIEW,
//   review
// });

// export const createReview = review => dispatch => (
//   APIUtil.createReview(review).then(review => (
//     dispatch(receiveReview(review))
//   ))
// );

//THERE SHOULD BE FILTERS PASSED IN BECAUSE WE WILL USE FILTER TO SELECT CERTAIN THINGS

export const requestHomes = (filters) => dispatch => (
  APIUtil.requestHomes(filters).then(homes => (
    dispatch(receivedHomes(homes))
  ))
);

// export const requestHome = id => dispatch => (
//   APIUtil.requestHome(id).then(home => (
//     dispatch(receivedHome(home))
//   ))
// );
//
// export const createHome = home => dispatch => (
//   APIUtil.createHome(home).then(home => (
//     dispatch(receivedHome(home))
//   ))
// );
