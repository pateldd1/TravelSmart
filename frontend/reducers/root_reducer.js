import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import HomeReducer from './home_reducer';

const rootReducer = combineReducers({
  currentUser: SessionReducer,
  errors: ErrorReducer,
  homes: HomeReducer
});

export default rootReducer;
