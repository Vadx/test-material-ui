import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Grid,
  Typography,
  Avatar,
  Drawer,
  Button,
  Box,
  Tabs,
  Tab,
  AppBar
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

// Socisal icons
import Facebook from '../../../../assets/fb.svg'
import Twitter from '../../../../assets/twitter.svg'
import Instagram from '../../../../assets/instagram.svg'


const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    height: 380
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
    // textTransform: 'none',
    position: 'relative',
    paddingLeft: '15px',
    paddingRight: '15px',
    minWidth: '120px'
  },
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

export function UserInfo (props) {
  const classes = useStyles()

  const [value, setValue] = React.useState(0)
  function handleChange(event, newValue) {
    setValue(newValue)
  }

  const { onClose, open } = props
  function handleClose() {
    onClose(false)
  }

  return (
    <Drawer anchor="bottom" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <Paper className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Avatar alt="Remy Sharp" className={classes.avatar} />
            <Rating value={4} readOnly size="small" />
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
              <Button variant="contained" color="primary" style={{marginRight: 20}}>View profile</Button>
              <Button variant="contained" color="secondary">Send offer</Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <AppBar position="static" color="default">
              <Tabs 
                className={classes.tabs} 
                value={value} 
                indicatorColor="secondary" 
                textColor="secondary"
                onChange={handleChange}
                >
                <Tab className={classes.tabItem} label="Audience" />  
                <Tab className={classes.tabItem} label="Youtube" />
                <Tab className={classes.tabItem} label="Instagram" />
                <Tab disabled className={classes.tabItem} label="Reviews" />
              </Tabs>
            </AppBar>
            
            {value === 0 && <TabContainer>1</TabContainer>}
            {value === 1 && <TabContainer>2</TabContainer>}
            {value === 2 && <TabContainer>3</TabContainer>}
            {value === 3 && <TabContainer>4</TabContainer>}
          </Grid>
        </Grid>
      </Paper>
    </Drawer>
  )
}
