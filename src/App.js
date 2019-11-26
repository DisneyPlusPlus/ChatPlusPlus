import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Chat } from './components';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" /* TODO: "/conversation/:id" */>
        <Chat />
      </Route>
    </Switch>
  </Router>
);

export default App