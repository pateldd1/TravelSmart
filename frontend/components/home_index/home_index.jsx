import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { sortBy } from 'lodash'
class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.bounce = this.bounce.bind(this);
    this.nobounce = this.nobounce.bind(this);
  }

  //This is added just for testing
  // componentDidMount(){
  //   this.props.requestHomes(null);
  // }

  bounce(homeId){
    this.props.updateFilter("bouncingMarker", {homeId: homeId, bouncing: true});
  }

  nobounce(homeId){
    this.props.updateFilter("bouncingMarker", {homeId: homeId, bouncing: false});
  }

  travelSmart(home) {
    return (
      <div className="home-card">
        <Link to={`/homes/${home.id}`} className="link-to">

          <div className="show-card-container" onMouseEnter={() => this.bounce(home.id)} onMouseLeave={() => this.nobounce(home.id)}>
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
