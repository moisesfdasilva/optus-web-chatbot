import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Message({ date, user, message }) {
  const [enebleInfo, setEnebleInfo] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
  });

  const changeDisableBtn = ({ target }) => {
    const { name, value } = target;
    const newState = value === 'true' ? false : true;
    setEnebleInfo((prevState) => ({ ...prevState, [name]: newState }));
  }

  return (
    <div data-testid={ user === 'boot' ? 'boot' : 'user' }>
      <p>{ `${date}, ${user}` }</p>
      <p>{ message }</p>
      { Array.isArray(message) && <div>
        <p>{ `${date}, ${user}` }</p>
        <ul>
          <li>
            <button
              name="btn1"
              value= { enebleInfo.btn1 }
              onClick={ changeDisableBtn }
            >
              Do you want to apply for a loan?
            </button>
            { enebleInfo.btn1 && <div>
              <p>Nubank loans: Transparent, safe and on your terms.</p>
              <Link
                to={{ pathname: "https://nubank.com.br/en/loans/" }}
                target="_blank"
              >
                https://nubank.com.br/en/loans/
              </Link>
            </div> }
          </li>
          <li>
            <button
              name="btn2"
              value= { enebleInfo.btn2 }
              onClick={ changeDisableBtn }
            >
              Loan conditions
            </button>
            { enebleInfo.btn2 && <div>
              <p>Nubank loan: how to simulate, hire and manage</p>
              <Link
                to={{ pathname: "https://blog.nubank.com.br/emprestimo-nubank-simular-contratar/" }}
                target="_blank"
              >
                https://blog.nubank.com.br/emprestimo-nubank-simular-contratar/
              </Link>
            </div> }
          </li>
          <li>
            <button
              name="btn3"
              value= { enebleInfo.btn3 }
              onClick={ changeDisableBtn }
            >
              Help
            </button>
            { enebleInfo.btn3 && <div>
              <p>Nubank loan: loan questions</p>
              <Link
                to={{ pathname: "https://blog.nubank.com.br/produtos/emprestimo-nubank/" }}
                target="_blank"
              >
                https://blog.nubank.com.br/produtos/emprestimo-nubank/
              </Link>
            </div> }
          </li>
        </ul>
      </div> }
    </div>
  )
}

export default Message;
