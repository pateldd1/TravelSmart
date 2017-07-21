import React from 'react';
import { connect } from 'react-redux';
import { selectAll } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions.js';
import Search from './search';
import { requestHomes } from '../../actions/home_actions';

// { homes, filters } needs to be this later
const mapStateToProps = ({ homes, filters }) => {
  return {
    homes: selectAll(homes),
    // minHousing: filters.minHousing,
    // maxHousing: filters.maxHousing,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
  };
};

//I AM USING REQUEST ALL HOMES HERE FOR TESTING
const mapDispatchToProps = dispatch => {
  return {
  // requestHomes: (filters) => dispatch(requestHomes(filters)) ---- Instead of doing this here like you did
  //in home-index-container, dispatch this action in filter_actions after the filters have changed.

    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

//should also have mapDispatchToProps
