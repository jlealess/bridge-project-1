import React from "react";
import PullRequestEvent from "./PullRequestEvent";
import ForkEvent from './ForkEvent';
import Button from './Button';

export default ({
  events,
  toggleForkEventsFilter,
  togglePullRequestEventsFilter
}) => (
  <div className="events">
    <h2>Recent activity</h2>
    <Button value="Toggle Fork Events" handleClick={toggleForkEventsFilter} />
    <Button
      value="Toggle Pull Request Events"
      handleClick={togglePullRequestEventsFilter}
    />
    {events.length > 0 ? (
      <ul className="events__list">
        {events.map((event, i) => {
          return (
            <li key={event.id} className="events__list__item">
              {event.type === "PullRequestEvent" && (
                <PullRequestEvent event={event} />
              )}
              {event.type === "ForkEvent" && <ForkEvent event={event} />}
            </li>
          );
        })}
      </ul>
    ) : (
      <p>Sorry, this user has no active repos.</p>
    )}
  </div>
);