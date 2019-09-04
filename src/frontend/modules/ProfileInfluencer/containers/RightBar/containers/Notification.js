import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Link,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: 'thick solid #4a638b',
    padding: theme.spacing(2),
    background: '#e95b5b',
    color: '#fff'
  }
}))


export function Notification () {
  const classes = useStyles()
  return (
    <Box textAlign="center" className={classes.root} mb={4}>
      <Typography variant="h4" gutterBottom>12%</Typography>
      <Typography variant="h6" gutterBottom>Your response rate is low</Typography>
      <Typography variant="body1" gutterBottom>A low predicted response rate means we don't think you're likely to respond to an invite. You can immediately boost this by <Link>signing up for text notifications</Link> and <Link>verifying your email</Link> and remembering to respond to invites quickly.</Typography>
      <Typography variant="body1" gutterBottom><Link>Learn more</Link> about how we estimate response rates.</Typography>
    </Box>
  )
}
