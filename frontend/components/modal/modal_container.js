import { connect } from 'react-redux';
import Modal from './modal';
import {updateModal} from '../../actions/modal_actions';

const mapStateToProps = ( { modality } ) => {
  return {
    content: modality.content,
    open: modality.open
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateModal: (content, open) => dispatch(updateModal(content,open))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
