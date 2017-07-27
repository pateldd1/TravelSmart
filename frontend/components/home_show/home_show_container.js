  import React from 'react';
import { connect } from 'react-redux';
import { requestHome } from '../../actions/home_actions';
// import { receiveInput } from '../../actions/input_actions';
import HomeShow from './home_show';
import { withRouter } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';
// import { clearErrors } from '../../actions/session_actions'
// import { createReview, fetchReviews } from '../../actions/review_actions';

const mapStateToProps = ({ homes }, {match}) => { //remember the entities is nexted in home which is nested in state
  const homeid = match.params.homeid;
  const listing = homes[homeid];
  return {
    homeid,
    listing,
  }
}

// All of This belongs in a sub-container
// currentUser: currentUser,
// receiveInput: input => dispatch(receiveInput(input)),
// clearErrors: () => dispatch(clearErrors()),
// openModal: (component) => dispatch(openModal(component)),
// createReview: (review) => dispatch(createReview(review)),

const mapDispatchToProps = (dispatch) => {
  return {
    requestHome: id => dispatch(requestHome(id)),

    // Haven't gotten to the reviews yet
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow));
