import * as APIUtil from '../util/trip_api_util'

export const RECEIVED_TRIPS = 'RECEIVED_TRIPS';
export const RECEIVED_TRIP = 'RECEIVED_TRIP';
export const RECEIVED_DELETION = 'RECEIVED_DELETION';

export const receivedTrips = trips => ({
  type: RECEIVED_TRIPS,
  trips
});

export const receivedTrip = trip => ({
  type: RECEIVED_TRIP,
  trip
});

export const receivedDeletedTrip = trip => ({
  type: RECEIVED_DELETION,
  trip
});

export const requestTrips = () => dispatch => (
  APIUtil.requestTrips().then(trips => (
    dispatch(receivedTrips(trips)))
  )
);

//The reveived trip part of this is done so that we can get the trip into our store and then render from trip index container.

export const createTrip = trip => dispatch => (
  APIUtil.createTrip(trip).then(trip => (
    dispatch(receivedTrip(trip)))
  )
);

export const deleteTrip = tripId => dispatch => (
  APIUtil.deleteTrip(tripId).then(trips => (
    dispatch(receivedTrips(trips)))
  )
)
