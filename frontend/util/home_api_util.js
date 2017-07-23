export const requestHomes = data => (
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

export const createReview = data => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data
  })
);

export const createHome = data => (
  $.ajax({
    method: 'POST',
    url: 'api/homes',
    data
  })
);


//USE THESE AND GET RID OF JQUERY-RAILS WHEN YOU HAVE THE TIME TO FIGURE THIS OUT
// export const requestHomes = data => {
//   let http = new XMLHttpRequest(data);
//   console.log(http);
//   http.onreadystatechange = function(){
//     if(http.readyState == 4 && http.status == 200){
//       JSON.parse(http.response);
//     }
//   }
//   http.open("GET", "api/homes.json", true);
//   http.send();
// }
//
//
// export const requestHomes = filters => {
//   let http = new XMLHttpRequest(filters);
//   http.onreadystatechange = function(){
//     if(http.readyState == 4 && http.status == 200){
//       const myhomes = JSON.parse(http.response);
//       console.log(myhomes);
//       return dispatch(receivedHomes(myhomes));
//     }
//   }
//   http.open("GET", "api/homes", true);
//   http.send();
// }
