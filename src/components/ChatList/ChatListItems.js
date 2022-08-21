import React from "react";
import Avatar from "./Avatar";

const ChatListItems = ({
    name,
    image,
    active,
    isOnline,
    setActiveHandler,
    id,
}) => {
    return (
        <button
            className={`no-style__button chatlist__item ${active}`}
            onClick={() => setActiveHandler(id)}
        >
            <div className="avatar__user-name__phrase__wrapper">
                <Avatar image={image} isOnline={isOnline} />
                <div className="user-name__phrase__wrapper">
                    <p>{name}</p>
                    <span className="last-phrase">ok, google</span>
                </div>
            </div>
            <div className="activeTime__wrapper">
                <span className="activeTime">Jun 12, 2017</span>
            </div>
        </button>
    );
};

export default ChatListItems;
