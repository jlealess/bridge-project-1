import React from "react";
import Event from "./Event";

const eventType = event => {
    if (event.type === "ForkEvent") {
        return "Fork"
    } else if (event.type === "PullRequestEvent") {
        return "Pull Request"
    }
}

const EventList = props => {
    return (
        <React.Fragment>
            <h2>Recent activity</h2>
            {props.events.length > 0 ?             
            <ul>
                {props.events.map((event, i) => {
                    return (
                        <li key={event.id}>
                            <Event event={event} />
                        </li>
                    );
                })}
            </ul>
            : <p>Sorry, this user has no active repos.</p>}
        </React.Fragment>
    );
};

export default EventList;