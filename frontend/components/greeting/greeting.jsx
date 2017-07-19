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
//currentUser and logout come from container maps
const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="SignOutButton" onClick={logout}>Log Out</button>
  </hgroup>
);

//This will conditionally render SignIn/Login vs SignOut
const Greeting = ({ currentUser, logout}) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
