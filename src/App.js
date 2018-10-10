import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Login from "./Login.js";
import Profile from "./Profile.js";
import {
  fetchEvents,
  fetchFollowers,
  handleChangeUsername,
  handleLogout,
  loginUser,
  setUserFromLocalStorage,
  toggleForkEventsFilter,
  togglePullRequestEventsFilter,
} from "./appReducer";

class App extends Component {
  componentDidMount() {
    // if (
    //   localStorage.getItem("ghDevLoggedIn") && localStorage.getItem("ghDevUsername")
    // ) {
    //   const username = localStorage.getItem("ghDevUsername");
    //   this.props.setUserFromLocalStorage(username);
    //   this.props.loginUser(username);
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.loggedIn !== this.props.loggedIn) {
      if (this.props.loggedIn) {
        this.props.fetchEvents(`https://api.github.com/users/${this.props.username}/events`);
        this.props.fetchFollowers(this.props.profile.followers_url);
      }
    }
  }

  render() {
    return <div className="App">
        <div className="App-header">
          <h1>Github Developer</h1>
        </div>
        <div className="App-body">
          {this.props.loggedIn ? (
            <Profile
              {...this.props.profile}
              events={this.props.events}
              followers={this.props.followers}
              handleLogout={this.props.handleLogout}
              toggleForkEventsFilter={() => this.props.toggleForkEventsFilter()}
              togglePullRequestEventsFilter={() => this.props.togglePullRequestEventsFilter()}
            />
          ) : (
            <Login
              handleChangeUsername={this.props.handleChangeUsername}
              handleLogin={() => this.props.loginUser(this.props.username)}
              username={this.props.username}
            />
          )}
        </div>
      </div>;
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  fetchEvents,
  fetchFollowers,
  handleChangeUsername,
  handleLogout,
  loginUser,
  setUserFromLocalStorage,
  toggleForkEventsFilter,
  togglePullRequestEventsFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);