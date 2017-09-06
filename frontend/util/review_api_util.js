export const requestReviews = home_id => (
  $.ajax({
    method: 'GET',
    url: 'api/reviews',
    data: { home_id }
  })
);

//This pretty much just makes {review: review} and reviews controller can use it as review_params
export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);
