import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';
import {updateModal} from '../../actions/modal_actions';

//Deconstructing session from the store
//We grab the errors from session.errors
const mapStateToProps = ({ currentUser, errors }) => {
  return {
    loggedIn: (Object.keys(currentUser).length === 0) ? false : true,
    errors
  }
}


//The withRouter is deconstructed after dispatch in the followin. You can get location, match, etc.
const mapDispatchToProps = (dispatch, { location }) => {
  //Take this from the Url since we got SessionForm withRouter -- returns either 'login' or 'signup'
  // const formType = location.pathname.slice(1);
  // const processForm = (props.formType === 'login') ? login : signup;
  return {
    // processForm: user => dispatch(processForm(user)),
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    updateModal: (content, open) => dispatch(updateModal(content, open))
    // formType
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionForm));
