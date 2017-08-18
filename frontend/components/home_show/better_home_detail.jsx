import React from 'react';
import Reviews from '../review/review';
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

class BetterHomeDetail extends React.Component {
  constructor(props){
    super(props);
    this.rating = [1,2,3,4,5].randomElement();
    this.prop_type = ["House", "Apartment", "Condo"].randomElement();
    this.wifi = [true, false].randomElement();
    this.ac = [true, false].randomElement();
    this.kitchen = [true, false].randomElement();
    this.tv = [true, false].randomElement();
    this.num_guests = [1,2,3,4,5,6,7,8].randomElement();
  }

  render(){
    return (
      <div>
        <div className="rm-detail-title rm-detail-bottom">
          <div>
            <h2 className="listingsnomer">{this.props.listing.title}</h2>
            <p className="listingsaddr">{this.props.listing.address}</p>
          </div>
        </div>

        <div className="rm-detail-bottom theiconstoshow">
          <div className="room-icon-item">
            <i className="room-type-icon sicon"></i>
            <p>{this.props.listing.roomtype}</p>
          </div>

          <div className="room-icon-people">
            <i className="guests-type-icon sicon"></i>
            <p>{this.num_guests} Guests</p>
          </div>

          <div className="room-icon-door">
            <i className="bedrooms-type-icon sicon"></i>
            <p>{this.props.listing.space.bedrooms} Bedrooms</p>
          </div>

          <div className="room-icon-bed">
            <i className="beds-icon sicon"></i>
            <p>{this.props.listing.space.beds} Beds</p>
          </div>
        </div>

        <div className="rm-detail-bottom rm-refund">

          <div>
            <strong>100% refundable</strong>
          </div>
        </div>

        <div className="rm-detail-bottom">
          <h3>About this listing</h3>
          <p className="addrdescript">{this.props.listing.description}</p>
        </div>

        <div className="aboxofdetails">
          <div className="box-title">
            <h4>The space</h4>
          </div>
          <div className="box-info thedetailstoshow">
            <ul>
              <li>Bathrooms: <strong>{this.props.listing.space.bathrooms}</strong></li>
              <li>Bedrooms: <strong>{this.props.listing.space.bedrooms}</strong></li>
              <li>Beds: <strong>{this.props.listing.space.beds}</strong></li>
            </ul>
            <ul>
              <li>Check In: <strong>Anytime after 3PM</strong></li>
              <li>Check Out: <strong>11AM</strong></li>
              <li>Property type: <strong>{this.prop_type}</strong></li>
              <li>Room type: <strong>{this.props.listing.roomtype}</strong></li>
            </ul>
          </div>
        </div>

        <div className="aboxofdetails">
          <div className="box-title">
            <h4>Amenities</h4>
          </div>
          <div className="box-info thedetailstoshow rm-detail-amen">
            <ul>
              <li className={this.wifi ? "" : "no-amen"}>{this.wifi ? <i className="fa fa-wifi" aria-hidden="true"></i> : ""} Wireless Internet</li>
              <li className={this.kitchen ? "" : "no-amen"}>{this.kitchen ? <i className="fa fa-cutlery" aria-hidden="true"></i> : ""} Kitchen</li>
              <li className={this.ac ? "" : "no-amen"}>{this.ac ? <i className="fa fa-snowflake-o" aria-hidden="true"></i> : ""} Air conditioning</li>
              <li className={this.tv ? "" : "no-amen"}>{this.tv ? <i className="fa fa-television" aria-hidden="true"></i> : ""} TV</li>
            </ul>

            <ul>
              <li className={this.wifi ? "" : "no-amen"}>{this.wifi ? <i className="fa fa-paw" aria-hidden="true"></i> : ""} Pets allowed</li>
              <li className={this.kitchen ? "" : "no-amen"}>{this.kitchen ? <i className="fa fa-fire" aria-hidden="true"></i> : ""} Indoor fireplace</li>
              <li className={this.ac ? "" : "no-amen"}>{this.ac ? <i className="fa fa-bath" aria-hidden="true"></i> : ""} Bathtub</li>
              <li className={this.tv ? "" : "no-amen"}>{this.tv ? <i className="fa fa-gamepad" aria-hidden="true"></i> : ""} Game console</li>
            </ul>
          </div>
        </div>

        <div className="aboxofdetails">
          <div className="box-title">
            <h4>Prices</h4>
          </div>
          <div className="box-info">
            <ul>
              <li>Extra people: <strong>No Charge</strong></li>
              <li>Weekly Discount: <strong>10%</strong></li>
              <li>Cleaning Fee: <strong>${ Math.floor(this.props.listing.price / 8) }</strong></li>
            </ul>
            <div className="thepricetodisclaim">
              <strong>Always Travel Smart</strong>
              <p>To protect your payment, never transfer money or communicate outside of the TravelSmart website or app.</p>
            </div>
          </div>
        </div>

        <div className="aboxofdetails">
          <div className="box-title">
            <h4>Description</h4>
          </div>
        </div>

        <div className="aboxofdetails">
          <div className="box-title">
            <h4>Safety features</h4>
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
            <h4>House Rules</h4>
          </div>
          <div className="box-info">
            <p>None</p>
          </div>
        </div>
        <br />
        <h2>Reviews</h2>
        <br />
        <Reviews listing={this.props.listing} />
      </div>
    );
  }
};

export default BetterHomeDetail;
