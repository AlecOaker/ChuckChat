import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import ChatList from "./components/ChatList/ChatList";
import ProfileInfo from "./components/ProfileInfo";

const chatItms0 = [
    {
        key: 1,
        type: "me",
        msg: "Hi Chuck, How are you?",
    },
    {
        key: 2,
        type: "other",
        msg: "I am fine. And my wife is also good.",
    },
    {
        key: 3,
        type: "me",
        msg: "May I chat something to you and you will tell me some interesting facts about you, but only real?",
    },
    {
        key: 4,
        type: "other",
        msg: "go ahead",
    },
];
const chatItms1 = [
    {
        key: 1,
        type: "me",
        msg: "Hi Tim, How are you?",
    },
    {
        key: 2,
        type: "other",
        msg: "I am fine. And my wife is also good.",
    },
    {
        key: 3,
        type: "other",
        msg: "What about you?",
    },
    {
        key: 4,
        type: "me",
        msg: "Awesome these days.",
    },
    {
        key: 5,
        type: "other",
        msg: "Finally. What's the plan?",
    },
    {
        key: 6,
        type: "me",
        msg: "what plan mate?",
    },
    {
        key: 7,
        type: "other",
        msg: "I'm taliking about the tutorial",
    },
];
const chatItms2 = [
    {
        key: 1,
        type: "me",
        msg: "Hi Tim, How are you?",
    },
    {
        key: 2,
        type: "other",
        msg: "I am fine. And my wife is also good.",
    },
    {
        key: 3,
        type: "other",
        msg: "What about you?",
    },
    {
        key: 4,
        type: "me",
        msg: "Awesome these days.",
    },
    {
        key: 5,
        type: "other",
        msg: "Finally. What's the plan?",
    },
    {
        key: 6,
        type: "me",
        msg: "what plan mate?",
    },
    {
        key: 7,
        type: "other",
        msg: "I'm taliking about the tutorial",
    },
];
const chatItms3 = [
    {
        key: 1,
        type: "me",
        msg: "Hi Tim, How are you?",
    },
    {
        key: 2,
        type: "other",
        msg: "I am fine. And my wife is also good.",
    },
    {
        key: 3,
        type: "other",
        msg: "What about you?",
    },
    {
        key: 4,
        type: "me",
        msg: "Awesome these days.",
    },
    {
        key: 5,
        type: "other",
        msg: "Finally. What's the plan?",
    },
    {
        key: 6,
        type: "me",
        msg: "what plan mate?",
    },
    {
        key: 7,
        type: "other",
        msg: "I'm taliking about the tutorial",
    },
];
const chatItms4 = [
    {
        key: 1,
        type: "me",
        msg: "Hi Tim, How are you?",
    },
    {
        key: 2,
        type: "other",
        msg: "I am fine. And my wife is also good.",
    },
    {
        key: 3,
        type: "other",
        msg: "What about you?",
    },
    {
        key: 4,
        type: "me",
        msg: "Awesome these days.",
    },
    {
        key: 5,
        type: "other",
        msg: "Finally. What's the plan?",
    },
    {
        key: 6,
        type: "me",
        msg: "what plan mate?",
    },
    {
        key: 7,
        type: "other",
        msg: "I'm taliking about the tutorial",
    },
];
const chatItms5 = [
    {
        key: 1,
        type: "me",
        msg: "Hi Tim, How are you?",
    },
    {
        key: 2,
        type: "other",
        msg: "I am fine. And my wife is also good.",
    },
    {
        key: 3,
        type: "other",
        msg: "What about you?",
    },
    {
        key: 4,
        type: "me",
        msg: "Awesome these days.",
    },
    {
        key: 5,
        type: "other",
        msg: "Finally. What's the plan?",
    },
    {
        key: 6,
        type: "me",
        msg: "what plan mate?",
    },
    {
        key: 7,
        type: "other",
        msg: "I'm taliking about the tutorial",
    },
];
const chatItms6 = [
    {
        key: 1,
        type: "me",
        msg: "Hi Tim, How are you?",
    },
    {
        key: 2,
        type: "other",
        msg: "I am fine. And my wife is also good.",
    },
    {
        key: 3,
        type: "other",
        msg: "What about you?",
    },
    {
        key: 4,
        type: "me",
        msg: "Awesome these days.",
    },
    {
        key: 5,
        type: "other",
        msg: "Finally. What's the plan?",
    },
    {
        key: 6,
        type: "me",
        msg: "what plan mate?",
    },
    {
        key: 7,
        type: "other",
        msg: "I'm taliking about the tutorial",
    },
];

