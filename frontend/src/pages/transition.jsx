import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function Transition() {
  const [previousMsg, setPreviousMsg] = useState({
    messages: [],
  });

  useEffect(() => {
    const getAllMessages = async () => {
      const { data } = await api.get('/chat/user/1/all');
      console.log(data);
      setPreviousMsg({ messages: data });
    };
    getAllMessages();
  }, []);

  const toCsv = (msgs) => {
    let sheet = 'date, user, message';
    msgs.forEach((msg) => {
      sheet = `${ sheet }\n${ msg.date },${ msg.user },${ msg.message }`;
    });

    const csvContent = `data:text/csv;charset=utf-8, ${ sheet }`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link);

    link.click();
  }

  return (
    <>
      <header>
        <h1>Optus</h1>
      </header>
      <main>
        <Link to="/chat">
          <h2>new</h2>
        </Link>
        <h2>historic:</h2>
        <ul>
          { (previousMsg.messages.length === 0) && <li>NONE</li> }
          { (previousMsg.messages.length > 0) && previousMsg.messages.map((msg, index) => (
            <li key={ index }>
              <button type="button" onClick={ () => toCsv(msg.messages) }>
                {`Conversation user #${ msg.userId } -`}
                {` ${ msg.messages[msg.messages.length - 1].date }`}
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Transition;
