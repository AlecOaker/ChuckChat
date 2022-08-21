import React from "react";
import "./ChatList.css";
import ChatListItems from "./ChatListItems";
import * as _ from "lodash";

const ChatList = ({
    query,
    setActiveHandler,
    active,
    lastPhrase,
    lastTime,
    allChaters,
}) => {
    return (
        <div className="chat-list__container">
            <h2 className="chat-list__name">Chats</h2>
            <div className="chatlist__items__wrapper">
                <div className="chatlist__items">
                    {allChaters
                        .sort((a, b) => a.chat.time > b.chat.time)
                        .filter((item) =>
                            item
                                ? item.name.toLowerCase().includes(query)
                                : null
                        )
                        .map((item) => {
                            return (
                                <ChatListItems
                                    name={item.name}
                                    key={item.id}
                                    isOnline={item.isOnline ? "active" : ""}
                                    image={item.image}
                                    setActiveHandler={setActiveHandler}
                                    id={item.id}
                                    active={item.id === active ? "active" : ""}
                                    lastPhrase={lastPhrase}
                                    lastTime={lastTime}
                                    activeUser={active}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default ChatList;
