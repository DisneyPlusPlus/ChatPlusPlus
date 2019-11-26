import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Chat } from './components';

const App = () => (
  <Switch>
    <Route path="/:id" /* TODO: "/conversation/:id" */>
      <Chat />
    </Route>
  </Switch>
);

export default App