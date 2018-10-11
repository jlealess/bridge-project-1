import React from "react";
import Event from "./Event";
import ToggleContainer from './ToggleContainer';

export default ({
  events,
  filters,
  toggleForkEventsFilter,
  togglePullRequestEventsFilter
}) => (
  <div className="events">
    <h2>Recent activity</h2>
    <ToggleContainer
        toggleForkEventsFilter={toggleForkEventsFilter}
        togglePullRequestEventsFilter={togglePullRequestEventsFilter}
        filters={filters}
    />
    {events.length > 0 ? (
      <ul className="events__list">
        {events.filter(event => filters[event.type]).length > 0 ? events.filter(event => filters[event.type]).map((event, i) => {
          return (
            <li key={event.id} className="events__list__item">
              <Event event={event} />
            </li>
          );
        }) : <p>Whoops, no events match your criteria!</p>}
      </ul>
    ) : (
      <p>Sorry, this user has no active repos.</p>
    )}
  </div>
);