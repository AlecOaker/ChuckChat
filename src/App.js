import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import ChatList from "./components/ChatList/ChatList";
import ProfileInfo from "./components/ProfileInfo";
import { allChatUsers } from "./components/data/data";

const uid = +new Date();

function App({ auth, user }) {
    const [isSidebar, setSidebar] = useState(true);
    const [isChat, setChat] = useState(true);

    const [query, setQuery] = useState("");

    const [active, setActive] = useState(0);

    const [msg, setMsg] = useState("");
    const [joke, setJoke] = useState("");

    const [allChaters, setAllChaters] = useState(allChatUsers);

    const [jokeChat0, setJokeChat0] = useState(
        JSON.parse(localStorage.getItem("myMessages0")) || allChatUsers[0].chat
    );
    const [jokeChat1, setJokeChat1] = useState(
        JSON.parse(localStorage.getItem("myMessages1")) || allChatUsers[1].chat
    );
    const [jokeChat2, setJokeChat2] = useState(
        JSON.parse(localStorage.getItem("myMessages2")) || allChatUsers[2].chat
    );
    const [jokeChat3, setJokeChat3] = useState(
        JSON.parse(localStorage.getItem("myMessages3")) || allChatUsers[3].chat
    );
    const [jokeChat4, setJokeChat4] = useState(
        JSON.parse(localStorage.getItem("myMessages4")) || allChatUsers[4].chat
    );
    const [jokeChat5, setJokeChat5] = useState(
        JSON.parse(localStorage.getItem("myMessages5")) || allChatUsers[5].chat
    );
    const setActiveHandler = (id) => {
        setActive(id);
    };
    console.log();
    const chatListItemHandler = (value) => {
        setQuery(value.toLowerCase());
    };

    const sendMsg = () => {
        const newDate = new Date();
        const msgs = {
            key: uid,
            id: uid,
            user: "me",
            msg: msg,
            time: String(newDate).slice(4, 21),
            type: "me",
        };
        if (active === 0) {
            setJokeChat0((prev) => {
                return [...prev, msgs];
            });
        } else if (active === 1) {
            setJokeChat1((prev) => {
                return [...prev, msgs];
            });
        } else if (active === 2) {
            setJokeChat2((prev) => {
                return [...prev, msgs];
            });
        } else if (active === 3) {
            setJokeChat3((prev) => {
                return [...prev, msgs];
            });
        } else if (active === 4) {
            setJokeChat4((prev) => {
                return [...prev, msgs];
            });
        } else if (active === 5) {
            setJokeChat5((prev) => {
                return [...prev, msgs];
            });
        }

        setMsg("");
    };
    const getChuckJoke = async () => {
        let response = await fetch("https://api.chucknorris.io/jokes/random");
        if (response.ok) {
            let data = await response.json();
            const newDate = new Date();
            const jokes = {
                key: data.id,
                id: data.id,
                image: data.icon_url,
                user: "Chuck Norris",
                msg: data.value,
                time: String(newDate).slice(4, 21),
                type: "other",
            };
            if (active === 0) {
                setJokeChat0((prev) => {
                    return [...prev, jokes];
                });
            } else if (active === 1) {
                setJokeChat1((prev) => {
                    return [...prev, jokes];
                });
            } else if (active === 2) {
                setJokeChat2((prev) => {
                    return [...prev, jokes];
                });
            } else if (active === 3) {
                setJokeChat3((prev) => {
                    return [...prev, jokes];
                });
            } else if (active === 4) {
                setJokeChat4((prev) => {
                    return [...prev, jokes];
                });
            } else if (active === 5) {
                setJokeChat5((prev) => {
                    return [...prev, jokes];
                });
            }
        }
    };

    const lastPhrase = [
        jokeChat0[jokeChat0.length - 1].msg,
        jokeChat1[jokeChat1.length - 1].msg,
        jokeChat2[jokeChat2.length - 1].msg,
        jokeChat3[jokeChat3.length - 1].msg,
        jokeChat4[jokeChat4.length - 1].msg,
        jokeChat5[jokeChat5.length - 1].msg,
    ];
    const lastTime = [
        jokeChat0[jokeChat0.length - 1].time,
        jokeChat1[jokeChat1.length - 1].time,
        jokeChat2[jokeChat2.length - 1].time,
        jokeChat3[jokeChat3.length - 1].time,
        jokeChat4[jokeChat4.length - 1].time,
        jokeChat5[jokeChat5.length - 1].time,
    ];
    localStorage.setItem("myMessages0", JSON.stringify(jokeChat0));
    localStorage.setItem("myMessages1", JSON.stringify(jokeChat1));
    localStorage.setItem("myMessages2", JSON.stringify(jokeChat2));
    localStorage.setItem("myMessages3", JSON.stringify(jokeChat3));
    localStorage.setItem("myMessages4", JSON.stringify(jokeChat4));
    localStorage.setItem("myMessages5", JSON.stringify(jokeChat5));
    return (
        <div className="App">
            <div className="__main">
                {isSidebar && (
                    <div
                        className={`App__sidebar ${
                            isChat ? "hidden" : "width"
                        } `}
                    >
                        <ProfileInfo
                            chatListItemHandler={chatListItemHandler}
                            auth={auth}
                            user={user}
                        />
                        <ChatList
                            allChatUsers={allChatUsers}
                            query={query}
                            setActiveHandler={setActiveHandler}
                            active={active}
                            lastPhrase={lastPhrase}
                            lastTime={lastTime}
                            allChaters={allChaters}
                        />
                    </div>
                )}
                {isChat &&
                    allChatUsers
                        .filter((item) => item.id === active)
                        .map((item) => {
                            return (
                                <Chat
                                    key={item.id}
                                    friendImage={item.image}
                                    friendName={item.name}
                                    setSidebar={setSidebar}
                                    setChat={setChat}
                                    user={user}
                                    getChuckJoke={getChuckJoke}
                                    joke={joke}
                                    jokeChat={"jokeChat"}
                                    chatItms={item}
                                    msg={msg}
                                    setMsg={setMsg}
                                    sendMsg={sendMsg}
                                    jokeChat0={jokeChat0}
                                    jokeChat1={jokeChat1}
                                    jokeChat2={jokeChat2}
                                    jokeChat3={jokeChat3}
                                    jokeChat4={jokeChat4}
                                    jokeChat5={jokeChat5}
                                    active={active}
                                />
                            );
                        })}
            </div>
        </div>
    );
}

export default App;
