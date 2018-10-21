import React from 'react';
import Button from './Button';
import FollowingList from './FollowingList';

const UserProfile = ({
    avatarUrl,
    username,
    handleLogout,
    followers
}) => (
    <div className="user">
        <div className="user__info">
            <img src={avatarUrl ? avatarUrl : "./assets/user-avatar.png"} alt={username ? username : ""} className="profile__avatar" />
            <h2 className="heading heading--light heading--secondary mb-0">Hello, {username}</h2>
            <Button
                handleClick={handleLogout}
                value="Logout"
                className="full-width"
            />
        </div>
        <FollowingList followers={followers} />
    </div>
);

export default UserProfile;