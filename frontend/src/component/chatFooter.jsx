import React from 'react';

function ChatFooter({ sendMessage, message, messageChange }) {
  return (
    <form onSubmit={ sendMessage } className="chat-footer-form">
      <label htmlFor="message">
        Send message:
          <input
            value={ message }
            type="text"
            name="message"
            placeholder="message"
            onChange={ messageChange }
          />
      </label>
        <button type="button" onClick={ sendMessage }>
          Send message
        </button>
    </form>
  )
}

export default ChatFooter;
