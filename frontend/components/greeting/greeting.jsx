//remember that the map whatever to props from the
//container will be sent to this page and then
//here we can use these props wherever we want on the
//page
import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <li><Link className="loginbutton" to="/login">Login</Link></li>
    <li><Link className="signupbutton" to="/signup">Sign up!</Link></li>
  </nav>
);
//currentUser and logout come from container map
const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">{currentUser.username}</h2>
    <button className="SignOutButton" onClick={logout}>Log Out</button>
  </hgroup>
);

//This will conditionally render SignIn/Login vs SignOut
//We know whether you are logged in or not and then we decide what to show you on your header bar.

const Greeting = ({ currentUser, logout}) => (
  (Object.keys(currentUser).length === 0) ? sessionLinks() : personalGreeting(currentUser, logout)
);

export default Greeting;
