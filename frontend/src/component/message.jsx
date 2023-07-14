import React from 'react';

function Message({ date, user, message }) {
  return (
    <div data-testid={ user === 'boot' ? 'boot' : 'user' }>
      <p>{ `${date}, ${user}` }</p>
      <p>{ message }</p>
    </div>
  )
}

export default Message;
