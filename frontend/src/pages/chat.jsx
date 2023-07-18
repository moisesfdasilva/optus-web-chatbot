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

  return (
    <>
      <GeneralHeader/>
      <main>
        { messages.map((msg, index) => (
          <Message
            key={ index }
            date={ msg.date }
            user={ msg.user }
            message={ msg.message }
          />
        )) }
      </main>
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
