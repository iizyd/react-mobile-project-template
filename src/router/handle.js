import React from 'react';
import { Route } from 'react-router-dom';

function handleRouter(routes) {
  return (
    routes.map((route, key) => {
      if (route.exact) {
        return (
          <Route exact path={route.path} key={key}
            render={
              props => (
                <route.component {...props} routes={route.routes} />
              )
            }
          />
        )
      } else {
        return (
          <Route path={route.path} key={key}
            render={
              props => (
                <route.component {...props} routes={route.routes} />
              )
            }
          />
        )
      }
    })
  )
}

export default handleRouter;