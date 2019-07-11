import React from 'react'
import styled from 'styled-components'
import {Button, Menu, MenuItem} from '@material-ui/core'
import Dehaze from '@material-ui/icons/Dehaze'

const ButtonMenu = styled(Button)`
  color: #6f7e8b;
`

export function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div>
      <ButtonMenu aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <Dehaze fontSize='small' />
      </ButtonMenu>
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
