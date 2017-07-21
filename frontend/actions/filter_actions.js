import { requestHomes } from './home_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

//This function is kinda confusing, but it means that we are going to requestHomes
//and we pass in dispatch because dispatch is going to be used from within the thunk
//action creator in home_actions

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return requestHomes(getState().filters)(dispatch);
};
