import merge from 'lodash/merge';

import { UPDATE_MODAL } from '../actions/modal_actions';

const defaultModal = Object.freeze({
  content: null,
  open: false
});

const ModalReducer = ( state = defaultModal, action ) => {
  Object.freeze(state);
  if (action.type === UPDATE_MODAL ) {
    const newModal = { content: action.content, open: action.open };
    return merge({}, state, newModal);
  }
  else {
    return state;
  }
}

export default ModalReducer;
