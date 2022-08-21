import React from "react";
import Body from "./Body";
import "./Chat.css";
import Header from "./Header";
import Footer from "./Footer";

const Chat = ({
    setSidebar,
    setChat,
    friendName,
    friendImage,
    getChuckJoke,
    jokeChat,
    chatItms,
    msg,
    setMsg,
    sendMsg,
}) => {
    return (
        <div className="chat__container">
            <Header
                setSidebar={setSidebar}
                setChat={setChat}
                friendName={friendName}
                friendImage={friendImage}
            />
            <Body jokeChat={jokeChat} chatItms={chatItms} />
            <Footer
                msg={msg}
                setMsg={setMsg}
                sendMsg={sendMsg}
                getChuckJoke={getChuckJoke}
            />
        </div>
    );
};

export default Chat;
