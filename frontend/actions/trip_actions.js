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

export const requestTrips = (visitorid) => dispatch => (
  APIUtil.requestTrips(visitorid).then(trips => (
    dispatch(receivedTrips(trips)))
  )
);

export const requestTrip = id => dispatch => (
  APIUtil.requestTrip(id).then(trip => (
    dispatch(receivedTrip(trip)))
  )
);

export const createTrip = trip => dispatch => (
  APIUtil.createTrip(trip).then(trip => (
    dispatch(receivedTrip(trip)))
  )
);

export const deleteTrip = trip => dispatch => (
  APIUtil.deleteTrip(trip).then(trips => (
    dispatch(receivedTrips(trips)))
  )
)
