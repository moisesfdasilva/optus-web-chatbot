import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

function Login() {
  const history = useHistory();

  const [inputLogin, setInputLogin] = useState({
    username: '',
    password: '',
    userNotFound: false,
  });

  const inputLoginChange = ({ target }) => {
    const { name, value } = target;
    setInputLogin((prevState) => ({
      ...prevState,
      userNotFound: false,
      [name]: value,
    }));
  };

  const goToRegisterPage = () => {
    history.push('/register');
  }

  const login = async () => {
    const { username, password } = inputLogin;

    try {
      const { data } = await api.post('/user/login', { username, password });
      const { user, token } = data;
      sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('token', JSON.stringify(token));
      history.push('/transition');
    } catch {
      setInputLogin((prevState) => ({ ...prevState, userNotFound: true }));
    }
  }

  return (
    <main>
      <form>
        <label htmlFor="username">
          Username:
          <input
            value={ inputLogin.username }
            type="text"
            name="username"
            placeholder="username"
            onChange={ inputLoginChange }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            value={ inputLogin.password }
            type="password"
            name="password"
            placeholder="password"
            onChange={ inputLoginChange }
          />
        </label>
        <button type="button" onClick={ login }>
          Login
        </button>
        <button type="button" onClick={ goToRegisterPage }>
          Create Account
        </button>
      </form>
      <div>
        { inputLogin.userNotFound && <p>Incorrect username or password.</p> }
      </div>
    </main>
  );
}

export default Login;
