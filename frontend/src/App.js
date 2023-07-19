import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Transition from './pages/transition';
import Chat from './pages/chat';
import Register from './pages/register';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/transition" component={ Transition } />
      <Route path="/chat" component={ Chat } />
    </Switch>
  );
}

export default App;
