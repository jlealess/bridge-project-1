import React from 'react';

const Event = props => (
    <div>
        <p>Pull request</p>
        <p>
            <a href={props.event.repo.url}>{props.event.repo.name}</a>
            <span>{props.event.title}</span>
            <span>{props.event.status}</span>
        </p>
    </div>
);

export default Event;