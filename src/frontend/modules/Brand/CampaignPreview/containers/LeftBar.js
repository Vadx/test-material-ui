import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Typography, Box} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    paddingBottom: '10px',
    marginBottom: '20px',
    borderBottom: '1px solid #f6f6f6'
  },
}))

export function LeftBar () {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Box fontFamily="fontFamily" mb={4}>Campaign Logo</Box>
        <Box mb={4}>
          <Typography className={classes.title} variant="h5" component="h3">Campaign Description</Typography>
          <Typography variant="body2" component="p" gutterBottom>Your campaign details are an important part of running a great campaign. Use the fields below to help creators know what your brand is about and how you're looking to work together.</Typography>
          <Typography variant="body2" component="p" gutterBottom>Your campaign details are an important part of running a great campaign. Use the fields below to help creators know what your brand is about and how you're looking to work together.</Typography>
        </Box>

        <Box mb={4}>
          <Typography className={classes.title} variant="h5" component="h3">Content Guidelines</Typography>
          <Typography variant="body2" component="p" gutterBottom>Your campaign details are an important part of running a great campaign. Use the fields below to help creators know what your brand is about and how you're looking to work together.</Typography>
          <Typography variant="body2" component="p" gutterBottom>Your campaign details are an important part of running a great campaign. Use the fields below to help creators know what your brand is about and how you're looking to work together.</Typography>
      </Box>
    </React.Fragment>
  )
}
