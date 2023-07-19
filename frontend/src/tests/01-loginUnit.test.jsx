import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './util/renderWithRouter';
import App from '../App';
import api from '../services/api';
import { outputLoginMock } from './mock/loginMock';

describe('1. Testes da tela de Login:', () => {
  it(`1.1. Verificação do redirecionamento para a tela transition ao logar com usuário 
  e senha válidos.`, async () => {
    const mockLogin = jest.spyOn(api, 'post');
    mockLogin.mockImplementation(() => Promise.resolve(outputLoginMock));

    const { history } =renderWithRouter(
      <App />
    );

    const inputUsername = screen.getByTestId('lgn-username');
    const inputPassword = screen.getByTestId('lgn-password');
    const loginButton = screen.getByTestId('btn-login');

    userEvent.type(inputUsername, 'coelho-ricochete');
    userEvent.type(inputPassword, 'bing-bing-bing!');
    userEvent.click(loginButton);

    await waitFor(() => screen.getByTestId('tsn-main'));

    const { location: { pathname } } = history;
    expect(pathname).toBe('/transition');
  });
});
