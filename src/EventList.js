import React from "react";
import PullRequestEvent from "./PullRequestEvent";
import ForkEvent from './ForkEvent';

const EventList = props => {
    return (
        <div className="events">
            <h2>Recent activity</h2>
            {props.events.length > 0 ?             
            <ul className="events__list">
                {props.events.map((event, i) => {
                    return (
                        <li key={event.id} className="events__list__item">
                            {event.type === "PullRequestEvent" && <PullRequestEvent event={event} />}
                            {event.type === "ForkEvent" && <ForkEvent event={event} />}
                        </li>
                    );
                })}
            </ul>
            : <p>Sorry, this user has no active repos.</p>}
        </div>
    );
};

export default EventList;