import React from "react";
import EventList from "./EventList";
import FollowingList from "./FollowingList";
import Button from "./Button.js";

export default ({
  avatar_url,
  events,
  followers,
  handleLogout,
  login,
  toggleForkEventsFilter,
  togglePullRequestEventsFilter,
}) => (
  <div className="profile">
    <div>
      <h2>Hello, {login}</h2>
      <img src={avatar_url} alt={`${login}`} className="profile__avatar" />
      <Button
        handleClick={handleLogout}
        value="Logout"
        className="full-width"
      />
      <FollowingList followers={followers} />
    </div>
    <EventList
      events={events}
      toggleForkEventsFilter={toggleForkEventsFilter}
      togglePullRequestEventsFilter={togglePullRequestEventsFilter}
    />
  </div>
);
