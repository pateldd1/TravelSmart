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
    this.state = {
      minslide: this.props.minPrice,
      maxslide: this.props.maxPrice,
      dropDownRoomsShown: "roomhide"
    }
  }

  toggleMenu(){
    if ( this.state.dropDownRoomsShown === "roomhide")
    {
      this.setState({dropDownRoomsShown: "roomhide show"});
    }
    else {
      this.setState({dropDownRoomsShown: "roomhide"});
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
      <div className="dropdown">
        <a className="roomtype-button" onClick={this.toggleMenu}>Room-Type</a>
        <div className={this.state.dropDownRoomsShown}>
          <a className="drop-li" onClick={()=>this.props.updateFilter("roomtype", "Shared Room")}>Shared Room</a>
          <a className="drop-li" onClick={()=>this.props.updateFilter("roomtype", "Private Room")}>Private Room</a>
          <a className="drop-li" onClick={()=>this.props.updateFilter("roomtype", "Entire Home")}>Entire Home</a>
        </div>
      </div>
    )
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
          <a className="filter-button">More Filters</a>
          <a className="filter-button">Toggle Price Sort</a>
        </div>
      </div>
    )
  }
}

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
