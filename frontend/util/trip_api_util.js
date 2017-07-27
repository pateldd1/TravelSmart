export const requestTrips = () => (
  $.ajax({
    method: 'GET',
    url: 'api/trips',
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
    data: trip
    // contentType: false,
    // processData: false,
  })
);

export const deleteTrip = tripId => (
  $.ajax({
    method: 'DELETE',
    url: `api/trips/${tripId}`,
  })
);
