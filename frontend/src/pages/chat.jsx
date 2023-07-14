import React, { useState } from 'react';
import Message from '../component/message';
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
    <div>
      <header>Optus</header>

      { messages.map((msg, index) => (
        < Message
          key={ index }
          date={ msg.date }
          user={ msg.user }
          message={ msg.message }
        />
      )) }

      <footer>
        <form onSubmit={ sendMessage }>
          <label htmlFor="message">
            Send message:
            <input
              value={ newMessage.message }
              type="text"
              name="message"
              placeholder="message"
              onChange={ messageChange }
            />
          </label>
          <button type="button" onClick={ sendMessage }>
            Create Account
          </button>
        </form>
      </footer>
    </div>
  );
}

export default Chat;
