import React from 'react';
import { connect } from "react-redux";
import '../App.css';
import Login from "./Login/Login.js";
import Profile from "./Profile/Profile.js";
import AppHeader from './AppHeader';

const App = ({ loggedIn }) => (
  <div className="App">
         <AppHeader />
         <div className="App-body wrapper">
          {loggedIn ? <Profile /> : <Login />} 
        </div>
      </div>
);

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(App);