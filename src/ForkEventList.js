import React from "react";

const ForkEventList = props => {
    return (
        <React.Fragment>
            <h2>Recently forked repos</h2>
            <ul>
                {props.forkEvents.map((forkEvent, i) => {
                    return (
                        <li key={`forkEvent-${i}`}>
                            <p>
                                <a href={forkEvent.repo.url}>{forkEvent.repo.name}</a>
                            </p>
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    );
};

export default ForkEventList;