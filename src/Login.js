import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";

export default ({ handleChangeUsername, username, handleLogin }) => (
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
            />
            <Button value="Login" handleClick={handleLogin} className="full-width primary" />
        </div>
    </div>
);