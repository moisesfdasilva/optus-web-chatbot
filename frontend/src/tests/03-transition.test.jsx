import React from 'react';
import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './util/renderWithRouter';
import App from '../App';
import api from '../services/api';
import { outputLoginMock } from './mock/transitionMock';

describe('3. Testes da tela de Transition:', () => {
  it('3.1. Verificação do redirecionamento para a tela messages ao criar no link.',
  async () => {
    const mockLogin = jest.spyOn(api, 'post');
    mockLogin.mockImplementation(() => Promise.resolve(outputLoginMock));
    const mockMsgs = jest.spyOn(api, 'get');
    mockMsgs
      .mockImplementationOnce(() => Promise.resolve())
      .mockImplementation(() => Promise.resolve({ data: [] }));
  
    renderWithRouter(<App />);
  
    act(() => {
      userEvent.type(screen.getByTestId('lgn-username'), 'coelho-ricochete');
      userEvent.type(screen.getByTestId('lgn-password'), 'bing-bing-bing!');
    });
  
    act(() => {
      userEvent.click(screen.getByTestId('lgn-btn-login'));
    });
  });
});
