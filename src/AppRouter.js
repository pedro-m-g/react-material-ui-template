import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import HomeView from './views/HomeView';

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomeView />
      </Route>
    </Switch>
  );
}

export default AppRouter;
