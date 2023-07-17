import React from 'react';
import { Link } from 'react-router-dom';

function Transition() {
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
        <p>...</p>
        <p>...</p>
      </main>
    </>
  );
}

export default Transition;
