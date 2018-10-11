import React from "react";
import EventList from "./EventList";
import UserProfile from "./UserProfile";

export default ({
  avatar_url,
  events,
  filters,
  followers,
  handleLogout,
  login,
  toggleForkEventsFilter,
  togglePullRequestEventsFilter,
}) => (
  <div className="profile">
    <UserProfile 
      avatar_url={avatar_url}
      login={login}
      handleLogout={handleLogout}
      followers={followers}
    />
    <EventList
      events={events}
      filters={filters}
      toggleForkEventsFilter={toggleForkEventsFilter}
      togglePullRequestEventsFilter={togglePullRequestEventsFilter}
    />
  </div>
);
