import React from 'react';

const eventType = event => {
  if (event.type === "ForkEvent") {
    return "Fork";
  } else if (event.type === "PullRequestEvent") {
    return "Pull Request";
  }
};

const Event = props => (
    <div>
        <span>{eventType(props.event)}</span>
        <p>
            <a href={props.event.repo.url}>{props.event.repo.name}</a>
            {props.event.status ? props.event.status : ''}
        </p>
    </div>
);

export default Event;