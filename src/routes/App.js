import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;