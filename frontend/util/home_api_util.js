export const requesHomes = data => (
  $.ajax({
    method: 'GET',
    url: 'api/homes',
    data
  })
);

export const requestHome = id => (
  $.ajax({
    method: 'GET',
    url: `api/homes/${id}`
  })
);

// export const createReview = data => (
//   $.ajax({
//     method: 'POST',
//     url: 'api/reviews',
//     data
//   })
// );

export const createHome = data => (
  $.ajax({
    method: 'POST',
    url: 'api/homes',
    data
  })
);
