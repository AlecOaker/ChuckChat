import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./ChatList/Avatar";

import "./ProfileInfo.css";

const ProfileInfo = ({ chatListItemHandler, auth, user }) => {
    return (
        <div className="profile-info__container">
            <div className="profile-info__avatar__wrapper">
                <Avatar image={user.photoURL} isOnline="active" />
                <Link to="/">
                    <button
                        className="profile-info__exit__button"
                        onClick={() => auth.signOut()}
                    >
                        <img
                            className="profile-info__exit__icon"
                            src="/image/exit.svg"
                            alt=""
                        />
                    </button>
                </Link>
            </div>
            <div className="profile-info__input__wrapper">
                <img
                    className="profile-info__input__search__icon
                    "
                    src="/image/search.svg"
                    alt=""
                />
                <input
                    className="profile-info__input"
                    type="text"
                    placeholder="Search or start new chat"
                    onChange={(e) => chatListItemHandler(e.target.value)}
                />
            </div>
        </div>
    );
};

export default ProfileInfo;
