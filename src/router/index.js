import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import handleRouter from './handle';
import routes from './routes';

function Router() {
  return (
    <HashRouter>
      <Switch>
        {
          handleRouter(routes)
        }
      </Switch>
    </HashRouter>
  )
}

export default Router;