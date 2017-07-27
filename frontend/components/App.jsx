import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container'
//The GreetingContainer will be rendered all the time because it is a header
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SearchContainer from './search/search_container';
import HomeShowContainer from './home_show/home_show_container';
import BookTripContainer from './trip/book_trip_container';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <header>
      <nav className="header-nav">
        <GreetingContainer />
      </nav>
    </header>
    <ModalContainer />
    <Switch>
      <Route exact path="/homes/:homeid/book" component={BookTripContainer} />
      <Route exact path="/homes/:homeid" component={HomeShowContainer} />
      <Route path="/" component={SearchContainer} />
    </Switch>
  </div>
);

export default App;



// <AuthRoute path="/login" component={SessionFormContainer} />
// <AuthRoute path="/signup" component={SessionFormContainer} />
