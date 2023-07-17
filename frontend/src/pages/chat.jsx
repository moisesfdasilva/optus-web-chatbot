import React, { useState } from 'react';
import Message from '../component/message';
import ChatFooter from '../component/chatFooter';
import sendResponse from '../utils/sendResponse';

function Chat() {
  const [messages, setMessages] = useState([]);

  const [newMessage, setNewMessage] = useState({ date: '', user: '', message: '' });

  const messageChange = ({ target }) => {
    const { name, value } = target;
    setNewMessage((prevState) => ({ ...prevState, [name]: value }));
  };

  const sendMessage = async (e) => {
    e.preventDefault()

    const newDate = Date.now();
    const newUser = 'Ricochete';
    setMessages((prevState) => ([ ...prevState, { ...newMessage, date: newDate, user: newUser }]));

    const msg = newMessage.message;
    setNewMessage((prevState) => ({ ...prevState, message: '' }));

    const bootResponse = sendResponse(msg);
    setTimeout(() => {
      setMessages((prevState) => ([ ...prevState, bootResponse ]));
    }, 1000);
  };

  return (
    <>
      <header>
        <h1>Optus</h1>
      </header>

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

      <footer>
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
