import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

function Register() {
  const history = useHistory();

  const [registry, setRegistry] = useState({
    email: '',
    username: '',
    password: '',
    repeatPass: '',
    disableSaveButton: true,
    errorMessages: [],
  });

  const registryChange = ({ target }) => {
    const { name, value } = target;
    setRegistry((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const verifyFilledFields = () => {
    const { email, username, password, repeatPass } = registry;
    const isAllFilled = (email && username && password && repeatPass);
    setRegistry((prevState) => ({ ...prevState, disableSaveButton: !isAllFilled }));
  }

  useEffect(() => verifyFilledFields(), [registry.password, registry.repeatPass]);

  const verifyRegistry = () => {
    const { email, username, password, repeatPass } = registry;
    const regex = /\S+@\S+\.\S+/;
    const minUserLength = 3;
    const minPassLength = 5;
    const message = [];

    if (!(email && regex.test(email))) {
      message.push('incorrect email type.');
    }

    if (!(username.length > minUserLength)) {
      message.push('username length is shorter than 4.');
    }

    if (!(password.length > minPassLength)) {
      message.push('password length is shorter than 6.');
    }

    if (!(password === repeatPass)) {
      message.push('password has not been confirmed.');
    }

    setRegistry((prevState) => ({ ...prevState, errorMessages: message }));

    return message.length;
  }

  const saveRegistry = async () => {
    const messages = verifyRegistry();
    if (messages === 0) {
      const { email, username, password } = registry;
      const { data } = await api.post('/user/new', { email, username, password });
      console.log(data);

      const { data: { user, token } } = await api.post('/user/login', { username, password });
      sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('token', JSON.stringify(token));

      history.push('/transition');
    }
  }

  return (
    <>
      <header>
        <h1>Optus</h1>
      </header>
      <form>
        <label htmlFor="email">
          Email:
          <input
            value={ registry.email }
            type="email"
            name="email"
            placeholder="email"
            onChange={ registryChange }
          />
        </label>
        <label htmlFor="username">
          Username:
          <input
            value={ registry.username }
            type="text"
            name="username"
            placeholder="username"
            onChange={ registryChange }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            value={ registry.password }
            type="password"
            name="password"
            placeholder="password"
            onChange={ registryChange }
          />
        </label>
        <label htmlFor="repeatPass">
          Repeat your password
          <input
            value={ registry.repeatPass }
            type="password"
            name="repeatPass"
            placeholder="password"
            onChange={ registryChange }
          />
        </label>
        <button
          type="button"
          onClick={ saveRegistry }
          disabled={ registry.disableSaveButton }
        >
          Create
        </button>
      </form>
      <ol>
        { registry.errorMessages.map((message, index) => (
          <li key={ index }>{ message }</li>)) }
      </ol>
    </>
  );
}

export default Register;
