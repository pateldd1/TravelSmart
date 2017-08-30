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
    let indicators = [];
    this.props.trips.forEach((trip, idx) => {
      if ( idx === 0 )
      {
        indicators.push(
          <li key={idx} data-target="#myCarousel" data-slide-to={idx} className="active"></li>
        )
        theTrips.push(
          <TripIndexItem key={idx} act={true} currentUser={this.props.currentUser} trip={trip} deleteTrip={this.props.deleteTrip}/>
        )
      }
      else{
        indicators.push(
          <li key={idx} data-target="#myCarousel" data-slide-to={idx}></li>
        )
        theTrips.push(
          <TripIndexItem key={idx} act={false} currentUser={this.props.currentUser} trip={trip} deleteTrip={this.props.deleteTrip}/>
        )
      }
    })
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {indicators}
        </ol>
        <div className="carousel-inner">
          {theTrips}
        </div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }

  render() {
    const { deleteTrip } = this.props;
    let allTheTrips = this.allTrips();
    if (allTheTrips.length === 0) {
      return (
        <div className="tripOverView">
          <div className="textfortrip">
            You need to travel more...
          </div>
          <Link to="/" className="tosubmitdarkblue book-btn trip-button">Book your First trip!</Link>
        </div>
      )
    } else {
      return (
        <div className="tripOverView">
            {allTheTrips}
          <Link to="/" className="tosubmitdarkblue book-btn trip-button">Book another trip!</Link>
        </div>
      )
    }
  }
}

//
// <div id="myCarousel" class="carousel slide" data-ride="carousel">
//   <!-- Indicators -->
//   <ol class="carousel-indicators">
//     <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//     <li data-target="#myCarousel" data-slide-to="1"></li>
//     <li data-target="#myCarousel" data-slide-to="2"></li>
//   </ol>
//
//   <!-- Wrapper for slides -->
//   <div class="carousel-inner">
//     <div class="item active">
//       <img src="la.jpg" alt="Chania">
//       <div class="carousel-caption">
//         <h3>Los Angeles</h3>
//         <p>LA is always so much fun!</p>
//       </div>
//     </div>
//
//     <div class="item">
//       <img src="chicago.jpg" alt="Chicago">
//       <div class="carousel-caption">
//         <h3>Chicago</h3>
//         <p>Thank you, Chicago!</p>
//       </div>
//     </div>
//
//     <div class="item">
//       <img src="ny.jpg" alt="New York">
//       <div class="carousel-caption">
//         <h3>New York</h3>
//         <p>We love the Big Apple!</p>
//       </div>
//     </div>
//   </div>
//
//   <!-- Left and right controls -->
//   <a class="left carousel-control" href="#myCarousel" data-slide="prev">
//     <span class="glyphicon glyphicon-chevron-left"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="right carousel-control" href="#myCarousel" data-slide="next">
//     <span class="glyphicon glyphicon-chevron-right"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>

export default withRouter(TripIndex);
