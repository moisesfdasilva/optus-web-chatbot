import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Message({ user, message }) {
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
    <div className={ user === 'boot' ? 'msg-boot' : 'msg-user' }>
      { !Array.isArray(message) && (
        <p className="msg-simple-text">{ message }</p>) }
      { Array.isArray(message) && <div>
        <div className="msg-boot-text">
          <p>
            <button
              name="btn1"
              value= { enebleInfo.btn1 }
              onClick={ changeDisableBtn }
              className="msg-boot-btn-options"
            >
              Do you want to apply for a loan?
            </button>
            { enebleInfo.btn1 && <ul className="msg-boot-text-options">
              <li>Nubank loans: Transparent, safe and on your terms</li>
              <li>
                <Link
                  to={{ pathname: "https://nubank.com.br/en/loans/" }}
                  target="_blank"
                >
                  https://nubank.com.br/en/loans/
                </Link>
              </li>
            </ul> }
          </p>
          <p>
            <button
              name="btn2"
              value= { enebleInfo.btn2 }
              onClick={ changeDisableBtn }
              className="msg-boot-btn-options"
              data-testid="msg-btn-loanConditions"
            >
              Loan conditions
            </button>
            { enebleInfo.btn2 && <ul className="msg-boot-text-options">
              <li>Nubank loan: how to simulate, hire and manage</li>
              <li>
                <Link
                  to={{ pathname: "https://blog.nubank.com.br/emprestimo-nubank-simular-contratar/" }}
                  target="_blank"
                >
                  https://blog.nubank.com.br/emprestimo-nubank-simular-contratar/
                </Link>
              </li>
            </ul> }
          </p>
          <p>
            <button
              name="btn3"
              value= { enebleInfo.btn3 }
              onClick={ changeDisableBtn }
              className="msg-boot-btn-options"
            >
              Help
            </button>
            { enebleInfo.btn3 && <ul className="msg-boot-text-options">
              <li className="msg-boot-text-options-li">Nubank loan: loan questions</li>
              <li>
                <Link
                  to={{ pathname: "https://blog.nubank.com.br/produtos/emprestimo-nubank/" }}
                  target="_blank"
                >
                  https://blog.nubank.com.br/produtos/emprestimo-nubank/
                </Link>
              </li>
            </ul> }
          </p>
        </div>
      </div> }
    </div>
  )
}

export default Message;
