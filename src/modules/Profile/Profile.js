import React from "react";
import { connect } from "react-redux";
import EventList from "../EventList";
import UserProfile from "../UserProfile";
import {
  fetchEvents,
  fetchFollowers,
  handleLogout,
  toggleForkEventsFilter,
  togglePullRequestEventsFilter
} from "./Profile.actions";

class Profile extends React.Component {
  componentDidMount() {
      this.props.fetchEvents(`https://api.github.com/users/${this.props.username}/events`);
      this.props.fetchFollowers(this.props.followersUrl);
  }

  render() {
    const { avatarUrl, username, followers, events, filters, handleLogout, toggleForkEventsFilter, togglePullRequestEventsFilter } = this.props;
    return (
      <div className="profile">
        <UserProfile
          avatarUrl={avatarUrl}
          username={username}
          handleLogout={handleLogout}
          followers={followers}
        />
        <EventList
          events={events}
          filters={filters}
          toggleForkEventsFilter={toggleForkEventsFilter}
          togglePullRequestEventsFilter={togglePullRequestEventsFilter}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  avatarUrl: state.profile.avatar_url,
  events: state.events,
  filters: state.filters,
  followers: state.followers,
  followersUrl: state.profile.followers_url,
  username: state.username,
});

const mapDispatchToProps = {
  fetchEvents,
  fetchFollowers,
  handleLogout,
  toggleForkEventsFilter,
  togglePullRequestEventsFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
