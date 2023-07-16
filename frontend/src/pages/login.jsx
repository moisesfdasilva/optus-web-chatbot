import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

function Login() {
  const [inputLogin, setInputLogin] = useState({
    username: '',
    password: '',
    userNotFound: false,
  });

  const history = useHistory();

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
      const { user } = data;
      console.log(user);
    } catch {
      setInputLogin((prevState) => ({ ...prevState, userNotFound: true }));
    }
    
  }

  //useEffect(() => checkToken(), []);

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
