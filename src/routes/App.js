import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';


const App = () => (
<Router>
  <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
  </Switch>
</Router>
)
;

export default App;