//remember that the map whatever to props from the
//container will be sent to this page and then
//here we can use these props wherever we want on the
//page
import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';

const sessionLinks = (updateModal) => (
  <div className="signandlog">
    <nav className="login-signup">
      <h3 className="loginbutton" onClick={() => updateModal(<SessionFormContainer formType="login" />, true)}>Login</h3>
      <h3 className="signupbutton" onClick={() => updateModal(<SessionFormContainer formType="signup" />, true)}>Sign up!</h3>
    </nav>
  </div>
);
//currentUser and logout come from container map
const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Welcome {currentUser.username}!</h2>
    <div className="Signed-In-User-Header">
      <Link className="AllTripsButton" to="/user/:userid/trips">Your Trips</Link>
      <li className="SignOutButton" onClick={logout}>Log Out</li>
    </div>
  </hgroup>
);

//This will conditionally render SignIn/Login vs SignOut
//We know whether you are logged in or not and then we decide what to show you on your header bar.

const Greeting = ({ currentUser, logout, updateModal}) => (
  (Object.keys(currentUser).length === 0) ? sessionLinks(updateModal) : personalGreeting(currentUser, logout)
);

export default Greeting;
