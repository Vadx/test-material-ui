import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {Tabs, Tab, Box, Typography} from '@material-ui/core'

import { GeneralSettings } from './containers/GeneralSettings'
import { ShippingAddress } from './containers/ShippingAddress'
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
    minWidth: '160px'
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
          <Tab className={classes.tabItem} label="General Settings" />  
          <Tab className={classes.tabItem} label="Shipping Adress" />
          <Tab className={classes.tabItem} label="Payment Settings" />
          <Tab className={classes.tabItem} label="Messages and Emails" />
          <Tab className={classes.tabItem} label="My Channels" />
          <Tab className={classes.tabItem} label="Earnings" />
          <Tab className={classes.tabItem} label="Managers" />
        </Tabs>
        <Box className={classes.line}></Box>
      </Box>
      {value === 0 && <TabContainer><GeneralSettings /></TabContainer>}
      {value === 1 && <TabContainer><ShippingAddress /></TabContainer>}
      {value === 2 && <TabContainer><PaymentSettings /></TabContainer>}
      {value === 3 && <TabContainer><Messages /></TabContainer>}
      {value === 4 && <TabContainer><MyChannels/></TabContainer>}
      {value === 5 && <TabContainer><Earnings /></TabContainer>}
      {value === 6 && <TabContainer><Managers /></TabContainer>}
    </Box>
  )
}
