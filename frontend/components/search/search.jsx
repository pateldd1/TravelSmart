import React from 'react';
// import TravelSmartMap from '../travel_smart_map/TravelSmartMap';
import HomeIndex from '../home_index/home_index';
// import { HousingForm, PricingForm } from './filter_form';
import PricingForm from './filter_form';

class Search extends React.Component {

//I Can change this to be an actually good filter bar instead of this using React-bar

//Lets pass down updateFilter to the PricingForm so that it can do an onChange
//dispatch updateFilter action that will go to change the state of filters
//and then come back through SearchContainer and cause a re-rendering of PricingForm
//and then from pricing_actions, we will dispatch an AJAX request to requestHomes
//giving me all the new homes I need based on my filters.
//Since min price and max price are changing this is what we are using to filter

  filterBar() {
    return (
      <div className="filter-bar-index">
        <PricingForm
        minPrice={this.props.minPrice}
        maxPrice={this.props.maxPrice}
        updateFilter={this.props.updateFilter}
        />

      </div>
    )
  };

  //This component will receive props of the new homes every time the filters have changed
  //This will cause a change in BOTH THE HOME MAP AND THE HOME index.

  //Implement this later
  // <TravelSmartMap homes={this.props.homes} updateFilter={this.props.updateFilter}  />

  render() {
    return (
      <section className='index-container'>
      {this.filterBar()}
      <HomeIndex homes={this.props.homes} />
      </section>
    );
  }
};

export default Search;


// Maybe Use this Later

// <HousingForm
//   minHousing={this.props.minHousing}
//   maxHousing={this.props.maxHousing}
//   updateFilter={this.props.updateFilter}
//   />
