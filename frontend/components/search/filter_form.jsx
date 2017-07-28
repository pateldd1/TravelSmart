import React from 'react';
import ReactSlider from 'react-slider'
//This is very important, there is a change hangler that is placed on
//the PricingForm. When there is a change in the input, the currentTarget
//is the thing that the event handler was placed on, the input field. The filters
//are then updated and the long process ensues that results in new homes being rendered.
//I Can change this to be an actually good filter bar instead of this using React-bar

// const handleChange = (filter, updateFilter) => e => (
//   updateFilter(filter, e.currentTarget.value)
// );
//
// export const PricingForm = ({ minPrice, maxPrice, updateFilter }) => (
//   <div className="filter-col">
//     <label>Min. Price ($):</label>
//     <input className="filter-container
//       type="number"
//       value={minPrice ? minPrice : 0}
//       onChange={handleChange('minPrice', updateFilter)}
//     />
//     <label>Max. Price ($):</label>
//     <input className="filter-container"
//       type="number"
//       value={maxPrice ? maxPrice : 0}
//       onChange={handleChange('maxPrice', updateFilter)}
//     />
//   </div>
// );

class FilterForm extends React.Component {
  constructor(props){
    super(props);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.registerCurrentRange = this.registerCurrentRange.bind(this);
    this.slide = this.slide.bind(this);
    this.dropDownRooms = this.dropDownRooms.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.detoggleMenu = this.detoggleMenu.bind(this);
    this.remainOpen = this.remainOpen.bind(this);
    this.close = this.close.bind(this)
    this.togglePriceSort = this.togglePriceSort.bind(this);
    this.state = {
      minslide: this.props.minPrice,
      maxslide: this.props.maxPrice,
      dropDownRoomsShown: "roomhide",
      priceBool: false
    }
  }

  detoggleMenu(){
    this.setState({dropDownRoomsShown: "roomhide show"});
  }

  toggleMenu(){
    this.setState({dropDownRoomsShown: "roomhide"})
  }

  togglePriceSort(){
    if ( this.state.priceBool === false )
    {
      this.props.sortFilter(true);
      this.setState({priceBool: true});
    }
    else {
      this.props.sortFilter(false);
      this.setState({priceBool: false});
    }
  }

  handlePriceChange(e) {
    if (e[0] != this.props.minPrice)
    {
      this.props.updateFilter('minPrice',e[0]);
    }
    else if(e[1] != this.props.maxPrice)
    {
      this.props.updateFilter('maxPrice',e[1])
    }
    else
    {
      return;
    };
  }

  dropDownRooms(){
    return(
      <div className="dropdown" onMouseOver={this.detoggleMenu} onMouseLeave={this.toggleMenu}>
        <a className="roomtype-button" >Room-Type</a>
        <div className={this.state.dropDownRoomsShown}>
          <a className="drop-li" onClick={()=>this.props.updateFilter("roomtype", "alltypes")}>All Types</a>
          <a className="drop-li" onClick={()=>this.props.updateFilter("roomtype", "Shared Room")}>Shared Room</a>
          <a className="drop-li" onClick={()=>this.props.updateFilter("roomtype", "Private Room")}>Private Room</a>
          <a className="drop-li" onClick={()=>this.props.updateFilter("roomtype", "Entire Home")}>Entire Home</a>
        </div>
      </div>
    )
  }

  remainOpen(){
    this.setState({dropDownRoomsShown: "roomhide show"});
  }

  close(){
    this.setState({dropDownRoomsShown: "roomhide"});
  }

  slide(e){
    this.setState({minslide: e[0], maxslide: e[1]})
  }

  registerCurrentRange(e){
    this.range = e.slice(0);
  }

  render(){
    return(
      <div>
      <div className="price-filter-container">
        <div className="price-filter">
          <div className="left-price-filter">
            <label>Price Range:  </label>
          </div>
          <div className="right-price-filter">
            <ReactSlider withBars
              value={[this.state.minslide, this.state.maxslide]}
              min={10}
              max={4010}
              step={1}
              minDistance={2}
              onAfterChange={this.handlePriceChange}
              onChange={this.slide}/>
            <div className="min-max-container">
              <p>${this.state.minslide}</p>
              <p>${this.state.maxslide}+</p>
            </div>
          </div>

        </div>
      </div>
        <div className="more-filters">
          {this.dropDownRooms()}
          <a className="filter-button" onClick={this.togglePriceSort}>Price Sorter</a>
        </div>
      </div>
    )
  }
}
//WORK ON THIS LATER AND GET THE FILTERS TO FILTER BY BEDS/ETC.
// <a className="filter-button">More Filters</a>

export default FilterForm;

// export const HousingForm = ({ minHousing, maxHousing, updateFilter }) => (
//   <div className="filter-col">
//     <label>Min. Guests:</label>
//     <input className="filter-container"
//       type="number"
//       value={minHousing ? minHousing : 1}
//       onChange={handleChange('minHousing', updateFilter)}
//     />
//     <label>Max. Guests:</label>
//     <input className="filter-container"
//       type="number"
//       value={maxHousing ? maxHousing : 12}
//       onChange={handleChange('maxHousing', updateFilter)}
//     />
//   </div>
// );
