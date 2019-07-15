import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Tabs, Tab, Box} from '@material-ui/core'

import { Billing } from './containers/Billing'
import { CompanySettings } from './containers/CompanySettings'
import { PaymentSettings } from './containers/PaymentSettings'
import { PersonalSettings } from './containers/PersonalSettings'
import { Referrals } from './containers/Referrals'
import { SlackIntegration } from './containers/SlackIntegration'
import { TeamManagement } from './containers/TeamManagement'

const Wrap = styled.div`
  margin-bottom: 25px;
  position: relative;
  margin: 0 20px 25px;
`

const Line = styled.div`
  background: #ccc;
  height: 2px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  z-index: -1;
  left: 0;
`

const TabItem = styled(Tab)`
  font-size: 13px;
  text-transform: none;
  position: relative;
  padding-left: 0;
  padding-right: 0;
  min-width: 120px;
`

function TabContainer(props) {
  return (
    <Box component="div">
      {props.children}
    </Box>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export function CampaignsTab () {
  const [value, setValue] = React.useState(1)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <Wrap>
      <Box component="div" style={{position: 'relative', marginBottom: '20px'}}>
        <Tabs value={value} indicatorColor="secondary" textColor="secondary" onChange={handleChange} style={{position: 'relative'}}>
          <TabItem label="Company" />  
          <TabItem label="Personal" />
          <TabItem label="Payment" />
          <TabItem label="Billing" />
          <TabItem label="Slack integration" />
          <TabItem label="Team" />
          <TabItem label="Referrals" />
        </Tabs>
        <Line />
      </Box>
      {value === 0 && <TabContainer><CompanySettings /></TabContainer>}
      {value === 1 && <TabContainer><PersonalSettings /></TabContainer>}
      {value === 2 && <TabContainer><PaymentSettings /></TabContainer>}
      {value === 3 && <TabContainer><Billing /></TabContainer>}
      {value === 4 && <TabContainer><SlackIntegration/></TabContainer>}
      {value === 5 && <TabContainer><TeamManagement /></TabContainer>}
      {value === 6 && <TabContainer><Referrals /></TabContainer>}
    </Wrap>
  )
}
