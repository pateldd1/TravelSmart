import React from 'react';
import { connect } from 'react-redux';
import { receiveInput } from '../../actions/input_actions';
import BookTrip from './book_trip';
import { withRouter } from 'react-router-dom';
import { requestHome } from '../../actions/home_actions';
import { createTrip } from '../../actions/trip_actions';

const mapStateToProps = ({currentUser, homes, inputs}, {match}) => {
  const homeid = match.params.homeid;
  const listing = homes[homeid];
  return {
    loggedIn: (Object.keys(currentUser).length === 0 ? false : true),
    currentUser: currentUser,
    homeid,
    listing,
    inputs
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTrip: trip => dispatch(createTrip(trip)),
    requestHome: id => dispatch(requestHome(id))
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BookTrip));
