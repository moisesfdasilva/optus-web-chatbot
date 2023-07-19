import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../services/api';
import GeneralHeader from '../component/generalHeader'

function Transition() {
  const history = useHistory();

  const [previousMsg, setPreviousMsg] = useState({
    messages: [],
  });

  const getAllMessages = async () => {
    const { id } = JSON.parse(sessionStorage.getItem('user'));
    const { data } = await api.get(`/chat/user/${id}/all`);
    setPreviousMsg({ messages: data });
  };

  const checkToken = async () => {
    try {
      const token = JSON.parse(sessionStorage.getItem('token'));
      await api.get('/user/verify', { headers: { Authorization: token } });
      await getAllMessages();
    } catch (err) {
      return history.push('/');
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const toCsv = (msgs, index) => {
    let sheet = 'date, user, message';
    msgs.forEach((msg) => {
      sheet = `${ sheet }\n${ msg.date },${ msg.user },${ msg.message }`;
    });

    const csvContent = `data:text/csv;charset=utf-8, ${ sheet }`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `conversation-${ index + 1 }.csv`);
    document.body.appendChild(link);

    link.click();
  }

  return (
    <>
      <GeneralHeader/>
      <main className="transition-main">
        <div data-testid="tsn-main">
          <Link to="/chat" data-testid="tsn-linkToChat">
            <h2>New Conversation</h2>
          </Link>
        </div>
        <div>
          <h2>Conversation history:</h2>
          <p>(Click to export)</p>
          <nav className="transition-historic-ul">
            { (previousMsg.messages.length === 0) && <p>EMPTY</p> }
            { (previousMsg.messages.length > 0) && previousMsg.messages.map((msg, index) => (
              <p key={ index }>
                <button type="button" onClick={ () => toCsv(msg.messages, index) }>
                  Conversation
                  {` ${ msg.messages[0].user }`}
                  {` #${ index + 1 } -`}
                  {` ${ msg.messages[msg.messages.length - 1].date }`}
                </button>
              </p>
            ))}
          </nav>
        </div>
      </main>
    </>
  );
}

export default Transition;
