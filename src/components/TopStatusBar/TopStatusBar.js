import React, { Component } from 'react'
import styled from 'styled-components'
import {Grid, Paper} from '@material-ui/core'
// import Menu from '@material-ui/icons/Menu'

const Wrap = styled(Paper)`
  border-radius: 0;
  padding: 5px 10px;
  margin-bottom: 30px;
`


export class TopStatusBar extends Component {

  render () {
    return (
      <Wrap>
          <Grid 
            container 
            justify="center" 
            spacing={0}
            alignItems="center"
            alignContent="space-between">
            <Grid container alignItems="center" xs={6}>
              Left
            </Grid>
            <Grid container alignItems="center" justify="flex-end" xs={6}>
              Right
            </Grid>
          </Grid>
      </Wrap>
    )
  }
}
