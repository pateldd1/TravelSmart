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
    console.log(this.props.reviews);
    const { listing, homeid, requestHome, updateModal } = this.props;
    if (listing === undefined || !listing.host) {
      return (
        <div></div>
      );
    } else {
      return (
        <section className="listing-show-page">
          <div className="single-listing-photocontainer"><img className="show-photo" src={this.props.listing.image_url}/></div>
          <div className="main-detail">
            <div className="container-detail">
              <div className="sub-container-detail">
                <div className="navigation-detail">
                  <div className="navigation-selection">Overview</div>
                </div>
                  <BetterHomeDetail createReview={this.props.createReview} reviews={this.props.reviews} requestReviews={this.props.requestReviews} currentUser={this.props.currentUser} updateModal={updateModal} listing={listing}/>
              </div>
              <div className="to-book-it-divider">
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


//Add this when you get reviews

//Add this at the end
// <div className='footer-container'>
//   <Footer/>
// </div>
