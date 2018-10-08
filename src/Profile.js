import React from "react";
import EventList from "./EventList";
import Button from "./Button.js";

export default ({ login, avatar_url, handleLogout, events }) => (
    <div className="profile">
        <h2>Hello, {login}</h2>
        <img src={avatar_url} alt={`${login}`} />
        <Button handleClick={handleLogout} value="Logout" />
        <EventList events={events} />
    </div>
)
