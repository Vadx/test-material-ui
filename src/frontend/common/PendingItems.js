import React from 'react'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import { 
  Button,
  Popover,
  Typography,
  Badge,
  Box
} from '@material-ui/core'

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

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -8,
  },
}))(Badge)

const useStyles = makeStyles(theme => ({
  innerPopover: {
    padding: theme.spacing(2),
  },
}))

export function PendingItems() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <React.Fragment>
      <ButtonMenu aria-describedby={id} style={{marginRight: '30px'}} onClick={handleClick}>
        <StyledBadge badgeContent={1} color="secondary">
          Pending Items
        </StyledBadge>
      </ButtonMenu>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box className={classes.innerPopover}>
          <Typography variant="subtitle2" gutterBottom>Set your video for Radar Test</Typography>
          <Typography variant="caption">Get paid for your unlisted video settings it live</Typography>
        </Box>
      </Popover>
    </React.Fragment>
  )
}