import React from 'react'
import { Route } from 'react-router-dom'

// Brand
import { CampaignTabs } from './modules/Brand/CampaignTabs'
import { Messages } from './modules/Messages'
import { AccountSettings } from './modules/Brand/AccountSettings'
import { Discover } from './modules/Brand/Discover'
import { Insights } from './modules/Brand/Insights'
import { CampaignsList } from './modules/Brand/CampaignsList'

// Influencer
import { AccountSettings as AccountInfluencerSettings  } from './modules/Influencer/AccountSettings'

import { Login } from './modules/Auth/Login'
import { ForgotPassword } from './modules/Auth/ForgotPassword'
import { ChangePassword } from './modules/Auth/ChangePassword'

// route config
export const routes = [
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
  // {
  //   path: "/brand",
  //   component: CampaignsList,
  //   routes: [
  //     {
  //       path: "/brand/campaing",
  //       component: CampaignsTab
  //     },
  //     {
  //       path: "/brand/account-settings",
  //       component: AccountSettings
  //     },
  //     {
  //       path: "/brand/discover",
  //       component: Discover
  //     },
  //     {
  //       path: "/brand/insights",
  //       component: Insights
  //     }
  //   ]
  // },
  {
    path: "/brand/campaigns",
    component: CampaignsList
  },
  {
    path: "/brand/campaign",
    component: CampaignTabs
  },
  {
    path: "/brand/account-settings",
    component: AccountSettings
  },
  {
    path: "/brand/discover",
    component: Discover
  },
  {
    path: "/brand/insights",
    component: Insights
  },
  {
    path: "/creator/account-settings",
    component: AccountInfluencerSettings
  },
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

