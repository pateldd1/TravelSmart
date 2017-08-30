import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import TripIndexItem from './trip_index_item';


class TripIndex extends React.Component {
  constructor(props) {
    super(props);
    this.allTrips = this.allTrips.bind(this);
  }

  componentDidMount() {
    this.props.requestTrips();
  }

  //We don't want someone who isn't logged in to be able to trips that belong to a user.
  componentDidUpdate() {
    if (Object.keys(this.props.currentUser).length === 0) {
      this.props.history.push("/");
    }
  }

  allTrips(){
    let theTrips = [];
    this.props.trips.forEach((trip, idx) => {
      theTrips.push(
        <div className="tripbox" key={idx}>
          <TripIndexItem currentUser={this.props.currentUser} trip={trip} deleteTrip={this.props.deleteTrip}/>
        </div>
      )
    })
    return theTrips;
  }

  render() {
    const { deleteTrip } = this.props;
    let allTheTrips = this.allTrips();
    if (allTheTrips.length === 0) {
      return (
        <div className="tripOverView">
          <span className="yourtravels">Your Travels</span>
          <div className="textfortrip">
            You need to travel more...
          </div>
          <Link to="/" className="tosubmitdarkblue book-btn trip-button">Book your First trip!</Link>
        </div>
      )
    } else {
      return (
        <div className="tripOverView">
          <span className="yourtravels">Your Travels</span>
          <div className="trip-cards">
            {allTheTrips}
          </div>
          <Link to="/" className="tosubmitdarkblue book-btn trip-button">Book another trip!</Link>
        </div>
      )
    }
  }
}

export default withRouter(TripIndex);
