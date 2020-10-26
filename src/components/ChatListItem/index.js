import React from 'react';
import './ChatListItem.css'

function ChatListItem({onClick,active}) {
    return (
        <div 
        className={`chatListItem ${active ? 'active': ''}`}
        onClick={onClick}
        >
            <img className="chatListItem-avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" />
            <div className="chatListItem-lines">
                <div className="chatListItem-line">
                    <div className="chatListItem-name">João Paulo Duarte</div>
                    <div className="chatListItem-date">19:26</div>
                </div>
                <div className="chatListItem-line">
                    <div className="chatListItem-lastMsg">
                        <p>Opa, tudo bem</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ChatListItem;