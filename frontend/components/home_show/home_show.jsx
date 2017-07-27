import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import HomeShowContainer from './home_show_container';
import HomeDetail from './home_detail';
import BookItNowContainer from '../trip/book_it_now_container';
// import Footer from '../footer';
// import Reviews from '../review/review';

//Take care of the bug where you resize the window and it ends up changing the filters and gets rid of the house you got currently.

// shows a single listing
class HomeShow extends React.Component {
  constructor(props) {
    super(props)
  }

  //I'm pretty sure you can change this to componentWillMount and get rid of the conditional in the render method
  componentDidMount() {
    this.props.requestHome(this.props.homeid);
    // Haven't gotten to reviews yet
    // this.props.requestReviews(this.props.homeid);
  }

  //If the person was to put a different home into the url, then it would go to that home instead
  componentWillReceiveProps(nextProps) {
  if (this.props.match.params.homeid !== nextProps.match.params.homeid) {
    this.props.requestHome(nextProps.match.params.homeid);
    }
  }

  render() {
    const { listing, homeid, requestHome, reviews } = this.props;
    if (listing === undefined) {

      return (
        <div className="loading">Finding Home...</div>
      );
    } else {
      // in line 47-49
      // <div className="single-listing-viewimage">
      // <button type="button" className="view-btn">View Photos</button>
      // </div>
      // in line 59-61
      // <div className="navigation-selection">Reviews</div>
      // <div className="navigation-selection">The Host</div>
      // <div className="navigation-selection">Location</div>
      return (
        <section className="listing-show-page">

          <div className="single-listing-photocontainer">
            <img className="show-photo" src={this.props.listing.image_url}/>



          </div>

          <div className="main-detail">
            <div className="container-detail">

              <div className="sub-container-detail">

                <div className="navigation-detail">
                  <div className="navigation-selection">Overview</div>



                </div>
                <HomeDetail listing={listing}/>
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
// <div className="review-divider">
//   <Reviews
//     reviews={reviews}/>
// </div>

export default withRouter(HomeShow);


//Add this when you get reviews

//Add this at the end
// <div className='footer-container'>
//   <Footer/>
// </div>
