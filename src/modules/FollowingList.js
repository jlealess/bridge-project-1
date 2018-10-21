import React from "react";

const FollowingList = ({ followers }) => (
    <div className="followers">
        <h2>My followers</h2>
        <ul className="followers__list">
            {followers.length ? followers.map((follower, i) => (
                <li key={follower.id} className="follower">
                    <a href={follower.html_url}>
                        <img src={follower.avatar_url} alt={`${follower.login}'s avatar`} className="follower__avatar" />
                    </a>
                </li>
            )) : <p>No followers yet</p>}
        </ul>
    </div>
);

export default FollowingList;
