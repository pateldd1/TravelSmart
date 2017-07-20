import React from 'react';
import { connect } from 'react-redux';
import { selectAll } from '../../reducers/selectors';
// import { updateFilter } from '../../actions/filter_actions.js';
import HomeIndex from './home_index';
import { requestHomes } from '../../actions/home_actions';

// { homes, filters } needs to be this later
const mapStateToProps = ({ homes }) => {
  return {
    homes: selectAll(homes),
    // minHousing: filters.minHousing,
    // maxHousing: filters.maxHousing,
    // minPrice: filters.minPrice,
    // maxPrice: filters.maxPrice,
  };
};

//I AM USING REQUEST ALL HOMES HERE FOR TESTING
const mapDispatchToProps = dispatch => {
  return {
    requestHomes: (filters) => dispatch(requestHomes(filters))
    // updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeIndex);

//should also have mapDispatchToProps
