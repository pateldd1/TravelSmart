import React from 'react';
import SessionFormContainer from "../session_form/session_form_container";
import * as APIUtil from '../../util/review_api_util';

//default state of a string is an empty string.
class ReviewForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      rating: 10,
      body: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  //Normal way to handle change of state in a drop-down
  handleSelectChange(property) {
    return e => this.setState({ [property]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const review = {
      home_id: this.props.homeid,
      rating: this.state.rating,
      body: this.state.body
    }
    let that = this;
    if (Object.keys(this.props.currentUser).length !== 0) {
      APIUtil.createReview(review).then(that.props.updateModal(null,false));
    }
  }

  reviewForm() {
    return (
      <section className="book-trip-page">
        <form className="book-trip-form review-form">Write a review
          {this.selectRating()}
          <div className="say-hello-container">Tell everyone about your stay:
            <textarea className="say-hello" placeholder="Write your review here"
            value={this.state.body} onChange={this.handleSelectChange('body')}
            />
          </div>
          <button className="tosubmitdarkblue bk-tp-btn post-review" onClick={(e) => this.handleSubmit(e)}>
            <span className="btn-text">
              Post Review
            </span>
          </button>
        </form>
      </section>
    )
  }

  selectRating() {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(
        <option value={i}
        key={i}
        >{i}</option>
      )
    };
    return (
      <div className="book-column">
        <div className='select-container book-txt'>
          <label className="book-label"/>How would you rate your stay?
          <div className='select-dd-container book-dd'>
            <select className='select-dropdown select-bk-dd' value={this.state.rating}
              onChange={this.handleSelectChange('rating')}
            >{options}</select>
            <span className="dropdown-arrow"></span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="review-form">
        {this.reviewForm()}
      </div>
    )
  }
}

export default ReviewForm
