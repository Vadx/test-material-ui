import React, { Component } from 'react'
import styled from 'styled-components'
import { Statistic } from './Statistic'
import {Box, Paper, Typography, Fab} from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBack'

const Wrap = styled(Paper)`
  border-radius: 0;
  padding: 5px 10px;
  margin-bottom: 20px;
`

const ButtonBack = styled(Fab)`
  padding: 5px 7px;
  min-width: auto;
  margin-right: 10px;
  border-radius: 3px;
  box-shadow: none;
  height: 34px;
  margin-right: 20px;
`


export class TopStatusBar extends Component {
  render () {
    return (
      <Wrap>
          <Box 
            display="flex" 
            justify="center" 
            spacing={0}
            alignItems="center"
            justifyContent="space-between">
            <Box display="flex" alignItems="center" xs={8}>
              <ButtonBack variant="extended"><ArrowBack /></ButtonBack>
              <Typography variant="subtitle1" gutterBottom>Sed nec mattis leo</Typography>
            </Box>
            <Box display="flex" alignItems="center" justify="flex-end" xs={4}><Statistic /></Box>
          </Box>
      </Wrap>
    )
  }
}
