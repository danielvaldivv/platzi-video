import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';


const App = () => (
<Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path={useHistory.push("/login")} component={Login} />
  </Switch>
</Router>
)
;

export default App;