import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import TripIndexItem from './trip_index_item';


class TripIndex extends React.Component {
  constructor(props) {
    super(props)
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

  render() {
    const { deleteTrip } = this.props;
    const tripsIndex = this.props.trips.map((trip, idx) => {
      return (
        <div className="trip-card-container" key={idx}>
          <TripIndexItem currentUser={this.props.currentUser} updateModal={this.props.updateModal} trip={trip} deleteTrip={deleteTrip}/>
        </div>
      )
    });

    if (tripsIndex.length > 0) {
      return (
        <div className="trip-slider">
        <span className="trip-tit">Your Travels</span>
          <div className="trip-cards">
          {tripsIndex}
          </div>
          <Link to="/" className="pinkButton book-btn trip-button">Book another trip!</Link>
        </div>
      )
    } else {
      return (
        <div className="trip-slider">
        <span className="trip-tit">Your Travels</span>
          <div className="trip-cards-txt">
          You have no upcoming trips.
          </div>
          <Link to="/" className="pinkButton book-btn trip-button">Book your First trip!</Link>
        </div>
      )
    }


  }
}

export default withRouter(TripIndex);
