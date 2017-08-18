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
  // componentWillMount(){
  //
  // }
  // componentDidMount() {
  //   if (this.props.loggedIn && this.props.inputs) {
  //
  //     this.props.requestHome(this.props.homeid);
  //   } else {
  //     return (<div className="loading">Please Log in First</div>)
  //   }
  // };

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
      <div className="bookthecolumn">
        <div className='containtheselection book-txt'>
          <label className="labelthebook"/>Who's coming?
          <div className='dropdownselections book-dd'>
            <select className='droptheselectdownward selectbookthedropdown' value={this.state.num_guests}
              onChange={this.handledropdownselection('num_guests')}>{this.guestsNumber()}</select>
            <span className="arrowthedropdown"></span>
          </div>
        </div>
      </div>
    );
  }

  leftsideviewoftrip() {
    const {inputs, listing} = this.props;
    //Test this out. I think that when you get host back from jbuilder, it is automatically an array
    return (
      <section className="left-book">
        <div className="bookpicsinhere">
          <img className="picturebook" src={listing.image_url}/>
        </div>
        <div className="bodyofthepanel">
          <div className="bookname">{listing.title}</div>
          <div className="descriptofbook">{listing.roomtype}</div>
          <div className="descriptofbook">{listing.address}</div>
        </div>
        <div className="bookdivision"/>
        <div className="bodyofthepanel columncheck poscalen">
          <div className="cal-col">
            <div className="columncheck">Check-in</div>
            <div className="bookcheckin">{this.tripbegin}</div>
          </div>
          <div className="cal-col">
            <div className="columncheck">Checkout</div>
            <div className="bookcheckin">{this.tripend}</div>
          </div>
        </div>
        <div className="bookdivision"/>
        <div className="bodyofthepanel">
          <div className="rowbookprice">
            <div className="calculateprice">${this.nightPrice} x {this.days} nights</div>
            <div className="pricetotal">${this.cost}</div>
          </div>
          <div className="rowbookprice">
            <div className="calculateprice">Cleaning fee</div>
            <div className="pricetotal">${this.cleaning}</div>
          </div>
          <div className="rowbookprice">
            <div className="calculateprice">Service fee</div>
            <div className="pricetotal">${this.service}</div>
          </div>

        </div>
        <div className="bookdivision"/>
        <div className="bodyofthepanel">
          <div className="totaloftext">Total</div>
          <div className="totaloftext">${this.totalcost}</div>
        </div>
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
          <section className="tripthebookpage">
            {this.leftsideviewoftrip()}
          </section>
            <form className="tripthebookform">About Your Trip

            {this.howmanyGuests()}

              <div className="tosayhello">What is the purpose of you visit?
                <textarea className="hellosay" placeholder="to explore the city with some friends..."/>
              </div>
              <button className="tosubmitdarkblue tobooktripbutton" onClick={(e) => this.handleSubmission(e)}>
                <span className="btn-text">
                  Book
                </span>
              </button>
            </form>
        </div>
      )
    }
  }
}

export default withRouter(BookTrip);
