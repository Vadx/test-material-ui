import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { 
  Button, 
  Box, 
  Tooltip, 
  Typography, 
  MenuItem, 
  Menu, 
  Avatar, 
  AppBar
} from '@material-ui/core'
import { deepOrange } from '@material-ui/core/colors'
import { PendingItems } from './PendingItems'

const ButtonMenu = withStyles(theme => ({
  root: {
    padding: '18px 12px',
    borderRadius: 0,
    fontSize: '13px',
    color: props => props.active ? '#fff' : '#6f7e8b',
    background: props => props.active ? '#434f61' : 'none',
    '&:hover': {
      background: props => props.active ? ' #434f61' : 'none',
      color: '#fff',
    },
  },
}))(Button)

const useStyles = makeStyles(theme => ({
  header: {
    position: 'relative',
    background: '#303845',
    color: '#fff',
    paddingLeft: 20
  },
  buttonInvite: {
    borderRadius: '25px',
    fontSize: '11px'
  },
  styleTitle: {
    color: '#6f7e8b',
  },
  boxBalance: {
    cursor: 'pointer'
  },
  styleAvatar: {
    backgroundColor: deepOrange[500],
  },
  progressButton: {
    paddingBottom: 10
  },
  progressLine: {
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    height: '10px',
    borderRadius: '2px',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,.1)',
    position: 'relative',
    top: -'1px'
  }
}))

export function HeaderInfluencer() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)
  const AdapterButton = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)
  const classes = useStyles()

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }
    
  return (
    <AppBar position="fixed">
      <Box
        display="flex"
        justify="center" 
        alignItems="center"
        justifyContent="space-between"
        className={classes.header}>
        <Box display="flex" alignItems="center">
          <Logo />
          <Box display='inline-flex'>
            <ButtonMenu component={AdapterButton} to="/creator/campaigns" active='true'>Campaigns</ButtonMenu>
            <ButtonMenu component={AdapterButton} to="/creator/мessages">Messages</ButtonMenu>
            <ButtonMenu component={AdapterButton} to="/creator/marketplace">Marketplace</ButtonMenu>
            <ButtonMenu component={AdapterButton} to="/creator/calendar">Calendar</ButtonMenu>
            <ButtonMenu component={AdapterButton} to="/creator/profile">Profile</ButtonMenu>
          </Box>
        </Box>
        <Box display="flex"  alignItems="center" justify="flex-end">
          
          <PendingItems />
          <Tooltip title="Credits are applied to any transactions first before charging your credit card" placement="bottom">
            <Box 
              display="flex" 
              flexDirection="column" 
              justifyContent="center"
              alignItems="flex-start"
              mr={3}
              className={classes.boxBalance}>
              <Typography component="div" variant="caption" className={classes.styleTitle}>Pending funds</Typography>
              <Typography component="div" variant="caption">$130</Typography>
            </Box>
          </Tooltip>
            
          <Button className={classes.battonMenu} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <Avatar className={classes.styleAvatar}>H</Avatar>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Tooltip title="Level up to Grapevine Pro by completing three campaigns. Pro boosts your search ranking and reputation" placement="left">
                <Box className={classes.progressButton}>
                  <Typography variant="overline" display="block" gutterBottom>Lavel 2: Builder</Typography>
                  <Box className={classes.progressLine}>
                    <Box width='33%' p={0} my={0} style={{ background: '#3baaa6', height: '10px' }}></Box> 
                  </Box>
                </Box>
              </Tooltip>
            </MenuItem>
            <MenuItem component={AdapterLink} onClick={handleClose} to="/creator/account-settings">My account</MenuItem>
            <MenuItem component={AdapterLink} onClick={handleClose} to="/creator/terms">Guidelines</MenuItem>
            <MenuItem component={AdapterLink} onClick={handleClose} to="/login">Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </AppBar>
  )
}
