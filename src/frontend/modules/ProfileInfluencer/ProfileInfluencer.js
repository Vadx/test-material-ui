import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {Tabs, Tab, Box, Grid, Paper, Fab, Button} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import StarBorder from '@material-ui/icons/StarBorder'

import { YouTubeTab } from './containers/YouTubeTab'
import { InstagramTab } from './containers/InstagramTab'
import { SponsoredPostsTab } from './containers/SponsoredPostsTab'
import { AdvancedTab } from './containers/AdvancedTab'
import { AdminTab } from './containers/AdminTab'
import { RightBar } from './containers/RightBar'
import {SendOffer} from '../../common/SendOffer'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '-20px'
  },
  wrapTabs: {
    maxWidth: '1170px',
    position: 'relative',
    margin: '0 auto 20px',
    justifyContent: "space-between"
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
  },
  margin: {
    marginRight: 20
  },
  icon: {
    fontSize: 17,
    marginRight: 7
  }
}))

function Edit() {
  return (
    <Box style={{padding: '0 20px'}}>
      <Fab size="small" color="primary" aria-label="edit">
        <EditIcon size="small" />
      </Fab>
    </Box>
  )
}

function BrandButtons() {
  const classes = useStyles()
  // Dialog Settings
  const [open, setOpen] = React.useState(false);
  function handleClickOpen() {
    setOpen(true)
  }
  const handleClose = value => {
    setOpen(false)
  }

  return (
    <Box style={{padding: '0 20px'}}>
      <Button variant="contained" size="small" className={classes.margin}><StarBorder size="small" className={classes.icon} /> Favorite</Button>
      <Button variant="contained" size="small" color="primary" onClick={handleClickOpen}>Send an offer</Button>
      <SendOffer open={open} onClose={handleClose} />
    </Box>
  )
}

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
      <Grid container className={classes.wrapTabs}>
        <Grid item>
          <Tabs className={classes.tabs} value={value} indicatorColor="secondary" textColor="secondary" onChange={handleChange}>
            <Tab className={classes.tabItem} label="YouTube" />
            <Tab className={classes.tabItem} label="Instagram" />
            <Tab className={classes.tabItem} label="Sponsored Posts" />
            <Tab className={classes.tabItem} label="Advanced" />
            <Tab className={classes.tabItem} label="Admin" />
          </Tabs>
        </Grid>
        <Grid item>
          <Route path={['/creator']} component={Edit} />
          <Route path={['/brand']} component={BrandButtons} />
        </Grid>
        <Grid sx={12} className={classes.line}></Grid>
      </Grid>
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
