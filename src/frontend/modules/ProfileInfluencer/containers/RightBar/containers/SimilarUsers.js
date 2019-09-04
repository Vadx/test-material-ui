import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Box,
  Typography,
  Tooltip
} from '@material-ui/core'

import { MoreHoriz } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  title: {
    borderBottom: '1px solid #eee',
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  avatar: {
    margin: theme.spacing(0.4)
  }
}))


export function SimilarUsers () {
  const classes = useStyles()
  return (
    <Box>
      <Typography className={classes.title} variant="body2" component="div">Similar to User Name</Typography> 
      <Box display="flex">
        <Tooltip title="User #1" placement="top">
          <Avatar alt="User Name" className={classes.avatar} />
        </Tooltip>
        <Tooltip title="User #2" placement="top">
          <Avatar alt="User Name" className={classes.avatar} />
        </Tooltip>
        <Tooltip title="User #3" placement="top">
          <Avatar alt="User Name" className={classes.avatar} />
        </Tooltip>
        <Tooltip title="View All" placement="top">
          <Avatar alt="User Name" className={classes.avatar}>
            <MoreHoriz />
          </Avatar>
        </Tooltip>
      </Box>
    </Box>
  )
}
