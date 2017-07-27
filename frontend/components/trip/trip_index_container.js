import React from 'react';
import { connect } from 'react-redux';
import TripIndex from './trip_index.jsx';
import { withRouter } from 'react-router-dom';
import { requestTrips, deleteTrip } from '../../actions/trip_actions';
import { selectAll } from '../../reducers/selectors.js';
import {updateModal} from '../../actions/modal_actions';

const mapStateToProps = ({trips, currentUser}) => {
  return {
    trips: selectAll(trips),
    currentUser: currentUser
  }
};

//you will want to delete a trip by the tripId and not by the trip itself because there is not reason to pass an entire trip through
//that is uneccessary data sent.

const mapDispatchToProps = (dispatch) => {
  return {
    requestTrips: () => dispatch(requestTrips()),
    deleteTrip: tripId => dispatch(deleteTrip(tripId)),
    updateModal: (content, open) => dispatch(updateModal(content, open))
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TripIndex));
