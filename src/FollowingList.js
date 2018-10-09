import React from "react";

export default ({ followers }) => (
    <div className="followers">
        <h2>My followers</h2>
        <ul className="followers__list">
            {followers.length > 0 ? followers.map((follower, i) => (
                <li key={follower.id} className="follower">
                    <a href={follower.html_url}>
                        <img src={follower.avatar_url} alt={`${follower.login}'s avatar`} className="follower__avatar" />
                    </a>
                </li>
            )) : <p>No followers yet</p>}
        </ul>
    </div>
);
