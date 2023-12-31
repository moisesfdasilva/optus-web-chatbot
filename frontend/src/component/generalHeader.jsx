import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function GeneralHeader() {
  const history = useHistory();

  const [page] = useState(history.location.pathname);

  const logout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    return history.push('/');
  };

  const toGoBack = () => {
    if (page.includes('chat')) {
      return history.push('/transition');
    } else {
      return history.push('/');
    }
  };

  return (
    <header>
      <div>
        { (page.includes('register') || page.includes('chat')) && (
          <button
            type="button"
            data-testid="hdr-btn-return"
            onClick={ toGoBack }
            className="header-btn-goBack"
          >
            go back
          </button>
        )}
      </div>
      <div className="header-logo-div">
        <div className="header-logo">
          <p className="header-logo-name">
            Optus
          </p>
        </div>
        <div>
          <h2 className="header-title">
            Optus
          </h2>
          <p className="header-subtitle">
            typically replies in a day
          </p>
        </div>
      </div>
      <div>
        { !(page.includes('login') || page.includes('register')) && (
          <button
            type="button"
            data-testid="hdr-btn-logout"
            onClick={ logout }
            className="header-btn-logout"
          >
            logout
          </button>
        )}
      </div>
    </header>
  );
}

export default GeneralHeader;
