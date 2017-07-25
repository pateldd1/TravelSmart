export const requestTrips = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/trips',
    data,
  })
);

export const requestTrip = id => (
  $.ajax({
    method: 'GET',
    url: `api/trips/${id}`,
  })
);

export const createTrip = trip => (
  $.ajax({
    method: 'POST',
    url: 'api/trips',
    data: trip,
    // contentType: false,
    // processData: false,
  })
);

export const deleteTrip = trip => (
  $.ajax({
    method: 'DELETE',
    url: `api/trips/${trip.id}`,
  })
);
