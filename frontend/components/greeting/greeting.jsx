//remember that the map whatever to props from the
//container will be sent to this page and then
//here we can use these props wherever we want on the
//page
import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';

const sessionLinks = (updateModal) => (
  <div>
    <Link to="/" className="header-link">
      <img className="travel-icon" src="https://image.flaticon.com/icons/svg/201/201623.svg"></img>
    </Link>
    <nav className="login-signup">
      <li><h3 className="loginbutton" onClick={() => updateModal(<SessionFormContainer formType="login" />, true)}>Login</h3></li>
      <li><h3 className="signupbutton" onClick={() => updateModal(<SessionFormContainer formType="signup" />, true)}>Sign up!</h3></li>
    </nav>
  </div>
);
//currentUser and logout come from container map
const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <Link to="/" className="header-link">
      <img className="travel-icon" src="https://image.flaticon.com/icons/svg/201/201623.svg"></img>
    </Link>
    <h2 className="header-name">Welcome {currentUser.username}!</h2>
    <h3 className="SignOutButton" onClick={logout}>Log Out</h3>
  </hgroup>
);

//This will conditionally render SignIn/Login vs SignOut
//We know whether you are logged in or not and then we decide what to show you on your header bar.

const Greeting = ({ currentUser, logout, updateModal}) => (
  (Object.keys(currentUser).length === 0) ? sessionLinks(updateModal) : personalGreeting(currentUser, logout)
);

export default Greeting;
