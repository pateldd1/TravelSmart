//remember to change all of this into vanilla JS
//because requiring JQuery takes up too much space
//and is screwy
export const signup = (user) =>(
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user
  })
);

export const login = (user) =>(
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const logout = () =>(
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
