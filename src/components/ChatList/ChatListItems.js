import React from "react";
import Avatar from "./Avatar";

const ChatListItems = ({
    name,
    image,
    isOnline,
    setActiveHandler,
    id,
    active,
    lastTime,
    lastPhrase,
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
                    <span className="last-phrase">
                        {lastPhrase[id] && lastPhrase[id].slice(0, 25)}
                        {lastPhrase[id] && lastPhrase[id].length > 25 && "..."}
                    </span>
                </div>
            </div>
            <div className="activeTime__wrapper">
                <span className="activeTime">
                    {lastTime[id] && lastTime[id].slice(0, 12)}
                </span>
            </div>
        </button>
    );
};

export default ChatListItems;
