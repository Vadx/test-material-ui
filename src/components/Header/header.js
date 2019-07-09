import React, { Component } from 'react'
import styled from 'styled-components'
import { Logo } from '../../common/Logo'
import {Button, Grid} from '@material-ui/core'
import Menu from '@material-ui/icons/Menu'

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
  padding: 20px 12px;
  color: #6f7e8b;
`

const DropDownWrap = styled(Button)`
  color: #6f7e8b;
  margin-left: 5px;
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
              <ButtonMenu selected={true}>Campaigns</ButtonMenu>
              <ButtonMenu>Messages</ButtonMenu>
              <ButtonMenu>Discover</ButtonMenu>
              <ButtonMenu>Insights</ButtonMenu>
            </Nav>
          </Grid>
          <Grid container alignItems="center" justify="flex-end" xs={4}>
            <ButtonInvite variant="contained" color="primary">Invite Creators</ButtonInvite>
            <DropDownWrap size="small"><Menu/></DropDownWrap>
          </Grid>
        </Grid>
      </HeaderWrap>
    )
  }
}
