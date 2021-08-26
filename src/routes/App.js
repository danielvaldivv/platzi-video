import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();

const App = () => (
  <BrowserRouter>
  {/* <Layout> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/register" component={Register} /> */}
      {/* <Route exact path="/player/:id" component={Player} /> */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  {/* </Layout> */}
</BrowserRouter>
);

export default App;