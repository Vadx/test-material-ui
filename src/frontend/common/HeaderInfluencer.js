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
  AppBar, 
  Badge
  // Popover 
} from '@material-ui/core'
import { deepOrange } from '@material-ui/core/colors'

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
    padding: '10px 10px'
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

  // const open = Boolean(anchorEl)
  // const id = open ? 'simple-popover' : undefined

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
          <ButtonMenu style={{marginRight: '30px'}}>
            <StyledBadge className={classes.badge} badgeContent={1} color="secondary">
              Pending Items
            </StyledBadge>
          </ButtonMenu>
          {/* <Button aria-describedby={id} variant="contained">Open Popover</Button> */}
          {/* <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography>The content of the Popover.</Typography>
          </Popover> */}
          <Tooltip title="Credits are applied to any transactions first before charging your credit card" placement="bottom">
            <Box 
              display="flex" 
              flexDirection="column" 
              justifyContent="center"
              alignItems="center"
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
            <Tooltip title="Level up to Grapevine Pro by completing three campaigns. Pro boosts your search ranking and reputation" placement="left">
              <Box className={classes.progressButton}>
                <Typography variant="overline" display="block" gutterBottom>Lavel 2: Builder</Typography>
                <Box className={classes.progressLine}>
                  <Box width='33%' p={0} my={0} style={{ background: '#3baaa6', height: '10px' }}></Box> 
                </Box>
              </Box>
            </Tooltip>
            <MenuItem component={AdapterLink} onClick={handleClose} to="/creator/account-settings">My account</MenuItem>
            <MenuItem component={AdapterLink} onClick={handleClose} to="/creator/terms">Guidelines</MenuItem>
            <MenuItem component={AdapterLink} onClick={handleClose} to="/login">Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </AppBar>
  )
}
