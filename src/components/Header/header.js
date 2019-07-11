import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../common/Logo'
import { UserMenu } from './UserMenu'
import { makeStyles } from '@material-ui/core/styles'
import {Button, Box, Typography, Tooltip} from '@material-ui/core'

const HeaderWrap = styled.header`
  position: relative;
  background: #303845;
  color: #fff;
  padding-left: 20px;
`

const ButtonInvite = styled(Button)`
  border-radius: 25px;
  font-size: 11px;
`

const ButtonMenu = styled(Button)`
  padding: 18px 12px;
  color: ${props => props.active ? ' #fff' : '#6f7e8b'};
  background: ${props => props.active ? ' #434f61' : 'none'};
  border-radius: 0;
  font-size: 13px;
  &:hover {
    background: ${props => props.active ? ' #434f61' : 'none'};
  }
`

const useStyles = makeStyles({
  styledTitle: {
    color: '#6f7e8b',
  },
  boxBalance: {
    cursor: 'pointer'
  }
})

export function Header() {
    const classes = useStyles()
    return (
      <HeaderWrap>
        <Box
          display="flex"
          justify="center" 
          alignItems="center"
          justifyContent="space-between">
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
                <Typography component="div" variant="caption" className={classes.styledTitle}>ACCOUNT BALANCE</Typography>
                <Typography component="div" variant="caption">$1,960.00</Typography>
              </Box>
            </Tooltip>
            <ButtonInvite variant="contained" color="primary">Invite Creators</ButtonInvite>
            <UserMenu />
          </Box>
        </Box>
      </HeaderWrap>
    )
}
