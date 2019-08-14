import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {Tabs, Tab, Box} from '@material-ui/core'
import { ViewModule, ViewStream } from '@material-ui/icons'

import { InProgress } from './containers/InProgress'
import { Demographics } from './containers/Demographics'
import { LiveInstagramPosts } from './containers/LiveInstagramPosts'
import { LiveVideos } from './containers/LiveVideos'
import { OtherPosts } from './containers/OtherPosts'
import { Performance } from './containers/Performance'
import { Proposals } from './containers/Proposals'

const useStyles = makeStyles(theme => ({
  root: {
      paddingTop: '40px'
  },
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
    paddingLeft: '15',
    paddingRight: '15',
    minWidth: '120px'
  },
  swichView: {
    position: 'absolute',
    right: '0',
    bottom: '4px'
  },
  tabs: {
    position: 'relative'
  }
}))

function TabContainer(props) {
  return (
    <Box component="div" style={{padding: '0 20px'}}>
      {props.children}
    </Box>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export function CampaignTabs () {
  const [value, setValue] = React.useState(1)
  const classes = useStyles()

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.wrap} component="div" style={{position: 'relative', marginBottom: '20px'}}>
        <Tabs className={classes.tabs} value={value} indicatorColor="secondary" textColor="secondary" onChange={handleChange}>
          <Tab className={classes.tabItem} label="Proposals (0)" />  
          <Tab className={classes.tabItem} label="In progress (1)" />
          <Tab className={classes.tabItem} label="Live videos (2)" />
          <Tab className={classes.tabItem} label="Live Instagram Posts (4)" />
          <Tab className={classes.tabItem} label="Other Competed Posts (3)" />
          <Tab className={classes.tabItem} label="Performance" />
          <Tab className={classes.tabItem} label="Demographics" />
        </Tabs>
        <Box className={classes.line}></Box>
        <Box className={classes.swichView}>
          <ViewModule /> 
          <ViewStream />
        </Box>
      </Box>
      {value === 0 && <TabContainer><Proposals /></TabContainer>}
      {value === 1 && <TabContainer><InProgress /></TabContainer>}
      {value === 2 && <TabContainer><LiveVideos /></TabContainer>}
      {value === 3 && <TabContainer><LiveInstagramPosts /></TabContainer>}
      {value === 4 && <TabContainer><OtherPosts /></TabContainer>}
      {value === 5 && <TabContainer><Performance/></TabContainer>}
      {value === 6 && <TabContainer><Demographics /></TabContainer>}
    </Box>
  )
}
