import React, { Component } from 'react';
import './App.css';
import Login from "./Login.js";
import Profile from "./Profile.js";
import { apiKey } from './setup/keys';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      firstName: "",
      profile: {},
      followers: [],
      events: [],
      pullRequests: [],
      forkEvents: [],
      loggedIn: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.setUserInLocalStorage = this.setUserInLocalStorage.bind(this);
  }

  accessToken = `?access_token=${apiKey}`;

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin() {
    this.getGithubUser(this.state.username)
      .then(res => res.json())
      .then(data =>
        this.setState({
          profile: data,
          loggedIn: true
        })
      );
  }

  getPullsForRepo(user, repo) {
    return fetch(`https://api.github.com/repos/${user}/${repo}/pulls`);
  }

  handleLogOut() {
    localStorage.setItem("ghDevLoggedIn", false);
    this.setState({
      profile: {},
      loggedIn: false
    });
  }

  getGithubUser(username) {
    return fetch(`https://api.github.com/users/${username}${this.accessToken}`);
  }

  getGithubFollowing(url) {
    return fetch(`${url}${this.accessToken}`)
      .then(res => res.json())
      .then(data => this.setState({ followers: data }));
  }

  getGithubEvents(url) {
    return fetch(url);
  }

  setUserInLocalStorage() {
    localStorage.setItem("ghDevUsername", this.state.username);
    localStorage.setItem("ghDevLoggedIn", true);
  }

  componentDidMount() {
    if (
      localStorage.getItem("ghDevLoggedIn") === true &&
      localStorage.getItem("ghDevUsername")
    ) {
      let username = localStorage.getItem("ghDevUsername");
      this.getGithubUser(username)
        .then(res => res.json())
        .then(data =>
          this.setState({
            profile: data,
            loggedIn: true,
            username
          })
        );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loggedIn !== this.state.loggedIn) {
      if (this.state.loggedIn) {
        this.setUserInLocalStorage();
        this.getGithubFollowing(this.state.profile.followers_url);

        this.getGithubEvents(
          `https://api.github.com/users/${this.state.username}/events`
        )
          .then(res => res.json())
          .then(events => {
            return events.filter(
              event => event.type === "ForkEvent" || event.type === "PullRequestEvent"
            )
          }).then(data => {
            const events = data.map(event => {
              if (event.type === "PullRequestEvent") {
                return fetch(event.payload.pull_request.url)
                .then(res => res.json())
                .then(data =>  ({...event, status: data.state, title: data.title}))
              } else {
                return event
              }
            });
            Promise.all([...events]).then(events => this.setState({ events }));
          })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Github Developer</h1>
          {this.state.loggedIn ? (
            <Profile
              data={this.state.profile}
              handleClick={this.handleLogOut}
              followers={this.state.followers}
              events={this.state.events}
            />
          ) : (
              <Login
                handleChange={this.handleChange}
                username={this.state.username}
                firstName={this.state.firstName}
                handleLogin={this.handleLogin}
              />
            )}
        </div>
      </div>
    );
  }
}

export default App;
