import { connect } from 'react-redux';
import Modal from './modal';

const mapStateToProps = ( { modality } ) => {
  return {
    content: modality.content,
    open: modality.open
  }
}

export default connect(
  mapStateToProps,
  null
)(Modal);
