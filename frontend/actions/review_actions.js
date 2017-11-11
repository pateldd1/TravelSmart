import * as APIUtil from '../util/review_api_util';

export const RECEIVED_REVIEWS = 'RECEIVED_REVIEWS';
export const RECEIVED_REVIEW = 'RECEIVED_REVIEW';

export const receivedReviews = reviews => ({
  type: RECEIVED_REVIEWS,
  reviews
});

export const receivedReview = review => ({
  type: RECEIVED_REVIEW,
  review
});


export const requestReviews = (id) => dispatch => (
  APIUtil.requestReviews(id).then(reviews => (
    dispatch(receivedReviews(reviews)))
  )
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receivedReview(review)))
  )
);
