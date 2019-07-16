import React from 'react'
import { Route } from 'react-router-dom'

import { Login } from './modules/Login'
// import { ChangePassword } from './modules/ChangePassword'

export const paths = {
  login: '/login',
  // changePassword: '/changePassword'
}

export const renderRoutesWithSubRoutes = (routes) => {
  return routes.map((route, i) => {
    return (
      <Route key={i}
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    )
  })
}

export const routes = [
  {
    path: paths.login,
    component: Login
  },
  // {
  //   path: paths.changePassword,
  //   component: ChangePassword
  // }
]
