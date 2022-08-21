import React from "react";

const Avatar = ({ image, isOnline }) => {
    return (
        <div className="avatar">
            <div className="avatar-img">
                <img src={image} alt="#" />
            </div>
            <img
                className={`profile-info__avatar__${isOnline}`}
                src="/image/check.svg"
                alt="online"
            />
        </div>
    );
};

export default Avatar;
