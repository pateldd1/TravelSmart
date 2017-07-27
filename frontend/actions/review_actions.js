//None of this is required since we don't want to put reviews in the store.
//Just ping the db every time you wanna get reviews

// import * as APIUtil from '../util/review_api_util'
// // export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
// export const RECEIVED_REVIEWS = 'RECEIVED_REVIEWS';
// // export const RECEIVE_DELETION = 'RECEIVE_DELETION';
//
// // export const receiveReview = review => ({
// //   type: RECEIVE_REVIEW,
// //   review
// // });
//
// export const receivedReviews = reviews => ({
//   type: RECEIVED_REVIEWS,
//   reviews
// });
//
// // export const receiveDeletedReview = id => ({
// //   type: RECEIVE_DELETION,
// //   id
// // });
//
// export const createReview = review => dispatch => (
//   APIUtil.createReview(review).then(review => (
//     dispatch(receivedReview(review)))
//   )
// );
//
// export const requestReviews = homeid => dispatch => (
//   APIUtil.requestReviews(homeid).then(reviews => (
//     dispatch(receivedReviews(reviews)))
//   )
// );

// export const updateReview = review => dispatch => (
//   APIUtil.updateReview(review).then(review => (
//     dispatch(receiveReview(review)))
//   )
// );

// export const deleteReview = id => dispatch => (
//   APIUtil.deleteReview(id).then(review => (
//     dispatch(receiveDeletedReview(review)))
//   )
// );
