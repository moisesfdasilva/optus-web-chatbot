import React from 'react';

function Login() {
  return (
    <div>
      <form>
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
          Login
        </button>
        <button
          type="button"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Login;
