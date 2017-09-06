import React from 'react';
import { connect } from 'react-redux';
import BookItNow from './book_it_now';
import { receiveInput } from '../../actions/input_actions';
import { clearErrors } from '../../actions/error_actions';
import {updateModal} from '../../actions/modal_actions';

//We give book it now the currentUser because if there is none, then
//we redirect to sign up and don't let them book.

//We already have listing because listing was passed down as props

//There may be a problem here if you didn't deconstruct right

const mapStateToProps = ({ currentUser }) => {
  return {currentUser: currentUser};
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveInput: input => dispatch(receiveInput(input)),
    clearErrors: () => dispatch(clearErrors()),
    updateModal: (content, open) => dispatch(updateModal(content, open))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookItNow);
