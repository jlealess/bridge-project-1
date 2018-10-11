import React from "react";
// import PullRequestEvent from "./PullRequestEvent";
// import ForkEvent from './ForkEvent';
import Event from "./Event";
import Button from "./Button";

export default ({
  events,
  filters,
  toggleForkEventsFilter,
  togglePullRequestEventsFilter
}) => (
  <div className="events">
    <h2>Recent activity</h2>
    <div className="toggle-container">
        <p className="toggle-container__label">
            Filter:
        </p>
        <Button 
            value="Toggle Fork Events" 
            handleClick={toggleForkEventsFilter} 
            className={`filter-toggle ${filters.ForkEvent ? "filter-toggle--active" : "filter-toggle--inactive"}`}
        />
        <Button
        value="Toggle Pull Request Events"
        handleClick={togglePullRequestEventsFilter}
        className={`filter-toggle ${filters.PullRequestEvent ? "filter-toggle--active" : "filter-toggle--inactive"}`}
        />
    </div>
    {events.length > 0 ? (
      <ul className="events__list">
        {events.filter(event => filters[event.type]).map((event, i) => {
          return (
            <li key={event.id} className="events__list__item">
              <Event event={event} />
            </li>
          );
        })}
      </ul>
    ) : (
      <p>Sorry, this user has no active repos.</p>
    )}
  </div>
);