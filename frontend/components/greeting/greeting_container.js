import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

//could I also just decronstruct and write currentUser instead and not currentUser: currentUser
const mapStateToProps = ({currentUser}) => ({
  currentUser: currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
