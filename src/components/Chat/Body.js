import React, { useEffect, useRef } from "react";
import ChatItem from "./ChatItem";

const Body = ({ jokeChat, chatItms }) => {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [jokeChat]);

    return (
        <div className="content__body">
            <div className="chat__items">
                {jokeChat.map((itm) => {
                    return (
                        <ChatItem
                            key={itm.id}
                            msg={itm.msg}
                            image={chatItms.image}
                            type={itm.type}
                            time={itm.time}
                        />
                    );
                })}
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default Body;
