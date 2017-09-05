import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import BetterHomeDetail from './better_home_detail';
import BookItNowContainer from '../trip/book_it_now_container';

// import Footer from '../footer';

//Take care of the bug where you resize the window and it ends up changing the filters and gets rid of the house you got currently.

// shows a single listing
class HomeShow extends React.Component {
  constructor(props) {
    super(props);
  }

  //I'm pretty sure you can change this to componentWillMount and get rid of the conditional in the render method
  componentWillMount() {
    this.props.requestHome(this.props.homeid);
  }

  //If the person was to put a different home into the url, then it would go to that home instead
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.homeid !== nextProps.match.params.homeid) {
      this.props.requestHome(nextProps.match.params.homeid);
    }
  }

  render() {
    const { listing, homeid, requestHome, updateModal } = this.props;
    if (listing === undefined || !listing.host) {
      return (
        <div></div>
      );
    } else {
      return (
        <section className="pagelisting">
          <div className="listingphotocontain"><img className="show-photo" src={this.props.listing.image_url}/></div>
          <div className="detailmain">
            <div className="container-detail">
              <div className="sub-container-detail">
                <div className="detailednavigation">
                  <div className="selectnavigation">Overview</div>
                </div>
                  <BetterHomeDetail clearErrors={this.props.clearErrors} createReview={this.props.createReview} reviews={this.props.reviews} requestReviews={this.props.requestReviews} currentUser={this.props.currentUser} updateModal={updateModal} listing={listing}/>
              </div>
              <div className="bookdividerer">
                <BookItNowContainer listing={listing}/>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default withRouter(HomeShow);
