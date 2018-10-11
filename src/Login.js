import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";

export default ({ handleChangeUsername, username, handleLogin, loginError, loginErrorMessage }) => (
    <div className="login">
        <img src="./assets/cat-avatar.jpg" alt="" className="logo img img--rounded" />
        <h2 className="heading heading--light heading--centered">Welcome!<br /> Enter your GitHub username to login</h2>
        <div className="form form--login">
            <TextField
                name="username"
                handleChange={handleChangeUsername}
                id="github-username"
                label="Username"
                value={username}
                required="true"
            />
            <Button value="Login" handleClick={handleLogin} className="full-width primary" />
            <p className="error">{loginErrorMessage}</p>
        </div>
    </div>
);