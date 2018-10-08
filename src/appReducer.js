import { accessToken } from './setup/keys';

const INITIAL_APP_STATE = {
    username: "",
    profile: {},
    followers: [],
    events: [],
    loggedIn: false,
}

const APP_ACTIONS = {
    SET_USERNAME: 'app/SET_USERNAME',
    SET_EVENTS: 'app/SET_EVENTS',
    USER_LOGIN: 'app/USER_LOGIN',
    USER_LOGOUT: 'app/USER_LOGOUT',
}

const getGithubUser = username => {
    return fetch(`https://api.github.com/users/${username}${accessToken}`);
}

const setUserInLocalStorage = username => {
    localStorage.setItem("ghDevUsername", username);
    localStorage.setItem("ghDevLoggedIn", true);
}

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
                .then(data =>  ({...event, status: data.state, title: data.title}))
              } else {
                return event
              }
            });
              Promise.all([...events]).then(events => dispatch(handleSetEvents(events)));
          })
};

export const setUserFromLocalStorage = username => ({
    type: APP_ACTIONS.SET_USERNAME,
    payload: username,
});

export const handleChangeUsername = e => ({
    type: APP_ACTIONS.SET_USERNAME,
    payload: e.target.value,
});

export const handleLogin = profile => ({ 
    type: APP_ACTIONS.USER_LOGIN, 
    payload: profile 
});

export const handleLogout = () => {
    localStorage.setItem("ghDevLoggedIn", false);
    return {
        type: APP_ACTIONS.USER_LOGOUT
    }
};

export const handleSetEvents = events => ({
    type: APP_ACTIONS.SET_EVENTS,
    payload: events
});

export const loginUser = username => dispatch => {
    if (!localStorage.getItem("ghDevUsername")) {
        setUserInLocalStorage(username);
    };
    return getGithubUser(username)
      .then(res => res.json())
      .then(profile => dispatch(handleLogin(profile)))
}

export const appReducer = (state = INITIAL_APP_STATE, action) => {
    switch(action.type) {
        case APP_ACTIONS.SET_USERNAME: {
            return {
                ...state,
                username: action.payload
            }
        }
        case APP_ACTIONS.USER_LOGIN: {
            return {
                ...state,
                loggedIn: true,
                profile: action.payload
            }
        }
        case APP_ACTIONS.USER_LOGOUT: {
            return {
                ...state,
                profile: {},
                loggedIn: false
            }
        }
        case APP_ACTIONS.SET_EVENTS: {
            return {
                ...state,
                events: action.payload
            }
        }
        default: {
            return state;
        }
    }
} 