import React from 'react'
import UsersList from './containers/UsersList'
import FooterDiscover from './containers/FooterDiscover'
// import FooterSelectedUsers from './containers/FooterSelectedUsers'

export function Discover () {
  return (
    <React.Fragment>
      <UsersList/>
      <FooterDiscover/>
      {/* <FooterSelectedUsers /> */}
    </React.Fragment>
  )
}
