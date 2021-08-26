import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../containers/Home';
import Login from '../containers/Login';

const history = createBrowserHistory();

const App = () => (
<Router history={history}> 
  <History>
    <Switch>
      <Route path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </History>
</Router>

);

export default App;