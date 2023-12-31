import React from 'react';
import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './util/renderWithRouter';
import App from '../App';
import api from '../services/api';
import { outputLoginMock } from './mock/loginMock';

describe('1. Testes da tela de Login:', () => {
  afterEach(() => {    
    jest.clearAllMocks();
  });

  it(`1.1. Verificação do redirecionamento para a tela transition ao logar com usuário 
  e senha válidos.`, async () => {
    const mockLogin = jest.spyOn(api, 'post');
    mockLogin.mockImplementation(() => Promise.resolve(outputLoginMock));

    const { history } = renderWithRouter(<App />);

    const inputUsername = screen.getByTestId('lgn-username');
    const inputPassword = screen.getByTestId('lgn-password');
    const loginButton = screen.getByTestId('lgn-btn-login');

    act(() => {
      userEvent.type(inputUsername, 'coelho-ricochete');
      userEvent.type(inputPassword, 'bing-bing-bing!');
    });

    act(() => {
      userEvent.click(loginButton);
    });

    await waitFor(() => screen.getByTestId('tsn-main'));

    const { location: { pathname } } = history;
    expect(pathname).toBe('/transition');

    const logOutButton = screen.getByTestId('hdr-btn-logout');

    act(() => {
      userEvent.click(logOutButton);
    });
  });

  it(`1.2. Verificação se ao logar com usuário e/ou senha inválidos é apresentada a 
  mensagem de erro.`, async () => {
    const mockLogin = jest.spyOn(api, 'post');
    mockLogin.mockImplementation(() => Promise.reject());

    renderWithRouter(<App />);

    const inputUsername = screen.getByTestId('lgn-username');
    const inputPassword = screen.getByTestId('lgn-password');
    const loginButton = screen.getByTestId('lgn-btn-login');

    act(() => {
      userEvent.type(inputUsername, 'incorrectUsername');
      userEvent.type(inputPassword, 'incorrectPassword');
    });

    act(() => {
      userEvent.click(loginButton);
    });

    await waitFor(() => screen.getByTestId('lgn-message-incUserOrPass'));
  });

  it('1.3. Verificação do redirecionamento para a tela register.', async () => {
    const { history } = renderWithRouter(<App />);

    const createButton = screen.getByTestId('lgn-btn-create');

    act(() => {
      userEvent.click(createButton);
    });

    const { location: { pathname } } = history;
    expect(pathname).toBe('/register');
  });
});
