import React from 'react'
import { Route } from 'react-router-dom'

// Brand
import { CampaignTabs } from './modules/Brand/CampaignTabs'
import { Messages } from './modules/Messages'
import { AccountSettings } from './modules/Brand/AccountSettings'
import { Discover } from './modules/Brand/Discover'
import { Insights } from './modules/Brand/Insights'
import { CampaignsList } from './modules/Brand/CampaignsList'
import { CampaignPreview } from './modules/Brand/CampaignPreview'
import { TermsBrand } from './common/TermsBrand'

// Influencer
import { AccountSettings as AccountInfluencerSettings  } from './modules/Influencer/AccountSettings'
import { Calendar } from './modules/Influencer/Calendar'
import { Campaigns } from './modules/Influencer/Campaigns'
import { Marketplace } from './modules/Influencer/Marketplace'
import { Profile } from './modules/Influencer/Profile'
import { TermsInfluencer } from './common/TermsInfluencer'

//Auth
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
    path: "/brand/мessages",
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
    path: "/brand/terms",
    component: TermsBrand
  },
  {
    path: "/brand/preview",
    component: CampaignPreview
  },
  {
    path: "/creator/account-settings",
    component: AccountInfluencerSettings
  },
  {
    path: "/creator/calendar",
    component: Calendar
  },
  {
    path: "/creator/campaigns",
    component: Campaigns
  },
  {
    path: "/creator/marketplace",
    component: Marketplace
  },
  {
    path: "/creator/profile",
    component: Profile
  },
  {
    path: "/creator/messages",
    component: Messages
  },
  {
    path: "/creator/terms",
    component: TermsInfluencer
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

