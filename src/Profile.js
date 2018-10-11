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
    <div className="user">
      <div className="user__info">
        <img src={avatar_url} alt={`${login}`} className="profile__avatar" />
        <h2 className="heading heading--light heading--secondary mb-0">Hello, {login}</h2>
        <Button
          handleClick={handleLogout}
          value="Logout"
          className="full-width"
        />
      </div>
      <FollowingList followers={followers} />
    </div>
    <EventList
      events={events}
      toggleForkEventsFilter={toggleForkEventsFilter}
      togglePullRequestEventsFilter={togglePullRequestEventsFilter}
    />
  </div>
);
