import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GeneralHeader from '../component/generalHeader';
import Message from '../component/message';
import ChatFooter from '../component/chatFooter';
import sendResponse from '../utils/sendResponse';
import getCurrentDate from '../utils/getCurrentDate';
import api from '../services/api';

function Chat() {
  const history = useHistory();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({ date: '', user: '', message: '' });
  const [statusMsg, setStatusMsg] = useState(0);

  const messageChange = ({ target }) => {
    const { name, value } = target;
    setNewMessage((prevState) => ({ ...prevState, [name]: value }));
  };

  const sendMessage = async (e) => {
    e.preventDefault()

    const newDate = getCurrentDate();

    const { username } = JSON.parse(sessionStorage.getItem('user'));
    setMessages((prevState) => ([ ...prevState,
      { ...newMessage, date: newDate, user: username }]));

    const msg = newMessage.message;
    setNewMessage((prevState) => ({ ...prevState, message: '' }));

    const bootResponse = sendResponse(msg, statusMsg);

    if (bootResponse) {
      setTimeout(() => {
        setMessages((prevState) => ([ ...prevState, {
          date: bootResponse.date,
          user: bootResponse.user,
          message: bootResponse.message,
        }]));
        setStatusMsg(bootResponse.newStatus);
      }, 777);
    }
  };

  useEffect(() => {
    const saveMessages = async () => {
      if (statusMsg === 2) {
        const { id } = JSON.parse(sessionStorage.getItem('user'));
        await api.post(`/chat/new/${id}`, { messages });
        setTimeout(() => {
          history.push('/transition');
        }, 1000);
      }
    };
    saveMessages();
  }, [statusMsg]);

  useEffect(() => { window.scroll(0 , document.body.scrollHeight); }, [messages]);

  return (
    <>
      <GeneralHeader/>
      <main className="chat-main">
        <div className="chat-intro">
          <div className="chat-intro-logo">
            <p className="chat-intro-logo-name">
              Optus
            </p>
          </div>
          <div>
            <h2 className="chat-intro-title">
              Optus
            </h2>
            <p className="chat-intro-header-subtitle">
              419K people like this including 
              Maha Mourad and 35 friends
            </p>
            <p className="chat-intro-header-subtitle-bellow">
              Company
            </p>
          </div>
        </div>
        { messages.map((msg, index) => (
          <Message
            key={ index }
            date={ msg.date }
            user={ msg.user }
            message={ msg.message }
          />
        )) }
      </main>
      <span id="final"></span>
      <footer className="chat-footer">
        < ChatFooter
          sendMessage={ sendMessage }
          message={ newMessage.message }
          messageChange={ messageChange }
        />
      </footer>
    </>
  );
}

export default Chat;
