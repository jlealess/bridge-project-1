import React from 'react';

const ForkEvent = props => (
    <div className="card card--event">
        <p className="event__type">Fork</p>
        <p>
            <a href={props.event.repo.url}>{props.event.repo.name}</a>
        </p>
        <p>Forked to <a href={props.event.payload.forkee.clone_url}>
            {(props.event.payload.forkee.clone_url).replace('https://github.com/', '').replace('.git', '')}
        </a>
        </p>
    </div>
);

export default ForkEvent;