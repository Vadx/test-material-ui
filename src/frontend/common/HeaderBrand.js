import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Button, Box, Tooltip, Typography, MenuItem, Menu } from '@material-ui/core'
import Dehaze from '@material-ui/icons/Dehaze'

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

const useStyles = makeStyles({
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
  }
})

export function HeaderBrand() {
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
      <Box
        display="flex"
        justify="center" 
        alignItems="center"
        justifyContent="space-between"
        className={classes.header}>
        <Box display="flex" alignItems="center">
          <Logo />
          <Box display='inline-flex'>
            <ButtonMenu component={AdapterButton} to="/brand/campaigns" active='true'>Campaigns</ButtonMenu>
            <ButtonMenu component={AdapterButton} to="/brand/мessages">Messages</ButtonMenu>
            <ButtonMenu component={AdapterButton} to="/brand/discover">Discover</ButtonMenu>
            <ButtonMenu component={AdapterButton} to="/brand/insights">Insights</ButtonMenu>
          </Box>
        </Box>
        <Box display="flex"  alignItems="center" justify="flex-end">
          <Tooltip title="Credits are applied to any transactions first before charging your credit card" placement="bottom">
            <Box 
              display="flex" 
              flexDirection="column" 
              justifyContent="center"
              alignItems="center"
              mr={3}
              className={classes.boxBalance}>
              <Typography component="div" variant="caption" className={classes.styleTitle}>ACCOUNT BALANCE</Typography>
              <Typography component="div" variant="caption">$1,960.00</Typography>
            </Box>
          </Tooltip>

          <Button className={classes.buttonInvite} variant="contained" color="primary">Invite Creators</Button>
            
          <Button className={classes.battonMenu} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <Dehaze fontSize='small' style={{color: '#6f7e8b'}} />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={AdapterLink} onClick={handleClose} to="/brand/account-settings">Account settings</MenuItem>
            <MenuItem component={AdapterLink} onClick={handleClose} to="/change-password">Change password</MenuItem>
            <MenuItem component={AdapterLink} onClick={handleClose} to="/login">Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    )
}
