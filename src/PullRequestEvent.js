import React from 'react';

export default ({ event }) => (
  <div className="card card--event">
    <p className="event__type">Pull request</p>
    <p className={`event__status event__status--${event.status}`}>
      {event.status}
    </p>
    <p>
      <a href={event.repo.url} className="event__link">
        {event.repo.name}
      </a>
    </p>
    <p className="event__title">{event.title}</p>
  </div>
);