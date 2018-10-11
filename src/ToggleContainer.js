import React from 'react';
import Button from './Button';

export default ({
    toggleForkEventsFilter,
    togglePullRequestEventsFilter,
    filters
}) => (
    <div className="toggle-container">
        <p className="toggle-container__label">
            Filter:
        </p>
        <Button
            value="Toggle Fork Events"
            handleClick={toggleForkEventsFilter}
            className={`filter-toggle ${filters.ForkEvent ? "filter-toggle--active" : "filter-toggle--inactive"}`}
        />
        <Button
            value="Toggle Pull Request Events"
            handleClick={togglePullRequestEventsFilter}
            className={`filter-toggle ${filters.PullRequestEvent ? "filter-toggle--active" : "filter-toggle--inactive"}`}
        />
    </div>
);