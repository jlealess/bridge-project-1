import React from "react";
import PullRequestEvent from "./PullRequestEvent";
import ForkEvent from './ForkEvent';

const EventList = props => {
    return (
        <React.Fragment>
            <h2>Recent activity</h2>
            {props.events.length > 0 ?             
            <ul className="event-cards">
                {props.events.map((event, i) => {
                    return (
                        <li key={event.id} className="event-card">
                            {event.type === "PullRequestEvent" && <PullRequestEvent event={event} />}
                            {event.type === "ForkEvent" && <ForkEvent event={event} />}
                        </li>
                    );
                })}
            </ul>
            : <p>Sorry, this user has no active repos.</p>}
        </React.Fragment>
    );
};

export default EventList;