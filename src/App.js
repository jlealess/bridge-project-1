import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Login from "./Login.js";
import Profile from "./Profile.js";
import { handleChangeUsername, setUserFromLocalStorage, loginUser, handleLogout, fetchEvents } from "./appReducer";

class App extends Component {
  componentDidMount() {
    if (
      localStorage.getItem("ghDevLoggedIn") && localStorage.getItem("ghDevUsername")
    ) {
      const username = localStorage.getItem("ghDevUsername");
      this.props.setUserFromLocalStorage(username);
      this.props.loginUser(username);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.loggedIn !== this.props.loggedIn) {
      if (this.props.loggedIn) {
        this.props.fetchEvents(`https://api.github.com/users/${this.props.username}/events`);
      }
    }
  }

  render() {
    return <div className="App">
        <div className="App-header">
          <h1>Github Developer</h1>
          {this.props.loggedIn ? <Profile             
              {...this.props.profile}
              events={this.props.events}
              handleLogout={this.props.handleLogout}          
            /> :         
            <Login
              handleChangeUsername={this.props.handleChangeUsername}
              handleLogin={() => this.props.loginUser(this.props.username)}
              username={this.props.username}
            />
        }
        </div>
      </div>;
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  handleChangeUsername,
  loginUser,
  handleLogout,
  fetchEvents,
  setUserFromLocalStorage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);