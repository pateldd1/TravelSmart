  import React from 'react';
import { connect } from 'react-redux';
import { requestHome } from '../../actions/home_actions';
// import { receiveInput } from '../../actions/input_actions';
import HomeShow from './home_show';
import { withRouter } from 'react-router-dom';
import {updateModal} from '../../actions/modal_actions';
import {requestReviews} from '../../actions/review_actions';
// import { openModal } from '../../actions/modal_actions';
// import { clearErrors } from '../../actions/session_actions'
import { createReview } from '../../actions/review_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ homes, currentUser, reviews }, {match}) => { //remember the entities is nexted in home which is nested in state
  const homeid = match.params.homeid;
  const listing = homes[homeid];
  return {
    homeid,
    listing,
    currentUser,
    reviews
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    requestHome: id => dispatch(requestHome(id)),
    updateModal: (content, open) => dispatch(updateModal(content, open)),
    requestReviews: (id) => dispatch(requestReviews(id)),
    createReview: (review) => dispatch(createReview(review)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeShow));
