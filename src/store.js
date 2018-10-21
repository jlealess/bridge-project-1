import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { APP_ACTIONS } from "./constants";

const INITIAL_APP_STATE = {
    username: "",
    profile: {},
    followers: [],
    events: [],
    loggedIn: false,
    loginErrorMessage: "",
    filters: {
        ForkEvent: true,
        PullRequestEvent: true,
    }
}

const rootReducer = (state = INITIAL_APP_STATE, action) => {
    switch(action.type) {
        case APP_ACTIONS.FETCH_FOLLOWERS: {
            return {
                ...state,
                followers: action.payload
            }
        }
        case APP_ACTIONS.SET_EVENTS: {
            return {
                ...state,
                events: action.payload
            }
        }
        case APP_ACTIONS.SET_LOGIN_ERROR: {
            return {
                ...state,
                loginErrorMessage: action.payload,
            }
        }
        case APP_ACTIONS.SET_USERNAME: {
            return {
                ...state,
                loginErrorMessage: "",
                username: action.payload,
            }
        }
        case APP_ACTIONS.TOGGLE_FORK_EVENTS: {
            return {
                ...state,
                filters: {...state.filters, ForkEvent: !state.filters.ForkEvent }
            }
        }
        case APP_ACTIONS.TOGGLE_PULL_REQUEST_EVENTS: {
            return {
                ...state,
                filters: { ...state.filters, PullRequestEvent: !state.filters.PullRequestEvent }
            }
        }
        case APP_ACTIONS.USER_LOGIN: {
            return {
                ...state,
                loggedIn: true,
                loginErrorMessage: "",
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
        default: {
            return state;
        }
    }
} 

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);