import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

const App = () => (
  <BrowserRouter>
    <Route exact path="/dist/index.html" component={ Home } />
    <Route exact path="/dist/index.html/Login" component = { Login } />
  </BrowserRouter>
);

export default App;