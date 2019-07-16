import React from 'react'
import { Logo } from '../../common/Logo'
import { UserMenu } from './UserMenu'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {Button, Box, Typography, Tooltip} from '@material-ui/core'

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
  styleTitle: {
    color: '#6f7e8b',
  },
  boxBalance: {
    cursor: 'pointer'
  },
  buttonInvite: {
    borderRadius: '25px',
    fontSize: '11px'
  }
})

export function Header() {
    const classes = useStyles()
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
              <ButtonMenu active='true'>Campaigns</ButtonMenu>
              <ButtonMenu>Messages</ButtonMenu>
              <ButtonMenu>Discover</ButtonMenu>
              <ButtonMenu>Insights</ButtonMenu>
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
            <UserMenu />
          </Box>
        </Box>
    )
}
