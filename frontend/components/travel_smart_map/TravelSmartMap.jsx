import React from 'react';
import MarkerManager from '../../util/marker_manager';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});
// set the map to show SF
const mapOptions = {
  center: { lat: 37.73972, lng: -122.436297 }, // SF coordinates
  zoom: 13,
  // scrollwheel: false, // turn off scroll wheel
  styles: [
    { featureType: "water", stylers: [{hue: "#A4DDF5"}]}
  ],
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

class TravelSmartMap extends React.Component {
  constructor(props){
    super(props);
  }
  //refs will grab the DOM Node that we specified where this map is located. Once
  //this renders the map into the DOM Node location we initiated with refs
  //This will also update the markers to start out with

  //This.props.homes here will be the filtered homes that we have filtered from the database
  //based on our filters.
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    //NOT SURE ABOUT THE SINGLEHOME THING MAKES NO SENSE
    if (this.props.singleHome) {
      this.props.requestHome(this.props.homeid);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.homes);
    }
  }

  //When the map is idle, we will get the bounds and change the filters to
  //cause a re-rendering
  //event is the event that occurs within the google maps
  //We register the idle event and the click event on the map that will change the url
  //that will add the lat and lng to the url allowing a user to copy and paste the url easier(that's all that its useful for)
  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  //Click a marker on the map and it leads us to that home's show page
  handleMarkerClick(home) {
    this.props.history.push(`/homes/${home.id}`);
  }

  //Once the window has been seen with new bounds, component has updated, so we
  //will update the markers
  componentDidUpdate() {
    if (this.props.singleHome) {
      const targetHomeKey = Object.keys(this.props.homes)[0];
      const targetHome = this.props.homes[targetHomeKey];
      this.MarkerManager.updateMarkers([targetHome]);
    } else {
      this.MarkerManager.updateMarkers(this.props.homes);
    }
  }

  //simply place lat/lng in the url
  handleClick(coords) {
    this.props.history.push({
      pathname: '/',
      search: `lat=${coords.lat}&lng=${coords.lng})`
    })
  }

  //this is the DOM node that we will be grabbing to set this.map so we can
  //manipulate it
  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map } />
    );
  }

}

export default withRouter(TravelSmartMap);
