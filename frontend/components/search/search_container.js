import React from 'react';
import { connect } from 'react-redux';
import { selectAll } from '../../reducers/selectors';
import { updateFilter, sortFilter, bounceFilter } from '../../actions/filter_actions.js';
import Search from './search';
import { requestHomes } from '../../actions/home_actions';

// { homes, filters } needs to be this later
const mapStateToProps = ({ homes, filters }) => {
  return {
    homes: selectAll(homes),
    roomtype: filters.roomtype,
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
    sorted: filters.sorted,
    bouncingMarker: filters.bouncingMarker
  };
};

//I AM USING REQUEST ALL HOMES HERE FOR TESTING
const mapDispatchToProps = dispatch => {
  return {
  //in home-index-container, dispatch this action in filter_actions after the filters have changed.

    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    bounceFilter: (homeid, boolean) => dispatch(bounceFilter(homeid, boolean)),
    sortFilter: (boolean) => dispatch(sortFilter(boolean))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

//should also have mapDispatchToProps
