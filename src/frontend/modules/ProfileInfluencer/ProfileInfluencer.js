import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {Tabs, Tab, Box, Grid, Paper} from '@material-ui/core'

import { YouTubeTab } from './containers/YouTubeTab'
import { InstagramTab } from './containers/InstagramTab'
import { SponsoredPostsTab } from './containers/SponsoredPostsTab'
import { AdvancedTab } from './containers/AdvancedTab'
import { AdminTab } from './containers/AdminTab'
import { RightBar } from './containers/RightBar/'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '-20px'
  },
  wrapTabs: {
    maxWidth: '1170px',
    position: 'relative',
    margin: '0 auto 20px'
  },
  tabItem: {
    fontSize: '13px',
    textTransform: 'none',
    position: 'relative',
    minWidth: '120px'
  },
  tabs: {
    position: 'relative',
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
  innerWrap: {
    maxWidth: '1170px',
    margin: 'auto'
  },
  rightBar: {
    padding: theme.spacing(2)
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
        <Tabs className={classes.tabs} value={value} indicatorColor="secondary" textColor="secondary" onChange={handleChange}>
          <Tab className={classes.tabItem} label="YouTube" />
          <Tab className={classes.tabItem} label="Instagram" />
          <Tab className={classes.tabItem} label="Sponsored Posts" />
          <Tab className={classes.tabItem} label="Advanced" />
          <Tab className={classes.tabItem} label="Admin" />
        </Tabs>
        <Box className={classes.line}></Box>
      </Box>
      <Grid container spacing={3} className={classes.innerWrap}>
          <Grid item xs={8}>
            <Paper>
              {value === 0 && <TabContainer><YouTubeTab /></TabContainer>}
              {value === 1 && <TabContainer><InstagramTab /></TabContainer>}
              {value === 2 && <TabContainer><SponsoredPostsTab /></TabContainer>}
              {value === 3 && <TabContainer><AdvancedTab /></TabContainer>}
              {value === 4 && <TabContainer><AdminTab /></TabContainer>}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.rightBar}>
              <RightBar />
            </Paper>
          </Grid>
      </Grid>
    </Box>
  )
}
