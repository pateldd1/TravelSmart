import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    //We set the state here because it will change as we type stuff into the form
    this.state = {
      username: "",
      password: "",
    }
    //HandleSubmit must be bound to this since it is a callback
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  //This is very very important and is done basically because when it goes full
  //circle and returns with a change in the store that says that the user is logged
  //in, It will come back here and push the index page onto the history, navigating
  //us to the home page since we are logged in!! Any time the state changes,
  //you will need this lifecycle method. Every component has a lifecycle that changes
  //after we go full circle, do the action and change the store.

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  componentDidMount() {
      document.addEventListener('click', this.handleOutClick.bind(this), true);
  }

  componentWillUnmount() {
      document.removeEventListener('click', this.handleOutClick.bind(this), true);
  }

  handleOutClick(event) {
      if (event.target.className === 'closeModal') {
        this.props.history.push("/")
      }
  }
  //Update methods are made to change the state
  //e.currentTarget is the <form> because the form had the event listener
  //installed on it. currentTarget is what we have installed an event listener onto
  // the 'e' is simply the event that goes through when the event listener has listened to an action
  //'e' is mainly necessary for callback functions such as onChange or onSubmit. e.preventDefault() is neccessary
  //for things like onSubmit. Make sure you prevent default on callbacks if necessary.

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm({user: this.state})
  }

  guestLogin(e){
    this.props.login({user: {username: "Guest", password: "123456"}})
  }

  //Depending on the formtype, we are going to show signup or log in instead
  navLink() {
    if (this.props.formType === 'login'){
      return (
        <div className="redirection">
          <h4>Don't have a TravelSmart account?</h4>
          <Link className="redirect-to-signup" to="/signup">Sign Up</Link>
        </div>
      )
    }
    else {
      return (
        <div className="redirection">
          <h4>Already have a TravelSmart account?</h4>
          <Link className="redirect-to-login" to="/login">Log In</Link>
        </div>
      )
    }
  }

  guestUser(){
    return (
      <div className="guest-login">
        <p className="guest-text" onClick={this.guestLogin}>Guest</p>
      </div>
    )
  }

  submitButton(){
    if ( this.props.formType === 'login' )
    {
      return <input className="entrance-button btn-text" type="submit" value="Login" />
    }
    else
    {
      return <input className="entrance-button btn-text" type="submit" value="Sign Up" />
    }
  }

  renderErrors() {
    return(
      <ul className="signup-login-errors">
        {this.props.errors.map((error, i) => (
          <li className="error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  //OnChange will change the the state on keystroke and will go through update method.
  modalContent() {
    return (
      <div className="login-form-container">

        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <div className="login-form">
            <br/>
            <div className="registration">
              <input type="text"
                autoFocus="autofocus"
                value={this.state.username}
                placeholder=" username"
                onChange={this.update('username')}
                className="login-input"
              />
          </div>
            <br/>
            <div className="registration">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder=" password"
                className="login-input"
              />
            </div>
            <br/>
            <span className="btn-text">
              {this.submitButton()}
            </span>
            {this.navLink()}
            {this.guestUser()}
            {this.renderErrors()}
          </div>

        </form>

      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="modal-root" >
          <div className="modal-parent">
            <div className="modal-screen">
              <div className="modal-wrapper">
                <div className="closeModal"/>
                <div className="modal-content">
                  {this.modalContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
