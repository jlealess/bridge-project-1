import React from 'react';

const date = (date) => {
    const updatedDate = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return updatedDate.toLocaleDateString('en-US', options);
}

export default ({ event }) => (
    <div className="card card--event">
        <p className="event__type">Fork</p>
        <p>
            <a href={event.repo.url} className="event__link">{event.repo.name}</a>
        </p>
        <p>Forked to <a href={event.payload.forkee.clone_url}>
            {(event.payload.forkee.full_name)}
        </a>
        </p>
        <p>Updated {date(event.updated_at ? event.updated_at : event.created_at)}</p>
    </div>
);
