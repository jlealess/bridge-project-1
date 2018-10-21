import React from "react";
import { connect } from "react-redux";
import TextField from "../TextField.js";
import Button from "../Button.js";
import {
  handleChangeUsername,
  setUserFromLocalStorage,
  loginUser,
} from "./Login.actions";

class Login extends React.Component {
    // componentDidMount() {
    //     if (
    //         localStorage.getItem("ghDevLoggedIn") && localStorage.getItem("ghDevUsername")
    //     ) {
    //         const username = localStorage.getItem("ghDevUsername");
    //         this.props.setUserFromLocalStorage(username);
    //         this.props.loginUser(username);
    //     }
    // }

  render() {
    const { username, loginErrorMessage, handleChangeUsername, loginUser } = this.props;
    return (
      <div className="login">
        <img
          src="./assets/cat-avatar.jpg"
          alt="GitHub Developer"
          className="logo img img--rounded"
        />
        <h2 className="heading heading--light heading--centered">
          Welcome!
          <br /> Enter your GitHub username to login
        </h2>
        <div className="form form--login">
          <TextField
            name="username"
            handleChange={handleChangeUsername}
            id="github-username"
            label="Username"
            value={username}
            required="true"
          />
          <Button
            value="Login"
            handleClick={() => loginUser(username)}
            className="full-width primary"
          />
          <p className="error">{loginErrorMessage}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    username: state.username,
    loginErrorMessage: state.loginErrorMessage
});

const mapDispatchToProps = {
    handleChangeUsername,
    loginUser,  
    setUserFromLocalStorage,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);