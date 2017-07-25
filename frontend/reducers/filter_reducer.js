import merge from 'lodash/merge';

import { UPDATE_FILTER, SORT_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},
  // minHousing: 1,
  // maxHousing: 12,
  roomtype: undefined,
  minPrice: 10,
  maxPrice: 4010,
  sorted: false
});
//Min price and maxprice is only gonna change one at a time because of a slider
//bounds is the latitude and longitude. (User returns longitude like long and filters have lng)
//The action.filter is what key we are filtering by and action.value is the new value of this key

const FilterReducer = (state = defaultFilters, action) => {
  Object.freeze(state)
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return merge({}, state, newFilter);
  }
  else if(action.type === SORT_FILTER){
    return merge({}, state, {sorted: action.boolean})
  }
  else {
    return state;
  }
};

export default FilterReducer;
