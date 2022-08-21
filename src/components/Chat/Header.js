import Avatar from "../ChatList/Avatar";

const Header = ({ setSidebar, setChat, friendName, friendImage }) => {
    const openSidebarHandler = () => {
        setSidebar(true);
        setChat(false);
    };
    return (
        <div className="content__header">
            <div className="current-chatting-user">
                {/* button is appeared on tablets and phones */}
                <button
                    id="backBtn"
                    className="back__less-925"
                    onClick={openSidebarHandler}
                >
                    <img src="/image/back.svg" alt="back" />
                </button>
                <Avatar isOnline="active" image={friendImage} />
                <p>{friendName}</p>
            </div>
        </div>
    );
};

export default Header;
