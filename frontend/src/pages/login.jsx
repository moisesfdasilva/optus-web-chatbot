import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import GeneralHeader from '../component/generalHeader';

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
    <>
      <GeneralHeader/>
      <main className="login-main">
        <form>
          <label htmlFor="username">
            <p className="login-form-input-text">
              Username:
            </p>
            <input
              value={ inputLogin.username }
              type="text"
              name="username"
              placeholder="username"
              data-testid="lgn-username"
              onChange={ inputLoginChange }
            />
          </label>
          <label htmlFor="password">
            <p className="login-form-input-text">
              Password:
            </p>
            <input
              value={ inputLogin.password }
              type="password"
              name="password"
              placeholder="password"
              data-testid="lgn-password"
              onChange={ inputLoginChange }
            />
          </label>
          <label htmlFor="buttons" className="login-buttons">
            <button
              type="button"
              data-testid="lgn-btn-login"
              onClick={ login }
            >
              Login
            </button>
            <button
              type="button"
              data-testid="lgn-btn-create"
              onClick={ goToRegisterPage }
            >
              Create Account
            </button>
          </label>
        </form>
      </main>
      <div className="register-div-error">
        { inputLogin.userNotFound && (
          <p data-testid="lgn-message-incUserOrPass">
            Incorrect username or password.
          </p>
        )}
      </div>
    </>
  );
}

export default Login;
