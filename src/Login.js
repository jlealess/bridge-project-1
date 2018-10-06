import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";

const Login = props => (
    <div>
        <h2>please enter your github username to login</h2>
        <TextField
            handleChange={props.handleChange}
            id="github-username"
            name="username"
            label="GitHub username"
            value={props.username}
        />
        <Button value="Login" handleClick={props.handleLogin} />
    </div>
);

export default Login;