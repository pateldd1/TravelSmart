import { requestHomes } from './home_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const SORT_FILTER = 'SORT_FILTER';
export const BOUNCE_FILTER = 'BOUNCE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const sortFilter = (boolean) => ({
  type: SORT_FILTER,
  boolean
});

export const bounceFilter = (homeid, boolean) => ({
  type: BOUNCE_FILTER,
  homeid,
  boolean
})

//This function is kinda confusing, but it means that we are going to requestHomes
//and we pass in dispatch because dispatch is going to be used from within the thunk
//action creator in home_actions

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return requestHomes(getState().filters)(dispatch);
};
