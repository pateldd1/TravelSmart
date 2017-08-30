import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import * as APIUtil from '../../util/review_api_util';
//We are getting all of the currentUsers trips and the homes of these trips by making associations
//between the trip and the currentUser by querying the db in the backend in trip controller
//for all the trips with the current user's userId and then we do .includes(:homes) so that we
//can prevent from having to do N+1 queries on the homes and we get entire home objects by from jbuilder
//we use these home objects and their ids to make a link back to the home. Since we have changed our routes,
//we no longer have these home ids anymore and must use this logic to get these ids.This could have also been
//done by making an assocation in which we have all of the current Users homes through trips and we can make this
//called visited homes and make the trips indexe container subscribe to currentUser

class TripIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteTrip(this.props.trip.id);
  }

  render() {
    const {trip} = this.props;
    return (
      <div className={this.props.act ? "item active" : "item"}>
        <img src={trip.image_url} />
        <div className="carousel-caption">
          <Link to={`/homes/${trip.home.id}`} >
            <h3 className="caro">{trip.home.title}</h3>
          </Link>
          <p className="caro">From {trip.start_date} to {trip.end_date}</p>
          <p className="caro">{trip.home.address}</p>
          <p className="caro">${trip.totalcost} was paid</p>
          <p className="caroline" onClick={this.handleClick}>Click to Delete Trip</p>
        </div>
     </div>
    )
    //the user has many trips and this join table association was made
    //the trip belongs to a home by home_id and this association was made. the home is just an object.
  }
}

export default TripIndexItem;




// return (
//   <div className='trip-card'>
//     <div className='layer-for-trip'>
//       <div className='tripicturer'>
//         <Link to={`/homes/${trip.home.id}`} >
//           <img className='image-of-trip' src={trip.image_url}/>
//         </Link>
//       </div>
//       <div className='textfortrip'>
//
//         <div className='timefortrip'>
//           <div className='boxsched'>
//             <div className='the-box-address'>{trip.home.title}</div>
//
//             <div className="the-top-space">{trip.start_date} to {trip.end_date}</div>
//             <div className="the-top-space">{trip.home.address}</div>
//           </div>
//         </div>
//
//         <div className="divider-for-trip"/>
//         <div className="trip-make-action">
//
//         </div>
//         <div className='trip-make-action'>
//           <div className='occurrences-for-trip'>${trip.totalcost} was Paid</div>
//         </div>
//
//         <div className="divider-for-trip"/>
//         <div className="trip-make-action">
//           <div className='occurrences-for-trip cancel-trip' onClick={this.handleClick}>Remove / Cancel</div>
//         </div>
//       </div>
//     </div>
//   </div>
// )
