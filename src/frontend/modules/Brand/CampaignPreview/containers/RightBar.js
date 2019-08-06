import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Typography, Box} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
  },
}))

export function RightBar () {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Box fontFamily="fontFamily" mb={4}>Right</Box>
    </React.Fragment>
  )
}
