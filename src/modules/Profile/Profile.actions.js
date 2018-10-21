import { APP_ACTIONS } from "../../constants";
import { accessToken } from "../../setup/keys";

const saveFollowers = followers => ({
    type: APP_ACTIONS.FETCH_FOLLOWERS,
    payload: followers
});

export const fetchEvents = eventsUrl => dispatch => {
    return fetch(eventsUrl)
        .then(res => res.json())
        .then(events => {
            return events.filter(
                event => event.type === "ForkEvent" || event.type === "PullRequestEvent"
            )
        }).then(data => {
            const events = data.map(event => {
                if (event.type === "PullRequestEvent") {
                    return fetch(event.payload.pull_request.url)
                        .then(res => res.json())
                        .then(data => ({ ...event, status: data.state, title: data.title }))
                } else {
                    return event
                }
            });
            Promise.all([...events]).then(events => dispatch(handleSetEvents(events)));
        })
};

export const fetchFollowers = followersUrl => dispatch => {
    return fetch(`${followersUrl}${accessToken}`)
        .then(res => res.json())
        .then(followers => dispatch(saveFollowers(followers)));
};

export const handleLogout = () => {
    localStorage.setItem("ghDevLoggedIn", false);
    return {
        type: APP_ACTIONS.USER_LOGOUT
    };
};

export const handleSetEvents = events => ({
    type: APP_ACTIONS.SET_EVENTS,
    payload: events
});

export const toggleForkEventsFilter = () => ({
    type: APP_ACTIONS.TOGGLE_FORK_EVENTS
});

export const togglePullRequestEventsFilter = () => ({
    type: APP_ACTIONS.TOGGLE_PULL_REQUEST_EVENTS
});