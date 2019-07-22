import { CampaignsTab } from './modules/Brand/CampaignsTab'
import { Messages } from './modules/Messages'

import { BrandAccountSettings } from './modules/Brand/BrandAccountSettings'
import { Discover } from './modules/Brand/Discover'
import { Insights } from './modules/Brand/Insights'

import { Login } from './modules/Login'
import { ForgotPassword } from './modules/ForgotPassword'
import { ChangePassword } from './modules/ChangePassword'

import React from 'react'
import { Route } from 'react-router-dom'

// route config
export const routes = [
  {
    path: "/campaing",
    component: CampaignsTab
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/forgot-password",
    component: ForgotPassword
  },
  {
    path: "/change-password",
    component: ChangePassword
  },
  {
    path: "/мessages",
    component: Messages
  },
  {
    path: "/brand",
    component: BrandAccountSettings,
    routes: [
      {
        path: "/brand/account-settings",
        component: BrandAccountSettings
      },
      {
        path: "/brand/discover",
        component: Discover
      },
      {
        path: "/brand/insights",
        component: Insights
      }
    ]
  }
]

export function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

