import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { sortBy } from 'lodash'
class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  //This is added just for testing
  // componentDidMount(){
  //   this.props.requestHomes(null);
  // }

  travelSmart(home) {
    return (
      <div className="home-card">
        <Link to={`/homes/${home.id}`} className="link-to">

          <div className="show-card-container">
            <img className="show-card" src={home.image_url}/>
          </div>

          <div className="card-top-row">
            <div className="card-bold">${home.price} {home.title}</div>
          </div>

          <div className="card-bot-row">
            <div className="card-norm">{home.roomtype} · {home.space.beds} beds</div>
          </div>

          <div className="card-review">
          </div>

        </Link>
      </div>
    )
  }
  // <div className="card-review-stars">* * * * *</div>
  // <div className="reviews">DO THIS LATER reviews</div>

  render() {
    const { homes } = this.props;
    let arrangedHomes;
    if ( this.props.sorted === true )
    {
      arrangedHomes = _.sortBy(homes, [function(home){ return home.price }]);
    }
    else{
      arrangedHomes = homes;
    }
    const selectedHomes = arrangedHomes.map((home, idx) => {
      return (
        <div className="home-card-container" key={idx}>
          {this.travelSmart(home)}
        </div>
      )
    })

    return (
      <div className="cards">
        {selectedHomes}
      </div>
    )
  }
}

export default HomeIndex;
