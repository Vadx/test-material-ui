import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {Tabs, Tab, Box} from '@material-ui/core'

import { Billing } from './containers/Billing'
import { CompanySettings } from './containers/CompanySettings'
import { PaymentSettings } from './containers/PaymentSettings'
import { PersonalSettings } from './containers/PersonalSettings'
import { Referrals } from './containers/Referrals'
import { SlackIntegration } from './containers/SlackIntegration'
import { TeamManagement } from './containers/TeamManagement'

const useStyles = makeStyles(theme => ({
  wrap: {
    marginBottom: '25px',
    position: 'relative',
    margin: '0 20px 25px'
  },
  line: {
    background: '#ccc',
    height: '2px',
    width: '100%',
    position: 'absolute',
    bottom: '0px',
    zIndex: '-1',
    left: '0'
  },
  tabItem: {
    fontSize: '13px',
    textTransform: 'none',
    position: 'relative',
    paddingLeft: '0',
    paddingRight: '0',
    minWidth: '120px'
  }
}))

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
  const classes = useStyles()

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <Box className={classes.wrap}>
      <Box component="div" style={{position: 'relative', marginBottom: '20px'}}>
        <Tabs value={value} indicatorColor="secondary" textColor="secondary" onChange={handleChange} style={{position: 'relative'}}>
          <Tab className={classes.tabItem} label="Company" />  
          <Tab className={classes.tabItem} label="Personal" />
          <Tab className={classes.tabItem} label="Payment" />
          <Tab className={classes.tabItem} label="Billing" />
          <Tab className={classes.tabItem} label="Slack integration" />
          <Tab className={classes.tabItem} label="Team" />
          <Tab className={classes.tabItem} label="Referrals" />
        </Tabs>
        <Box className={classes.line}></Box>
      </Box>
      {value === 0 && <TabContainer><CompanySettings /></TabContainer>}
      {value === 1 && <TabContainer><PersonalSettings /></TabContainer>}
      {value === 2 && <TabContainer><PaymentSettings /></TabContainer>}
      {value === 3 && <TabContainer><Billing /></TabContainer>}
      {value === 4 && <TabContainer><SlackIntegration/></TabContainer>}
      {value === 5 && <TabContainer><TeamManagement /></TabContainer>}
      {value === 6 && <TabContainer><Referrals /></TabContainer>}
    </Box>
  )
}
