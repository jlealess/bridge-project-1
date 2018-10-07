import React from "react";

const PullRequestList = props => {
    return (
        <React.Fragment>
            <h2>Most recent pull requests</h2>
            <ul>
                {props.pullRequests.map((pullRequest, i) => {
                    return (
                        <li key={`pullRequest-${i}`}>
                            <p>
                                <a href={pullRequest.repo.url}>{pullRequest.repo.name}</a>
                            </p>
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    );
};

export default PullRequestList;
