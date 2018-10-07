import React from "react";

const EventList = props => {
    return (
        <React.Fragment>
            <h2>Recent activity</h2>
            {props.events.length > 0 ?             
            <ul>
                {props.events.map((event, i) => {
                    return (
                        <li key={event.id}>
                            <p>
                                <a href={event.repo.url}>{event.repo.name}</a>
                            </p>
                        </li>
                    );
                })}
            </ul>
            : <p>Sorry, this user has no active repos.</p>}
        </React.Fragment>
    );
};

export default EventList;