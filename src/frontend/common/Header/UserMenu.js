import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Button, Menu, MenuItem} from '@material-ui/core'
import Dehaze from '@material-ui/icons/Dehaze'

const useStyles = makeStyles(theme => ({
  buttonMenu: {
    color: '#6f7e8b'
  }
}))

export function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
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
        <MenuItem onClick={handleClose}>Account settings</MenuItem>
        <MenuItem onClick={handleClose}>Change password</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
