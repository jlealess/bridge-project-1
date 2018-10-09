import React from 'react';

const Event = props => (
  <div className="card card--event">
    <p className="event__type">Pull request</p>
    <p className={`event__status event__status--${props.event.status}`}>
      {props.event.status}
    </p>
    <p>
      <a href={props.event.repo.url} className="event__link">
        {props.event.repo.name}
      </a>
    </p>
    <p className="event__title">{props.event.title}</p>
  </div>
);

export default Event;