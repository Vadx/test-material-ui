import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  Avatar,
  Button,
  Box,
  Tabs,
  Tab,
  AppBar,
  Paper
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

// Socisal icons
import Facebook from '../../../../assets/fb.svg'
import Twitter from '../../../../assets/twitter.svg'
import Instagram from '../../../../assets/instagram.svg'

import InstagramInfo from './InstagramInfo'
import AudienceInfo from './AudienceInfo'
import ReviewsInfo from './ReviewsInfo'
import {SendOffer} from '../../../../common/SendOffer'


const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    height: 340,
    background: '#fafafa'
  },
  avatar: {
    marginBottom: 10,
    display: 'inline-flex',
    width: 125,
    height: 125
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    width: 14,
    height: 14
  },
  margin: {
    marginRight: theme.spacing(2),
  },
  tabItem: {
    fontSize: '13px',
    position: 'relative',
    paddingLeft: '15px',
    paddingRight: '15px',
    minWidth: '120px'
  },
}))

function TabContainer(props) {
  return (
    <Box component="div" style={{padding: '20px'}}>
      {props.children}
    </Box>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export function UserInfo (props) {
  const classes = useStyles()
  const AdapterButton = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)

  const [value, setValue] = React.useState(0)
  function handleChange(event, newValue) {
    setValue(newValue)
  }

  // Dialog Settings
  const [open, setOpen] = React.useState(false);
  function handleClickOpen() {
    setOpen(true)
  }
  const handleClose = value => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={2} >
            <Box
              display="flex" 
              flexDirection="column"
              alignItems="center"
            >
              <Avatar alt="Remy Sharp" className={classes.avatar} />
              <Rating value={4} readOnly size="small" />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>User Name</Typography>
            <Box mb={5}>
              <Button size="small" className={classes.margin}>
                <img className={classes.extendedIcon} src={Facebook} alt="Facebook" />
                Facebook
              </Button>

              <Button size="small" className={classes.margin}>
                <img className={classes.extendedIcon} src={Twitter} alt="Twitter" />
                Twitter
              </Button>

              <Button size="small" className={classes.margin}>
                <img className={classes.extendedIcon} src={Instagram} alt="FInstagram" />
                Instagram
              </Button>
            </Box>
            <Box>
              <Button component={AdapterButton} to="/brand/creators" variant="contained" color="primary" style={{marginRight: 20}}>View profile</Button>
              <Button variant="contained" color="secondary" onClick={handleClickOpen}>Send offer</Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Paper>
            <AppBar position="static" color="default">
              <Tabs 
                className={classes.tabs} 
                value={value} 
                indicatorColor="secondary" 
                textColor="secondary"
                onChange={handleChange}
                >
                <Tab className={classes.tabItem} label="Audience" />  
                <Tab disabled className={classes.tabItem} label="Youtube" />
                <Tab className={classes.tabItem} label="Instagram" />
                <Tab className={classes.tabItem} label="Reviews" />
              </Tabs>
            </AppBar>
            
            {value === 0 && <TabContainer><AudienceInfo /></TabContainer>}
            {value === 1 && <TabContainer>2</TabContainer>}
            {value === 2 && <TabContainer><InstagramInfo /></TabContainer>}
            {value === 3 && <TabContainer><ReviewsInfo /></TabContainer>}
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <SendOffer open={open} onClose={handleClose} />
    </React.Fragment>
  )
}
