import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    //We set the state here because it will change as we type stuff into the form
    this.state = {
      username: "",
      password: ""
    }
    //HandleSubmit must be bound to this since it is a callback
    this.handleSubmit = this.handleSubmit.bind(this);
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
  //Depending on the formtype, we are going to show signup or log in instead
  navLink() {
    if (this.props.formType === 'login'){
      return <Link to="/signup">sign up instead</Link>
    }
    else {
      return <Link to="/login">log in instead</Link>
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  //OnChange will change the the state on keystroke and will go through update method.
  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to BenchBnB!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
