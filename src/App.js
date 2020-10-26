import React, { useState, useEffect } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVerIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'fulado', image:'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title: 'Beltrano', image:'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title: 'Cicrano', image:'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 4, title: 'Chata', image:'https://www.w3schools.com/howto/img_avatar2.png'},
  ]);
  const [activeChat, setActiveChat] = useState({});
  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header-avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon styled={{ color: '#919191' }} />
            </div>
            <div className="header-btn">
              <ChatIcon styled={{ color: '#919191' }} />
            </div>
            <div className="header-btn">
              <MoreVerIcon styled={{ color: '#919191' }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" styled={{ color: '#919191' }} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>
        <div className="chat-list">
          {chatList.map((item, key) => (
            <ChatListItem
              key={key}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>
      <div className="content-area">
        {activeChat.chatId !== undefined &&
          <ChatWindow />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}

export default App;
