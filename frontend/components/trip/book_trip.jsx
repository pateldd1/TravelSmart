import React from 'react';
import { withRouter } from 'react-router-dom';
//Take care of the bug where you refresh on this page and it gives you an error
class BookTrip extends React.Component {
  constructor(props) {
    super(props);
    const end = this.props.inputs.endDate;
    const beg = this.props.inputs.startDate;
    this.maxGuests = this.props.inputs.maxGuests;
    this.days = (end.diff(beg,"days"));
    this.cleaning = 40;
    this.nightPrice = Math.floor(this.props.listing.price/30);
    this.cost = this.nightPrice * this.days;
    this.service = 55;
    this.totalcost = this.cost + this.cleaning + this.service;
    this.state = {
      num_guests: this.props.inputs.num_guests,
      totalcost: this.totalcost
    };
    this.tripbegin = beg.format('MMM D, YYYY');
    this.tripend = end.format('MMM D, YYYY');
    this.handledropdownselection = this.handledropdownselection.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  componentDidUpdate() {
    if (!this.props.loggedIn) {
      this.props.history.push("/");
    }
  }

  //this.state.num_guests is originally a string I believe

  handleSubmission(e) {
    e.preventDefault();
    const trip = {
      home_id: this.props.homeid,
      start_date: this.props.inputs.startDate.toDate(),
      end_date: this.props.inputs.endDate.toDate(),
      totalcost: this.state.totalcost
    }
		this.props.createTrip({trip}).then(this.props.history.push(`/user/${this.props.currentUser.id}/trips`));
  };

  handledropdownselection(property) {
    return e => this.setState({ [property]: e.target.value });
  };

  guestsNumber(){
    const guestNumber = [<option key={1} value="1">1 guest</option>];
    let idx = 2;
    while (idx <= this.maxGuests) {
      guestNumber.push(
        <option key={idx} value={idx}>{idx} visitors</option>
      );
      idx++;
    }
    return guestNumber;
  }

  howmanyGuests() {
    return (
        <form className="tripthebookform">About Your Trip
          <br /><br />
          <div className="tosayhello">What is the purpose of your visit?
            <textarea rows="10" cols="10" className="hellosay" placeholder="to explore the city with some friends..."/>
          </div>
        <div className='containtheselection book-txt'>
          <label className="labelthebook"/>Who's coming?
          <div className='dropdownselections book-dd'>
            <select className='droptheselectdownward selectbookthedropdown' value={this.state.num_guests}
              onChange={this.handledropdownselection('num_guests')}>{this.guestsNumber()}</select>
            <span className="arrowthedropdown"></span>
          </div>
        </div>
        <button className="submitter tobooktripbutton" onClick={(e) => this.handleSubmission(e)}>
          <span className="btn-text">
            Book
          </span>
        </button>
      </form>
    );
  }

  leftsideviewoftrip() {
    const {inputs, listing} = this.props;
    //Test this out. I think that when you get host back from jbuilder, it is automatically an array
    return (
      <section>
        <div className="image-and-form">
          <img width="70" height="70" className="left-image" src={listing.image_url}/>
          {this.howmanyGuests()}
        </div>
        <table className="table table-bordered table-inverse">
          <thead>
            <tr>
              <th className="col-md-3"></th>
              <th className="col-md-3"></th>
              <th className="col-md-3"></th>
              <th className="col-md-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col-md-1">{listing.title}</td>
              <td className="col-md-1">Check-in: {this.tripbegin}</td>
              <td className="col-md-1">${this.nightPrice} x {this.days} nights</td>
              <td className="col-md-3">${this.cost}</td>
            </tr>
            <tr>
              <td className="col-md-1">{listing.roomtype}</td>
              <td className="col-md-1">Checkout:  {this.tripend}</td>
              <td className="col-md-1">Cleaning fee</td>
              <td className="col-md-1">${this.cleaning}</td>
            </tr>
            <tr>
              <td>{listing.address}</td>
              <td></td>
              <td>Service fee</td>
              <td>${this.service}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>${this.totalcost}</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }

  render() {
    //or we can do querystring.... regardless this has to be in preloadedState...

    //local storage - not stored in route or database; preloadedState...

    //Do this because we don't have a listing yet and then we render when we do have a listing.
    if (this.props.listing === undefined) {

      return (
        <div className="loading">requesting listing</div>
      );
    } else {

      return (
        <div>
          <section>
            {this.leftsideviewoftrip()}
          </section>
        </div>
      )
    }
  }
}

export default withRouter(BookTrip);
