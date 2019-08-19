import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Box} from '@material-ui/core'
import UsersList from './containers/UsersList'
import FooterDiscover from './containers/FooterDiscover';

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(3, 2),
  },
}))

export function Discover () {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <UsersList/>
      <FooterDiscover/>
    </Box>
  )
}
