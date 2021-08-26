import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route exact path="/login">
        <Login/>
      </Route>
    </Switch>
</BrowserRouter>

);

export default App;