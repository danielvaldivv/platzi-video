import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();

const App = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/login" component={Login} />
//     </Switch>
// </BrowserRouter>

<Router>
  <Switch>
    <Route path="/" >
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
  </Switch>
</Router>
);

export default App;