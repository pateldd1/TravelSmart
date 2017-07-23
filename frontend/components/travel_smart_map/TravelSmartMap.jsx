import React from 'react';
import MarkerManager from '../../util/marker_manager';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});
// set the map to show NY
const mapOptions = {
  center: { lat: 37.773972, lng: -122.431297 }, // SF coordinates
  zoom: 12,
  scrollwheel: false, // turn off scroll wheel
  styles: [
    { featureType: "water", stylers: [{hue: "#A4DDF5"}]}
  ]
};

class TravelSmartMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

    if (this.props.singleHome) {
      this.props.requestHome(this.props.homeid);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.homes);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      console.log("here");
      const { north, south, east, west } = this.map.getBounds().toJSON
      console.log(this.map);
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      console.log(coords);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(home) {
    this.props.history.push(`homes/${home.id}`);
  }

  componentDidUpdate() {
    if (this.props.singleHome) {
      const targetHomeKey = Object.keys(this.props.homes)[0];
      const targetHome = this.props.homes[targetHomeKey];
      this.MarkerManager.updateMarkers([targetHome]);
    } else {
      this.MarkerManager.updateMarkers(this.props.homes);
    }
  }

  handleClick(coords) {
    console.log(coords);
    this.props.history.push({
      pathname: '/homes',
      search: `lat=${coords.lat}&lng=${coords.lng})`
    })
  }

  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map } />
    );
  }

}

export default withRouter(TravelSmartMap);
