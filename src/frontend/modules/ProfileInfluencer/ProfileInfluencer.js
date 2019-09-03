import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {Tabs, Tab, Box, Grid} from '@material-ui/core'

import { YouTubeTab } from './containers/YouTubeTab'
import { InstagramTab } from './containers/InstagramTab'
import { SponsoredPostsTab } from './containers/SponsoredPostsTab'
import { AdvancedTab } from './containers/AdvancedTab'
import { AdminTab } from './containers/AdminTab'
import { RightBar } from './containers/RightBar'

const useStyles = makeStyles(theme => ({
  root: {
    background: '#fff',
    marginTop: '-41px'
  },
  wrapTabs: {
    marginBottom: '25px',
    background: '#f4f4f4',
    borderBottom: '1px solid #eee'
  },
  wrapTabsInner: {
    maxWidth: '1170px',
    position: 'relative',
    margin: 'auto'
  },
  tabItem: {
    fontSize: '13px',
    textTransform: 'none',
    position: 'relative',
    paddingLeft: '15',
    paddingRight: '15',
    minWidth: '120px'
  },
  tabs: {
    position: 'relative',
  },
  innerWrap: {
    maxWidth: '1170px',
    margin: 'auto'
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

export function ProfileInfluencer () {
  const [value, setValue] = React.useState(0)
  const classes = useStyles()

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapTabs} component="div">
        <Box className={classes.wrapTabsInner} component="div">
          <Tabs className={classes.tabs} value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
            <Tab className={classes.tabItem} label="YouTube" />
            <Tab className={classes.tabItem} label="Instagram" />
            <Tab className={classes.tabItem} label="Sponsored Posts" />
            <Tab className={classes.tabItem} label="Advanced" />
            <Tab className={classes.tabItem} label="Admin" />
          </Tabs>
        </Box>
      </Box>
      <Grid container spacing={2} className={classes.innerWrap}>
          <Grid item xs={8}>
            {value === 0 && <TabContainer><YouTubeTab /></TabContainer>}
            {value === 1 && <TabContainer><InstagramTab /></TabContainer>}
            {value === 2 && <TabContainer><SponsoredPostsTab /></TabContainer>}
            {value === 3 && <TabContainer><AdvancedTab /></TabContainer>}
            {value === 4 && <TabContainer><AdminTab /></TabContainer>}
          </Grid>
          <Grid item xs={4}>
            <RightBar />
          </Grid>
      </Grid>
    </Box>
  )
}
