import React from 'react';

const Event = props => (
    <div>
        <p>
            <a href={props.event.repo.url}>{props.event.repo.name}</a>
        </p>
    </div>
);

export default Event;