import React from "react";
import EventList from "./EventList";
import FollowingList from "./FollowingList";
import Button from "./Button.js";

export default ({ login, avatar_url, handleLogout, events, followers }) => (
    <div className="profile">
        <div>
            <h2>Hello, {login}</h2>
            <img src={avatar_url} alt={`${login}`} />
            <Button handleClick={handleLogout} value="Logout" />
            <FollowingList followers={followers} />
        </div>
        <EventList events={events} />
    </div>
)
