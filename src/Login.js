import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";

export default ({ handleChangeUsername, username, handleLogin }) => (
    <div className="login">
        <h2>Enter your github username to login</h2>
        <TextField
            name="username"
            handleChange={handleChangeUsername}
            id="github-username"
            label="Username"
            value={username}
        />
        <Button value="Login" handleClick={handleLogin} />
    </div>
);