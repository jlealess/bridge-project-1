import React from "react";
import FollowingList from "./FollowingList.js";
import ForkEventList from "./ForkEventList.js";
import Button from "./Button.js";

const Profile = props => {
    const { login } = props.data;
    return (
        <div className="profile">
            <h2>Hello, {login}</h2>
            <img src={props.data.avatar_url} alt={`${login}`} />
            <Button handleClick={props.handleClick} value="Logout" />
            <ForkEventList forkEvents={props.forkEvents} />
            <FollowingList followers={props.followers} />
        </div>
    );
};

export default Profile;