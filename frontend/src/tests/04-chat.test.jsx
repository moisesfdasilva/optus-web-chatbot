import React from 'react';
import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './util/renderWithRouter';
import App from '../App';
import api from '../services/api';
import { outputLoginMock } from './mock/transitionMock';

describe('4. Testes da tela de Transition:', () => {
  afterEach(() => {    
    jest.clearAllMocks();
  });

  it(`4.1. Verificação do envio de mensagens no chat.`, async () => {
    const mockLogin = jest.spyOn(api, 'post');
    mockLogin.mockImplementation(() => Promise.resolve(outputLoginMock));

    jest.spyOn(window, 'scroll').mockImplementation(0);

    renderWithRouter(<App />);

    act(() => {
      userEvent.type(screen.getByTestId('lgn-username'), 'coelho-ricochete');
      userEvent.type(screen.getByTestId('lgn-password'), 'bing-bing-bing!');
    });

    act(() => {
      userEvent.click(screen.getByTestId('lgn-btn-login'));
    });

    await waitFor(() => screen.getByTestId('tsn-main'));

    act(() => {
      userEvent.click(screen.getByTestId('tsn-linkToChat'));
    });

    const inpMessage = screen.getByTestId('msg-inp-message');
    const btnMessage = screen.getByTestId('msg-btn-message');

    act(() => {
      userEvent.type(inpMessage, 'Hi');
    });

    act(() => {
      userEvent.click(btnMessage);
    });

    act(() => {
      userEvent.type(inpMessage, 'Hi');
    });

    act(() => {
      userEvent.click(btnMessage);
    });

    act(() => {
      userEvent.type(inpMessage, 'Hello');
    });

    act(() => {
      userEvent.click(btnMessage);
    });

    act(() => {
      userEvent.type(inpMessage, 'loan');
    });

    act(() => {
      userEvent.click(btnMessage);
    });
  });
});
