import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/login';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
