import React, { Component } from 'react'
import styled from 'styled-components'
import { Logo } from '../../common/Logo'
import { UserMenu } from './UserMenu'
import {Button, Grid} from '@material-ui/core'

const HeaderWrap = styled.header`
  position: relative;
  background: #303845;
  color: #fff;
  padding-left: 20px;
`

const Nav = styled.nav`
  display: inline-flex;
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

export class Header extends Component {

  render () {
    return (
      <HeaderWrap>
        <Grid 
          container 
          justify="center" 
          spacing={0}
          alignItems="center"
          alignContent="space-between">
          <Grid container alignItems="center" xs={8}>
            <Logo />
            <Nav>
              <ButtonMenu active>Campaigns</ButtonMenu>
              <ButtonMenu>Messages</ButtonMenu>
              <ButtonMenu>Discover</ButtonMenu>
              <ButtonMenu>Insights</ButtonMenu>
            </Nav>
          </Grid>
          <Grid container alignItems="center" justify="flex-end" xs={4}>
            <ButtonInvite variant="contained" color="primary">Invite Creators</ButtonInvite>
            <UserMenu />
          </Grid>
        </Grid>
      </HeaderWrap>
    )
  }
}
