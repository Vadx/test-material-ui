import React from 'react'
import { Route } from 'react-router-dom'
import { MainInfo } from './containers/MainInfo'
import { GeneralInfo } from './containers/GeneralInfo'
import { Tags } from './containers/Tags'
import { AudienceStats } from './containers/AudienceStats'
import { Notification } from './containers/Notification'
import { SimilarUsers } from './containers/SimilarUsers'
import { AboutMe } from './containers/AboutMe'



export function RightBar () {
  return (
    <React.Fragment>
      <MainInfo />
      <Route exact path={['/creator']} component={Notification} />
      <Notification />
      <AboutMe />
      <Tags /> 
      <AudienceStats />
      <GeneralInfo />
      <SimilarUsers />
    </React.Fragment>
  )
}
