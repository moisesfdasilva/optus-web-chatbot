import React from 'react';

function Register() {
  return (
    <div>
      <form>
        <label htmlFor="fullname">
          Full Name:
          <input
            type="text"
            name="fullname"
            placeholder="full name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            placeholder="email"
          />
        </label>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            placeholder="username"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            placeholder="password"
          />
        </label>
        <button
          type="button"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default Register;
