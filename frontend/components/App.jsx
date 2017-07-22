import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container'
//The GreetingContainer will be rendered all the time because it is a header
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SearchContainer from './search/search_container';

const App = () => (
  <div>
    <header>
      <nav>
        <Link to="/" className="header-link">
          <img className="travel-icon" src="https://image.flaticon.com/icons/svg/201/201623.svg"></img>
        </Link>
        <GreetingContainer />
      </nav>
    </header>

    <SearchContainer />

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
