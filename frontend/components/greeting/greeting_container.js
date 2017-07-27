import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { updateModal } from '../../actions/modal_actions';

//could I also just decronstruct and write currentUser instead and not currentUser: currentUser
const mapStateToProps = ({currentUser}) => ({
  currentUser: currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  updateModal: (content, open) => dispatch(updateModal(content, open))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
