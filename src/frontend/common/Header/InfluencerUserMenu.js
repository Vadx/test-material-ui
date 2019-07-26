import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {Button, Menu, MenuItem} from '@material-ui/core'
import Dehaze from '@material-ui/icons/Dehaze'

const useStyles = makeStyles(theme => ({
  buttonMenu: {
    color: '#6f7e8b'
  }
}))

export function InfluencerUserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)
  const classes = useStyles()

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div>
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
        <MenuItem component={AdapterLink} onClick={handleClose} to="/creator/account-settings">My account</MenuItem>
        <MenuItem component={AdapterLink} onClick={handleClose} to="/login">Logout</MenuItem>
      </Menu>
    </div>
  )
}
