import React from 'react';
import * as APIUtil from '../../util/review_api_util';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
'August', 'September', 'October', 'November', 'December'];

class Reviews extends React.Component{
  constructor(props){
    super(props);
    this.displayReviews = this.displayReviews.bind(this);
  }

  componentDidMount(){
    this.props.requestReviews(this.props.listing.id);
  }

  displayReviews() {
    return this.props.reviews.map((review, idx) => {
      const year = review.created_at.slice(0,4);
      const month = months[parseInt(review.created_at.slice(5,7)) - 1];
      return (
        <div key={idx}>
          <div className="review-entry-top">
            <div className="review-entry-head">
              <img className="propics" src={review.image_url}/>
              <div>
                <div className="r-author-name">
                  {review.author.username}
                </div>
                <div>
                  {month} {year}
                </div>
              </div>
            </div>
            <div>Rating: <span className="strong">{review.rating}/10</span></div>
          </div>

          <div className="reviewbody">
            {review.body}
          </div>

          <hr className="thedividerow"/>
        </div>
      )
    })
  };

  render() {
    return (
      <div>
        {this.displayReviews()}
      </div>
    )
  }
}

export default Reviews
