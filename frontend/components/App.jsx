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
      <h1>
        <Link to="/" className="header-link">
          <img className="travel-icon" src="http://www.freeiconspng.com/uploads/travel-icon-png-25.jpg"></img>
        </Link>
      </h1>
      <GreetingContainer />
    </header>

    <SearchContainer />

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