const allChatUsers = [
    {
        image: "https://stuki-druki.com/aforizms/Chuck_Norris01.jpg",
        id: 0,
        name: "Chuck Norris",
        active: true,
        isOnline: true,
        chat: chatItms0,
    },
    {
        image: "https://cdn.allfamous.org/people/avatars/chuck-norris-hahr-allfamous.org.jpg",
        id: 1,
        name: "Norris Chuck",
        active: false,
        isOnline: true,
        chat: chatItms1,
    },
    {
        image: "https://resizing.flixster.com/eiZM5DxeQYIIKgdYXeuoMjZuizM=/300x300/v2/https://flxt.tmsimg.com/assets/p1603617_e_h9_aa.jpg",
        id: 2,
        name: "Walker Texas Ranger",
        active: false,
        isOnline: true,
        chat: chatItms2,
    },
    {
        image: "https://i.pinimg.com/564x/b9/17/36/b9173684a35d54071b17a69b9d3fd8c2.jpg",
        id: 3,
        name: "Cartoon Chuck",
        active: false,
        isOnline: false,
        chat: chatItms3,
    },
    {
        image: "https://i.pinimg.com/474x/d3/85/f0/d385f0a3255455705371a0bc0881177b.jpg",
        id: 4,
        name: "The Chuck Norris",
        active: false,
        isOnline: false,
        chat: chatItms4,
    },
    {
        image: "https://images.theabcdn.com/i/22077753/600x600/c",
        id: 5,
        name: "Cool Chuck",
        active: false,
        isOnline: true,
        chat: chatItms5,
    },
    {
        image: "https://arc-anglerfish-arc2-prod-cmg.s3.amazonaws.com/public/MPEXKWKZBVFNTG6UQEHQGOTVJA.jpg",
        id: 6,
        name: "Kick Norris",
        active: false,
        isOnline: true,
        chat: chatItms6,
    },
];

const time =
    (new Date().getHours() < 10
        ? "0" + new Date().getHours()
        : new Date().getHours()) +
    ":" +
    (new Date().getMinutes() < 10
        ? "0" + new Date().getMinutes()
        : new Date().getMinutes()) +
    " " +
    (new Date().getDate() < 10
        ? "0" + new Date().getDate()
        : new Date().getDate()) +
    "." +
    (new Date().getMonth() < 10
        ? "0" + new Date().getMonth()
        : new Date().getMonth()) +
    "." +
    new Date().getFullYear();

const uid = +new Date();

function App({ auth, firestore, user }) {
    const [isSidebar, setSidebar] = useState(true);
    const [isChat, setChat] = useState(true);

    const [query, setQuery] = useState("");

    const [active, setActive] = useState(0);

    const [msg, setMsg] = useState("");
    const [joke, setJoke] = useState("");

    const [jokeChat, setJokeChat] = useState(
        JSON.parse(localStorage.getItem("myMessages")) ||
            allChatUsers[active].chat
    );
    console.log(allChatUsers[active].chat);
    const setActiveHandler = (id) => {
        setActive(id);
    };

    const chatListItemHandler = (value) => {
        setQuery(value.toLowerCase());
    };

    const sendMsg = () => {
        const msgs = {
            id: uid,
            user: "me",
            msg: msg,
            time: time,
            type: "me",
        };
        setJokeChat((prev) => {
            return [...prev, msgs];
        });
        setMsg("");
    };

    const getChuckJoke = async () => {
        let response = await fetch("https://api.chucknorris.io/jokes/random");
        if (response.ok) {
            let data = await response.json();
            const jokes = {
                id: data.id,
                image: data.icon_url,
                user: "Chuck Norris",
                msg: data.value,
                time: time,
                type: "other",
            };
            setJokeChat((prev) => {
                return [...prev, jokes];
            });
        }
    };
    console.log(jokeChat);
    const jokeChatLength = jokeChat.length - 1;
    const lastPhrase = jokeChat[jokeChatLength].msg;
    const lastTime = jokeChat[jokeChatLength].time;
    console.log(lastPhrase, lastTime);
    // localStorage.setItem("myMessages", JSON.stringify(jokeChat));
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
                                    jokeChat={jokeChat}
                                    chatItms={item}
                                    msg={msg}
                                    setMsg={setMsg}
                                    sendMsg={sendMsg}
                                />
                            );
                        })}
            </div>
        </div>
    );
}

export default App;
