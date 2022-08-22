import React, { useEffect, useRef } from "react";
import ChatItem from "./ChatItem";

const Body = ({
    chatItms,
    jokeChat0,
    jokeChat1,
    jokeChat2,
    jokeChat3,
    jokeChat4,
    jokeChat5,
    active,
}) => {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [jokeChat0, jokeChat1, jokeChat2, jokeChat3, jokeChat4, jokeChat5]);
    return (
        <div className="content__body">
            <div className="chat__items">
                {active === 0
                    ? jokeChat0.map((itm) => {
                          return (
                              <ChatItem
                                  key={itm.id}
                                  msg={itm.msg}
                                  image={chatItms.image}
                                  type={itm.type}
                                  time={itm.time}
                              />
                          );
                      })
                    : null}
                {active === 1
                    ? jokeChat1.map((itm) => {
                          return (
                              <ChatItem
                                  key={itm.id}
                                  msg={itm.msg}
                                  image={chatItms.image}
                                  type={itm.type}
                                  time={itm.time}
                              />
                          );
                      })
                    : null}
                {active === 2
                    ? jokeChat2.map((itm) => {
                          return (
                              <ChatItem
                                  key={itm.id}
                                  msg={itm.msg}
                                  image={chatItms.image}
                                  type={itm.type}
                                  time={itm.time}
                              />
                          );
                      })
                    : null}
                {active === 3
                    ? jokeChat3.map((itm) => {
                          return (
                              <ChatItem
                                  key={itm.id}
                                  msg={itm.msg}
                                  image={chatItms.image}
                                  type={itm.type}
                                  time={itm.time}
                              />
                          );
                      })
                    : null}
                {active === 4
                    ? jokeChat4.map((itm) => {
                          return (
                              <ChatItem
                                  key={itm.id}
                                  msg={itm.msg}
                                  image={chatItms.image}
                                  type={itm.type}
                                  time={itm.time}
                              />
                          );
                      })
                    : null}
                {active === 5
                    ? jokeChat5.map((itm) => {
                          return (
                              <ChatItem
                                  key={itm.id}
                                  msg={itm.msg}
                                  image={chatItms.image}
                                  type={itm.type}
                                  time={itm.time}
                              />
                          );
                      })
                    : null}
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default Body;
