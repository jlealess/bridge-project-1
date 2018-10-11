import React from 'react';
import Button from './Button';
import FollowingList from './FollowingList';

export default ({
    avatar_url,
    login,
    handleLogout,
    followers
}) => (
    <div className="user">
        <div className="user__info">
            <img src={avatar_url ? avatar_url : "./assets/user-avatar.png"} alt={login ? login : ""} className="profile__avatar" />
            <h2 className="heading heading--light heading--secondary mb-0">Hello, {login}</h2>
            <Button
                handleClick={handleLogout}
                value="Logout"
                className="full-width"
            />
        </div>
        <FollowingList followers={followers} />
    </div>
);