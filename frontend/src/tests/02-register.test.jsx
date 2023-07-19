import React from 'react';
import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './util/renderWithRouter';
import App from '../App';
import api from '../services/api';
import {
  outputNewUserMock,
  outputLoginMock,
} from './mock/registerMock';

describe('2. Testes da tela de Register:', () => {
  it(`2.1. Verificação do redirecionamento para a tela transition ao criar um usuário 
  com os dados válidos.`, async () => {
    const mockNewUser = jest.spyOn(api, 'post');
    mockNewUser
      .mockImplementationOnce(() => Promise.resolve({ data: outputNewUserMock }))
      .mockImplementation(() => Promise.resolve(outputLoginMock));
    const mockMsgs = jest.spyOn(api, 'get');
    mockMsgs
      .mockImplementation(() => Promise.resolve({ data: [] }));

    const { history } = renderWithRouter(<App />);
    act(() => { history.push('/register'); });

    const inpEmail = screen.getByTestId('rgt-inp-email');
    const inpUsername = screen.getByTestId('rgt-inp-username');
    const inpPassword = screen.getByTestId('rgt-inp-password');
    const inpRepeatPass = screen.getByTestId('rgt-inp-repeatPass');
    const btnCreate = screen.getByTestId('rgt-btn-create');

    act(() => {
      userEvent.type(inpEmail, 'ricochete@gmail.com');
      userEvent.type(inpUsername, 'coelho-ricochete');
      userEvent.type(inpPassword, 'bing-bing-bing!');
      userEvent.type(inpRepeatPass, 'bing-bing-bing!');
    });

    act(() => {
      userEvent.click(btnCreate);
    });

    await waitFor(() => screen.getByTestId('tsn-main'));

    const { location: { pathname } } = history;
    expect(pathname).toBe('/transition');

    const logOutButton = screen.getByTestId('hdr-btn-logout');

    act(() => {
      userEvent.click(logOutButton);
    });
  });

  it(`2.2. Verificação se ao cadastrar os dados do usuário senha inválidos são 
  apresentadas as mensagens de erro.`, async () => {
    const { history } = renderWithRouter(<App />);
    act(() => { history.push('/register'); });

    const inpEmail = screen.getByTestId('rgt-inp-email');
    const inpUsername = screen.getByTestId('rgt-inp-username');
    const inpPassword = screen.getByTestId('rgt-inp-password');
    const inpRepeatPass = screen.getByTestId('rgt-inp-repeatPass');
    const btnCreate = screen.getByTestId('rgt-btn-create');

    act(() => {
      userEvent.type(inpEmail, 'invalidMail');
      userEvent.type(inpUsername, 'inv');
      userEvent.type(inpPassword, 'pass');
      userEvent.type(inpRepeatPass, 'invPass');
    });

    act(() => {
      userEvent.click(btnCreate);
    });

    screen.getByText('incorrect email type.');
    screen.getByText('username length is shorter than 4.');
    screen.getByText('password length is shorter than 6.');
    screen.getByText('password has not been confirmed.');
  });
});
