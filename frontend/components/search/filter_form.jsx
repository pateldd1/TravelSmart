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

class PricingForm extends React.Component {
  constructor(props){
    super(props);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.registerCurrentRange = this.registerCurrentRange.bind(this);
    this.slide = this.slide.bind(this);
    this.state = {
      minslide: this.props.minPrice,
      maxslide: this.props.maxPrice
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

  slide(e){
    this.setState({minslide: e[0], maxslide: e[1]})
  }

  registerCurrentRange(e){
    this.range = e.slice(0);
  }

  render(){
    return(
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
    )
  }
}

export default PricingForm;

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
