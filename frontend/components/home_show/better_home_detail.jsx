import React from 'react';
import Reviews from '../review/review';
import ReviewForm from '../review/review_form';

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

class BetterHomeDetail extends React.Component {
  //This will give random values to the rating, wifi, prop_type etc. so that
  //We can provide some sort of user experience to the app.
  constructor(props){
    super(props);
    this.rating = [1,2,3,4,5].randomElement();
    this.wifi = [true, false].randomElement();
    this.prop_type = ["House", "Apartment", "Condo"].randomElement();
    this.tv = [true, false].randomElement();
    this.ac = [true, false].randomElement();
    this.kitchen = [true, false].randomElement();
    this.num_guests = [1,2,3,4,5,6,7,8].randomElement();
  }

  render(){
    return (
      <div>
        <div className="rm-detail-title bottomdetailrm">
          <div>
            <h2 className="listingsnomer">{this.props.listing.title}</h2>
            <p className="listingsaddr">{this.props.listing.address}</p>
          </div>
        </div>

        <div className="bottomdetailrm theiconstoshow">
          <div className="theroomicon">
            <i className="icontyperoom sicon"></i>
            <p>{this.props.listing.roomtype}</p>
          </div>

          <div className="peopleiconroom">
            <i className="icontypeguests sicon"></i>
            <p>{this.num_guests} Guests</p>
          </div>

          <div className="thedooricon">
            <i className="icontypebedrooms sicon"></i>
            <p>{this.props.listing.space.bedrooms} Bedrooms</p>
          </div>

          <div className="bediconrooms">
            <i className="the-bed-icon sicon"></i>
            <p>{this.props.listing.space.beds} Beds</p>
          </div>
        </div>

        <div className="bottomdetailrm refundrm">

          <div>
            <strong>100% refundable</strong>
          </div>
        </div>

        <div className="bottomdetailrm">
          <h3 className="subtitles">About this listing</h3>
          <p className="addrdescript">{this.props.listing.description}</p>
        </div>

        <div className="aboxofdetails">
          <div className="box-title">
            <h4 className="subtitles">The space</h4>
          </div>
          <div className="box-info thedetailstoshow">
            <ul>
              <li>Bedrooms: <strong>{this.props.listing.space.bedrooms}</strong></li>
              <br />
              <li>Bathrooms: <strong>{this.props.listing.space.bathrooms}</strong></li>
              <br />
              <li>Beds: <strong>{this.props.listing.space.beds}</strong></li>
            </ul>
            <ul>
              <li>Check In: <strong>Anytime after 3PM</strong></li>
              <br />
              <li>Check Out: <strong>11AM</strong></li>
              <br />
              <li>Property type: <strong>{this.prop_type}</strong></li>
              <br />
              <li>Room type: <strong>{this.props.listing.roomtype}</strong></li>
            </ul>
          </div>
        </div>

        <div className="aboxofdetails">
          <div className="box-title">
            <h4 className="subtitles">Amenities</h4>
          </div>
          <div className="box-info thedetailstoshow rm-detail-amen">
            <ul>
              <li className={this.tv ? "" : "no-amen"}>TV   {this.tv ? <i className="fa fa-television" aria-hidden="true"></i> : ""}</li>
              <li className={this.kitchen ? "" : "no-amen"}> Kitchen   {this.kitchen ? <i className="fa fa-cutlery" aria-hidden="true"></i> : ""}</li>
              <li className={this.wifi ? "" : "no-amen"}>Wireless Internet   {this.wifi ? <i className="fa fa-wifi" aria-hidden="true"></i> : ""}</li>
              <li className={this.ac ? "" : "no-amen"}>Air conditioning   {this.ac ? <i className="fa fa-snowflake-o" aria-hidden="true"></i> : ""}</li>
            </ul>

            <ul className="amenitit">
              <li className={this.ac ? "" : "no-amen"}>Bathtub   {this.ac ? <i className="fa fa-bath" aria-hidden="true"></i> : ""}</li>
              <li className={this.tv ? "" : "no-amen"}>Game console   {this.tv ? <i className="fa fa-gamepad" aria-hidden="true"></i> : ""}</li>
              <li className={this.kitchen ? "" : "no-amen"}>Indoor fireplace   {this.kitchen ? <i className="fa fa-fire" aria-hidden="true"></i> : ""}</li>
              <li className={this.wifi ? "" : "no-amen"}>Pets allowed   {this.wifi ? <i className="fa fa-paw" aria-hidden="true"></i> : ""}</li>
            </ul>
          </div>
        </div>

        <div className="aboxofdetails">
          <div className="box-title">
            <h4 className="subtitles">Prices</h4>
          </div>
          <div className="box-info">
            <ul>
              <li>Extra residents: <strong>No Charge</strong></li>
              <br />
              <li>Weekly Discount: <strong>15%</strong></li>
              <br />
              <li>Cleaning Fee: <strong>${ Math.floor(this.props.listing.price / 8) }</strong></li>
            </ul>
            <div className="thepricetodisclaim">
              <strong className="declarationoftravel">Always Travel Smart</strong>
              <p className="traveldeclare">To protect your payment, only transfer money or communicate through the TravelSmart website</p>
            </div>
          </div>
        </div>

        <div className="aboxofdetails">
          <div className="box-title">
            <h4 className="subtitles">Safety features</h4>
          </div>
          <div className="box-info">
            <ul>
              <li>Smoke detector</li>
              <li>Carbon monoxide detector</li>
            </ul>
          </div>
        </div>

        <div className="aboxofdetails">
          <div className="box-title">
            <h4 className="subtitles">House Rules</h4>
          </div>
          <div className="box-info">
            <p>None</p>
          </div>
        </div>
        <br />
        <h2 className="subtitles">Reviews</h2>
        <br />
        <Reviews reviews={this.props.reviews} requestReviews={this.props.requestReviews} listing={this.props.listing} />
        <div className='darkblu' onClick={() => this.props.updateModal(<ReviewForm createReview={this.props.createReview} currentUser={this.props.currentUser} updateModal={this.props.updateModal} homeid={this.props.listing.id}/>, true)}>Write a Review</div>
        <br /><br />
      </div>
    );
  }
};

export default BetterHomeDetail;
