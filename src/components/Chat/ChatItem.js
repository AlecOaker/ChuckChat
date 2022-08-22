import React from "react";
import Avatar from "../ChatList/Avatar";

const ChatItem = ({ msg, image, type, time }) => {
    return (
        <div className={`chat__item ${type}`}>
            <div className="chat__item__content">
                <div className={`chat__msg ${type}`}>{msg}</div>
                <div className={`chat__meta ${type}`}>
                    <span>{time}</span>
                </div>
            </div>
            <div className={`chat__item__avatar__${type}`}>
                <Avatar isOnline="" image={image} />
            </div>
        </div>
    );
};

export default ChatItem;
