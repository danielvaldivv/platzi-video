import React from 'react';
import { BrowserRouter, Route, Switch,Router } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home/>
      </Route>

      <Route path="/login">
        <Login/>
      </Route>
    </Switch>
</Router>

);

export default App;