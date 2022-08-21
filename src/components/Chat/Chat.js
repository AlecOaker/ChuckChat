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
    jokeChat0,
    jokeChat1,
    jokeChat2,
    jokeChat3,
    jokeChat4,
    jokeChat5,
    active,
}) => {
    return (
        <div className="chat__container">
            <Header
                setSidebar={setSidebar}
                setChat={setChat}
                friendName={friendName}
                friendImage={friendImage}
            />
            <Body
                jokeChat={jokeChat}
                chatItms={chatItms}
                jokeChat0={jokeChat0}
                jokeChat1={jokeChat1}
                jokeChat2={jokeChat2}
                jokeChat3={jokeChat3}
                jokeChat4={jokeChat4}
                jokeChat5={jokeChat5}
                active={active}
            />
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
