import React from 'react';
import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './util/renderWithRouter';
import App from '../App';
import api from '../services/api';
import { outputLoginMock } from './mock/transitionMock';

describe('3. Testes da tela de Transition:', () => {
  afterEach(() => {    
    jest.clearAllMocks();
  });

  it(`3.1. Verificação do redirecionamento para a tela messages ao criar no link e o botão
  de retornar para a tela transition.`, async () => {
    const mockLogin = jest.spyOn(api, 'post');
    mockLogin.mockImplementation(() => Promise.resolve(outputLoginMock));

    jest.spyOn(window, 'scroll').mockImplementation(0);

    const { history } = renderWithRouter(<App />);

    act(() => {
      userEvent.type(screen.getByTestId('lgn-username'), 'coelho-ricochete');
      userEvent.type(screen.getByTestId('lgn-password'), 'bing-bing-bing!');
    });

    act(() => {
      userEvent.click(screen.getByTestId('lgn-btn-login'));
    });

    await waitFor(() => screen.getByTestId('tsn-main'));

    const linkToChat = screen.getByTestId('tsn-linkToChat');

    act(() => {
      userEvent.click(linkToChat);
    });

    const pathChat = history.location.pathname;
    expect(pathChat).toBe('/chat');

    const btnReturn = screen.getByTestId('hdr-btn-return');
    act(() => {
      userEvent.click(btnReturn);
    });

    const pathTransition = history.location.pathname;
    expect(pathTransition).toBe('/transition');

    act(() => {
      userEvent.click(screen.getByTestId('hdr-btn-logout'));
    });
  });
});
