import React from "react";
import "./ChatList.css";
import ChatListItems from "./ChatListItems";

const ChatList = ({ allChatUsers, query, setActiveHandler, active }) => {
    return (
        <div className="chat-list__container">
            <h2 className="chat-list__name">Chats</h2>
            <div className="chatlist__items__wrapper">
                <div className="chatlist__items">
                    {allChatUsers
                        .filter((item) =>
                            item.name.toLowerCase().includes(query)
                        )
                        .map((item, index) => {
                            return (
                                <ChatListItems
                                    name={item.name}
                                    key={item.id}
                                    isOnline={item.isOnline ? "active" : ""}
                                    image={item.image}
                                    setActiveHandler={setActiveHandler}
                                    id={item.id}
                                    active={item.id === active ? "active" : ""}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default ChatList;
