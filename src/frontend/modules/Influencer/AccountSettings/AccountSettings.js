import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {Tabs, Tab, Box, Typography} from '@material-ui/core'

import { GeneralSettings } from './containers/GeneralSettings'
import { ShopingAddress } from './containers/ShopingAddress'
import { PaymentSettings } from './containers/PaymentSettings'
import { Messages } from './containers/Messages'
import { MyChannels } from './containers/MyChannels'
import { Earnings } from './containers/Earnings'
import { Managers } from './containers/Managers'

const useStyles = makeStyles(theme => ({
  wrap: {
    marginBottom: '25px',
    position: 'relative',
    margin: '0 20px 25px',
    paddingTop: '50px'
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

export function AccountSettings () {
  const [value, setValue] = React.useState(1)
  const classes = useStyles()

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <Box className={classes.wrap}>
      <Typography variant="h4" component="h2" style={{marginBottom: '20px'}}>Account settings</Typography>
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
      {value === 0 && <TabContainer><GeneralSettings /></TabContainer>}
      {value === 1 && <TabContainer><ShopingAddress /></TabContainer>}
      {value === 2 && <TabContainer><PaymentSettings /></TabContainer>}
      {value === 3 && <TabContainer><Messages /></TabContainer>}
      {value === 4 && <TabContainer><MyChannels/></TabContainer>}
      {value === 5 && <TabContainer><Earnings /></TabContainer>}
      {value === 6 && <TabContainer><TeamManagement /></TabContainer>}
    </Box>
  )
}
