import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';


const App = () => {
return (
<Router>
  <div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

        <Route path="/login">
          <Login />
        </Route>
    </Switch>
  </div>
</Router>
)
};

export default App;