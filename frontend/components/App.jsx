import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container'
//The GreetingContainer will be rendered all the time because it is a header
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SearchContainer from './search/search_container';
import HomeShowContainer from './home_show/home_show_container';
import BookTripContainer from './trip/book_trip_container';
import ModalContainer from './modal/modal_container';
import TripIndexContainer from './trip/trip_index_container';


const App = () => (
  <div>
    <header>
      <nav className="header-nav">
        <Link to="/" className="header-link">
          <img className="travel-icon" src="https://image.flaticon.com/icons/svg/201/201623.svg"></img>
        </Link>
        <input id="pac-input" className="controls" type="text" placeholder="San Francisco, California, United States" />
        <GreetingContainer />
      </nav>
    </header>
    <ModalContainer />
    <Switch>
      <Route exact path="/homes/:homeid/book" component={BookTripContainer} />
      <Route exact path="/homes/:homeid" component={HomeShowContainer} />
      <Route exact path="/user/:userid/trips" component={TripIndexContainer}/>
      <Route path="/" component={SearchContainer} />
    </Switch>
  </div>
);

export default App;



// <AuthRoute path="/login" component={SessionFormContainer} />
// <AuthRoute path="/signup" component={SessionFormContainer} />
