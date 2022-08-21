import React from "react";

const Footer = ({ msg, setMsg, sendMsg, getChuckJoke }) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (msg) {
            sendMsg();
            setTimeout(() => {
                getChuckJoke();
            }, 3000);
        }
    };
    return (
        <div className="content__footer">
            <form onSubmit={onSubmitHandler}>
                <div className="sendNewMessage">
                    <input
                        type="text"
                        placeholder="Type your message"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                    />
                    <button className="btnSendMsg" id="sendMsgBtn">
                        <img
                            className="chat__footer__send__icon"
                            src="/image/send.svg"
                            alt="send"
                            type="submit"
                        />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Footer;
