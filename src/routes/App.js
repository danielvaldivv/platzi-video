import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const App = () => (
  <RouterRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </RouterRouter>
);

export default App;