import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </switch>
  </Router>
);

export default App;